import { useSelector } from 'react-redux';
import { ShoppingCart, User } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Header({ search, setSearch }) {
  const cartCount = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  const router = useRouter();

  return (
    <header className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="font-bold text-xl flex-1">Logo</div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full rounded-md pl-10 pr-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
      </div>

      {/* Cart and Avatar */}
      <div className="flex-1 flex justify-end items-center gap-6">
        <div className="relative cursor-pointer" onClick={() => router.push('/cart')}>
          <ShoppingCart className="w-7 h-7" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">
              {cartCount}
            </span>
          )}
        </div>
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
          <User className="text-blue-900 w-5 h-5" />
        </div>
      </div>
    </header>
  );
} 