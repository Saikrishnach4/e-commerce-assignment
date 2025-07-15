import { useState } from 'react';

const categories = ['All', 'Electronics', 'Clothing', 'Home'];
const brands = ['All', 'Caycroy'];

export default function Sidebar({ selectedCategory, setSelectedCategory, priceRange, setPriceRange, selectedBrand, setSelectedBrand, maxPrice }) {
  const [manualPrice, setManualPrice] = useState(priceRange);

  // Sync manual input with slider
  const handleManualPriceChange = (e) => {
    const value = Number(e.target.value);
    setManualPrice(value);
    if (!isNaN(value) && value >= 0 && value <= maxPrice) {
      setPriceRange(value);
    }
  };

  // Sync slider with manual input
  const handleSliderChange = (value) => {
    setPriceRange(value);
    setManualPrice(value);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main blue filter box */}
      <aside className="bg-blue-900 text-white rounded-xl p-4 w-full max-w-xs">
        <h2 className="font-bold text-lg mb-4">Filters</h2>
        <div className="mb-6">
          <div className="font-semibold mb-2">Category</div>
          <div className="flex flex-col gap-2">
            {categories.map(cat => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                  className="accent-blue-500"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <div className="font-semibold mb-2">Price</div>
          <input
            type="range"
            min={0}
            max={maxPrice}
            value={priceRange}
            onChange={e => handleSliderChange(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="flex justify-between text-xs mt-1">
            <span>$0</span>
            <span>${priceRange}</span>
          </div>
        </div>
      </aside>
      {/* White card for Caycroy and price input */}
      <div className="bg-white rounded-xl p-4 shadow w-full max-w-xs">
        <div className="font-semibold mb-2">Caycroy</div>
        <div className="flex flex-col gap-2 mb-4">
          {brands.map(brand => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
                className="accent-blue-500"
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
        <div className="text-xs font-semibold mb-1">Price</div>
        <input
          type="number"
          min={0}
          max={maxPrice}
          value={manualPrice}
          onChange={handleManualPriceChange}
          className="w-full rounded border px-2 py-1 text-black"
        />
      </div>
    </div>
  );
} 