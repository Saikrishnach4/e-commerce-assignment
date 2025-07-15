import { useRouter } from 'next/router';
import products from '@/data/products';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '@/redux/cartSlice';
import Image from 'next/image';

const mockReviews = [
  { name: 'Alice', rating: 5, text: 'Great product, highly recommend!' },
  { name: 'Bob', rating: 4, text: 'Works well, but could be cheaper.' },
];

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
        <div className="flex-1 flex items-center justify-center">
          <Image src={product.image} alt={product.title} width={256} height={256} className="w-64 h-64 object-contain rounded-xl bg-white shadow" unoptimized />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="text-2xl font-bold text-blue-900 mb-2">${product.price}</div>
          <div className="mb-2 text-gray-600">{product.description}</div>
          <div className="mb-2 text-sm text-gray-500">Category: {product.category}</div>
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
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-2">Reviews</h2>
            <div className="space-y-4">
              {mockReviews.map((review, idx) => (
                <div key={idx} className="bg-white rounded p-4 shadow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
                  </div>
                  <div className="text-gray-700 text-sm">{review.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 