import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart, clearCart } from '@/redux/cartSlice';

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-[#f5f8fd] min-h-screen flex flex-col items-stretch">
      <main className="max-w-4xl mx-auto w-full px-6 py-12">
        <h1 className="text-2xl font-bold mb-8">Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 py-20">Your cart is empty.</div>
        ) : (
          <div className="bg-white rounded-xl shadow p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Product</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Quantity</th>
                    <th className="py-2">Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="border-b last:border-0">
                      <td className="py-2 flex items-center gap-4">
                        <img src={item.image} alt={item.title} className="w-12 h-12 object-contain bg-gray-100 rounded" />
                        <span>{item.title}</span>
                      </td>
                      <td className="py-2 font-semibold">${item.price}</td>
                      <td className="py-2">
                        <input
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={e => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
                          className="w-16 rounded border px-2 py-1"
                        />
                      </td>
                      <td className="py-2 font-semibold">${item.price * item.quantity}</td>
                      <td className="py-2">
                        <button
                          className="text-red-500 hover:underline"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end mt-6">
              <div className="bg-blue-100 rounded-lg p-4 min-w-[220px]">
                <div className="flex justify-between font-semibold mb-2">
                  <span>Subtotal:</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Shipping:</span>
                  <span>$0</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>${subtotal}</span>
                </div>
                <button
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 font-semibold"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 