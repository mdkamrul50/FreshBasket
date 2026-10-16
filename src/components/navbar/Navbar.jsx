import React, { useState } from 'react';
import {
  ShoppingBag,
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Heart,
  Phone,
  MapPin,
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart count

  return (
    <header className="w-full font-sans sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-emerald-700 text-white text-xs md:text-sm py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1">
            <Phone size={14} /> +880 17772-237629
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <MapPin size={14} /> Dhaka, Bangladesh
          </span>
        </div>
        <div className="text-center font-medium">
          ⚡ Get 20% OFF on your first order! Use code:{' '}
          <span className="font-bold underline">FRESH20</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#help" className="hover:underline">
            Help & Support
          </a>
          <span>|</span>
          <a href="#track" className="hover:underline">
            Track Order
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="bg-emerald-600 text-white p-2 rounded-xl shadow-md">
            <ShoppingBag className="h-6 w-6" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-slate-800">
              Fresh<span className="text-emerald-600">Basket</span>
            </span>
            <span className="block text-[10px] font-semibold tracking-widest text-emerald-600 uppercase -mt-1">
              Organic & Fresh
            </span>
          </div>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for fresh vegetables, fruits, dairy, bakery..."
              className="w-full pl-4 pr-10 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all text-sm"
            />
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full transition-colors">
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Right Icons / Actions */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Wishlist Button */}
          <button className="hidden sm:flex items-center justify-center p-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all relative">
            <Heart size={22} />
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* User Profile Button */}
          <button className="flex items-center space-x-1.5 text-gray-700 hover:text-emerald-600 p-2 hover:bg-emerald-50 rounded-full transition-all">
            <User size={22} />
            <span className="hidden lg:inline text-sm font-medium">
              Account
            </span>
          </button>

          {/* Cart Button */}
          <button className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-full shadow-sm transition-all">
            <div className="relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-900 text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline font-semibold text-sm">
              $45.80
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-emerald-600 p-1.5 focus:outline-none"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search groceries..."
            className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-500 text-sm"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-emerald-600 text-white p-1.5 rounded-full">
            <Search size={14} />
          </button>
        </div>
      </div>

      {/* Navigation Categories Menu Bar */}
      <nav className="border-t border-gray-100 hidden md:block bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center space-x-8 py-2.5 text-sm font-medium text-gray-700">
            <li>
              <a
                href="#all"
                className="text-emerald-600 font-bold hover:text-emerald-700 flex items-center gap-1"
              >
                All Categories
              </a>
            </li>
            <li>
              <a
                href="#fruits"
                className="hover:text-emerald-600 transition-colors"
              >
                Fruits & Vegetables
              </a>
            </li>
            <li>
              <a
                href="#dairy"
                className="hover:text-emerald-600 transition-colors"
              >
                Dairy & Eggs
              </a>
            </li>
            <li>
              <a
                href="#bakery"
                className="hover:text-emerald-600 transition-colors"
              >
                Bakery & Snacks
              </a>
            </li>
            <li>
              <a
                href="#beverages"
                className="hover:text-emerald-600 transition-colors"
              >
                Beverages
              </a>
            </li>
            <li>
              <a
                href="#meat"
                className="hover:text-emerald-600 transition-colors"
              >
                Meat & Seafood
              </a>
            </li>
            <li>
              <a
                href="#offers"
                className="text-rose-500 font-semibold hover:text-rose-600 transition-colors"
              >
                🔥 Hot Offers
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pt-2 pb-4 space-y-3">
          <a
            href="#fruits"
            className="block py-2 text-gray-700 font-medium hover:text-emerald-600 border-b border-gray-100"
          >
            Fruits & Vegetables
          </a>
          <a
            href="#dairy"
            className="block py-2 text-gray-700 font-medium hover:text-emerald-600 border-b border-gray-100"
          >
            Dairy & Eggs
          </a>
          <a
            href="#bakery"
            className="block py-2 text-gray-700 font-medium hover:text-emerald-600 border-b border-gray-100"
          >
            Bakery & Snacks
          </a>
          <a
            href="#beverages"
            className="block py-2 text-gray-700 font-medium hover:text-emerald-600 border-b border-gray-100"
          >
            Beverages
          </a>
          <a
            href="#meat"
            className="block py-2 text-gray-700 font-medium hover:text-emerald-600 border-b border-gray-100"
          >
            Meat & Seafood
          </a>
          <a
            href="#offers"
            className="block py-2 text-rose-500 font-bold border-b border-gray-100"
          >
            🔥 Hot Offers
          </a>
          <div className="pt-2 flex justify-between items-center text-sm text-gray-600">
            <a href="#track" className="hover:underline">
              Track Order
            </a>
            <a href="#help" className="hover:underline">
              Help & Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
