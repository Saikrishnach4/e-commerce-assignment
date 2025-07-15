import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';
import productsData from '@/data/products';
import { useRouter } from 'next/router';

export default function Home({ search, setSearch }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const router = useRouter();

  const maxPrice = Math.max(...productsData.map(p => p.price), 1000);

  // Sync state with URL on mount
  useEffect(() => {
    const { category, price, brand, search: searchQuery } = router.query;
    if (category) setSelectedCategory(category);
    if (brand) setSelectedBrand(brand);
    if (price) setPriceRange(Number(price));
    if (searchQuery && setSearch) setSearch(searchQuery);
    // eslint-disable-next-line
  }, []);

  // Update URL when filters change
  useEffect(() => {
    const query = {};
    if (selectedCategory && selectedCategory !== 'All') query.category = selectedCategory;
    if (selectedBrand && selectedBrand !== 'All') query.brand = selectedBrand;
    if (priceRange !== 1000) query.price = priceRange;
    if (search && search.trim() !== '') query.search = search;
    router.replace({ pathname: '/', query }, undefined, { shallow: true });
    // eslint-disable-next-line
  }, [selectedCategory, selectedBrand, priceRange, search]);

  const filteredProducts = productsData.filter(product => {
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchBrand = selectedBrand === 'All' || product.brand === selectedBrand;
    const matchPrice = product.price <= priceRange;
    const matchSearch =
      search.trim() === '' ||
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchBrand && matchPrice && matchSearch;
  });

  return (
    <div className="bg-[#f5f8fd] min-h-screen flex flex-col items-stretch">
      <main className="flex flex-1 gap-8 px-6 py-8 max-w-7xl mx-auto w-full">
        <div className="hidden md:block w-64 flex-shrink-0">
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            maxPrice={maxPrice}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
          <ProductGrid products={filteredProducts} />
          {filteredProducts.length === 0 && (
            <div className="text-center text-gray-500 mt-8">No products found.</div>
          )}
        </div>
      </main>
    </div>
  );
}
