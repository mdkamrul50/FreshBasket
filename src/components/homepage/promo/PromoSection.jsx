import React from 'react';
import { Tag, ArrowRight, Zap } from 'lucide-react';

const deals = [
  {
    id: 1,
    label: 'Weekend Special',
    title: 'Fresh Fruits Bundle',
    desc: 'Get 5 seasonal fruits in one premium bundle. Packed fresh, delivered same day.',
    discount: '35% OFF',
    price: '299',
    oldPrice: '460',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=700&q=80',
    badge: 'Limited Time',
    badgeColor: 'bg-rose-500',
    accentColor: 'from-orange-500 to-rose-500',
    slug: 'fruits-bundle',
  },
  {
    id: 2,
    label: 'Daily Essential',
    title: 'Organic Veggie Box',
    desc: '10 hand-picked organic vegetables curated by our nutrition experts.',
    discount: '28% OFF',
    price: '349',
    oldPrice: '485',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700&q=80',
    badge: 'Best Value',
    badgeColor: 'bg-green-600',
    accentColor: 'from-green-500 to-emerald-600',
    slug: 'veggie-box',
  },
];

export default function PromoSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8faf7] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-lime-100/50 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rose-600 shadow-sm">
            <Zap size={12} className="fill-rose-500 text-rose-500" />
            Hot Deals
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Exclusive{' '}
            <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
              Weekly Offers
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
            Grab the best deals before they expire. Fresh, curated, and unbeatable prices every week.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="group relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-900/40"
            >
              <div className="absolute inset-0">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
              </div>
              <div className="relative z-10 p-8 sm:p-10">
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className={`${deal.badgeColor} rounded-full px-3 py-1 text-xs font-bold text-white`}>
                    {deal.badge}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    <Tag size={11} />
                    {deal.label}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">{deal.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-300">{deal.desc}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className={`rounded-xl bg-gradient-to-r ${deal.accentColor} px-4 py-2 text-2xl font-black text-white shadow-lg`}>
                    {deal.discount}
                  </span>
                  <div>
                    <p className="text-xl font-extrabold text-white">৳{deal.price}</p>
                    <p className="text-sm text-slate-400 line-through">৳{deal.oldPrice}</p>
                  </div>
                </div>
                <a
                  href={`/shop?deal=${deal.slug}`}
                  className={`group/btn mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${deal.accentColor} px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0`}
                >
                  Grab Deal
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-rose-200 bg-rose-50 px-6 py-4 text-sm font-semibold text-rose-700">
          <Zap size={16} className="fill-rose-500 text-rose-500" />
          Deals refresh every Sunday midnight. Hurry before they are gone!
        </div>
      </div>
    </section>
  );
}
