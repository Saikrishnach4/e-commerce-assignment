import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';
import productsData from '@/data/products';

export default function Home() {
  // Filtering state
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedBrand, setSelectedBrand] = useState('All');

  // Find max price for slider
  const maxPrice = Math.max(...productsData.map(p => p.price), 1000);

  // Filtering logic
  const filteredProducts = productsData.filter(product => {
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchBrand = selectedBrand === 'All' || product.brand === selectedBrand;
    const matchPrice = product.price <= priceRange;
    return matchCategory && matchBrand && matchPrice;
  });

  return (
    <div className="bg-[#f5f8fd] min-h-screen flex flex-col items-stretch">
      <main className="flex flex-1 gap-8 px-6 py-8 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
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
        {/* Mobile sidebar (optional) can be added later */}
        {/* Product Listing */}
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
