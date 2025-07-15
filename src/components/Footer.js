import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Filters */}
        <div>
          <div className="font-bold mb-2">Filters</div>
          <ul className="text-sm space-y-1">
            <li>All</li>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home</li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <div className="font-bold mb-2">About Us</div>
          <ul className="text-sm space-y-1">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <div className="font-bold mb-2">Follow Us</div>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400"><Facebook size={24} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400"><Twitter size={24} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-400"><Instagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="text-xs text-center text-gray-300 mt-6">© 2024 American</div>
    </footer>
  );
} 