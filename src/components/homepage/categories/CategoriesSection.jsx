import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Fresh Fruits', count: '120+ Items', emoji: '🍎', gradient: 'from-orange-400 to-red-400', bg: 'bg-orange-50', ring: 'ring-orange-200', hover: 'hover:bg-orange-100', slug: 'fruits' },
  { id: 2, name: 'Vegetables', count: '95+ Items', emoji: '🥦', gradient: 'from-green-400 to-emerald-500', bg: 'bg-green-50', ring: 'ring-green-200', hover: 'hover:bg-green-100', slug: 'vegetables' },
  { id: 3, name: 'Dairy & Eggs', count: '60+ Items', emoji: '🥛', gradient: 'from-sky-400 to-blue-400', bg: 'bg-sky-50', ring: 'ring-sky-200', hover: 'hover:bg-sky-100', slug: 'dairy' },
  { id: 4, name: 'Bakery', count: '45+ Items', emoji: '🍞', gradient: 'from-amber-400 to-yellow-400', bg: 'bg-amber-50', ring: 'ring-amber-200', hover: 'hover:bg-amber-100', slug: 'bakery' },
  { id: 5, name: 'Meat & Fish', count: '70+ Items', emoji: '🍗', gradient: 'from-rose-400 to-pink-400', bg: 'bg-rose-50', ring: 'ring-rose-200', hover: 'hover:bg-rose-100', slug: 'meat' },
  { id: 6, name: 'Snacks', count: '80+ Items', emoji: '🍿', gradient: 'from-purple-400 to-violet-400', bg: 'bg-purple-50', ring: 'ring-purple-200', hover: 'hover:bg-purple-100', slug: 'snacks' },
  { id: 7, name: 'Beverages', count: '55+ Items', emoji: '🧃', gradient: 'from-teal-400 to-cyan-400', bg: 'bg-teal-50', ring: 'ring-teal-200', hover: 'hover:bg-teal-100', slug: 'beverages' },
  { id: 8, name: 'Organic', count: '40+ Items', emoji: '🌿', gradient: 'from-lime-400 to-green-400', bg: 'bg-lime-50', ring: 'ring-lime-200', hover: 'hover:bg-lime-100', slug: 'organic' },
];

export default function CategoriesSection() {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-green-50 to-emerald-100 opacity-60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-lime-50 to-green-100 opacity-50 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            Shop by Category
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Fresh Collections
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
            Handpicked from the finest sources. Find everything you need for a healthy, delicious life.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group flex flex-col items-center gap-3 rounded-2xl border border-transparent p-4 text-center transition-all duration-300 ${cat.bg} ${cat.hover} ring-1 ${cat.ring} hover:ring-2 hover:-translate-y-1.5 hover:shadow-lg`}
            >
              <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} shadow-md transition-transform duration-300 group-hover:scale-110`}>
                <span className="text-2xl">{cat.emoji}</span>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cat.gradient} opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40`} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 leading-tight">{cat.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
