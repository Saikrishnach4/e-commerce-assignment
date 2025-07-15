import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-24 h-24 object-contain mb-2" />
      <div className="font-semibold text-center mb-1">{product.title}</div>
      <div className="font-bold mb-2">${product.price}</div>
      {/* Optional: Rating */}
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