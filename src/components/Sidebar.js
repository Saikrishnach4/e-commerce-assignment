import { useState } from 'react';

const categories = ['All', 'Electronics', 'Clothing', 'Home'];

export default function Sidebar({ selectedCategory, setSelectedCategory, priceRange, setPriceRange, selectedBrand, setSelectedBrand, maxPrice }) {
  const [manualPrice, setManualPrice] = useState(priceRange);

  const handleManualPriceChange = (e) => {
    const value = Number(e.target.value);
    setManualPrice(value);
    if (!isNaN(value) && value >= 0 && value <= maxPrice) {
      setPriceRange(value);
    }
  };

  const handleSliderChange = (value) => {
    setPriceRange(value);
    setManualPrice(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <aside className="bg-[#0068c2] text-white rounded-xl p-4 w-full max-w-xs">
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
      <div className="bg-white rounded-xl p-4 shadow w-full max-w-xs">
        <div className="font-bold mb-2">Caycroy</div>
        <div className="flex flex-col gap-2 mb-4">
          {categories.map(cat => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="caycroy-category"
                value={cat}
                checked={selectedBrand === cat}
                onChange={() => setSelectedBrand(cat)}
                className="accent-blue-500"
              />
              <span>{cat}</span>
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