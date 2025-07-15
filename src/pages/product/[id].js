import { useRouter } from 'next/router';
import products from '@/data/products';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '@/redux/cartSlice';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id === Number(id));
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Product not found.</div>;
  }

  return (
    <div className="bg-[#f5f8fd] min-h-screen flex flex-col items-stretch">
      <main className="flex flex-col md:flex-row gap-12 px-6 py-12 max-w-5xl mx-auto w-full">
        {/* Image section */}
        <div className="flex-1 flex items-center justify-center">
          <img src={product.image} alt={product.title} className="w-64 h-64 object-contain rounded-xl bg-white shadow" />
        </div>
        {/* Details section */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="text-2xl font-bold text-blue-900 mb-2">${product.price}</div>
          <div className="mb-2 text-gray-600">{product.description}</div>
          <div className="mb-2 text-sm text-gray-500">Category: {product.category}</div>
          {/* Quantity selector */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-semibold">Quantity:</span>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              className="w-16 rounded border px-2 py-1"
            />
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 font-semibold text-lg"
            onClick={() => dispatch(addToCart({ ...product, quantity }))}
          >
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  );
} 