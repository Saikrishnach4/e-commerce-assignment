import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  if (product.id === 8) {
    return (
      <div className="bg-white rounded-xl shadow p-4 flex flex-row items-center w-full gap-4">
        <div className="flex-shrink-0 flex items-center justify-center h-full">
          <Image src={product.image} alt={product.title} width={112} height={176} className="w-28 h-44 object-contain" unoptimized />
        </div>
        <div className="flex flex-col flex-1 items-start justify-between h-full">
          <div className="font-bold text-xl mb-1">{product.title}</div>
          <div className="font-bold text-2xl mb-2">${product.price}</div>
          <div className="flex items-center mb-2">
            <span className="text-blue-900 text-lg mr-2">&#9733;&#9733;&#9733;&#9733;&#189;</span>
          </div>
          <div className="text-sm text-gray-700 mb-2">Lorem ipsum dolor amet, consectetur euisagend.</div>
          <div className="text-xs text-gray-500 mb-1">Category</div>
          <div className="text-xs text-blue-900 mb-4">Electronics</div>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-6 py-2 font-semibold w-full mt-auto"
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <Image src={product.image} alt={product.title} width={96} height={96} className="w-24 h-24 object-contain mb-2" unoptimized />
      <div className="font-semibold text-center mb-1">{product.title}</div>
      <div className="font-bold mb-2">${product.price}</div>
      {product.rating && (
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 mr-1">{'★'.repeat(Math.round(product.rating))}</span>
          <span className="text-xs text-gray-500">{product.rating}</span>
        </div>
      )}
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-1 font-semibold mt-auto"
        onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
      >
        Add to Cart
      </button>
    </div>
  );
}