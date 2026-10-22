const fs = require('fs');
const path = require('path');

const base = 'src/components/homepage';

// ========================
// CategoriesSection
// ========================
const categoriesContent = `import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Fresh Fruits', count: '120+ Items', emoji: '\u{1F34E}', gradient: 'from-orange-400 to-red-400', bg: 'bg-orange-50', ring: 'ring-orange-200', hover: 'hover:bg-orange-100', slug: 'fruits' },
  { id: 2, name: 'Vegetables', count: '95+ Items', emoji: '\u{1F966}', gradient: 'from-green-400 to-emerald-500', bg: 'bg-green-50', ring: 'ring-green-200', hover: 'hover:bg-green-100', slug: 'vegetables' },
  { id: 3, name: 'Dairy & Eggs', count: '60+ Items', emoji: '\u{1F95B}', gradient: 'from-sky-400 to-blue-400', bg: 'bg-sky-50', ring: 'ring-sky-200', hover: 'hover:bg-sky-100', slug: 'dairy' },
  { id: 4, name: 'Bakery', count: '45+ Items', emoji: '\u{1F35E}', gradient: 'from-amber-400 to-yellow-400', bg: 'bg-amber-50', ring: 'ring-amber-200', hover: 'hover:bg-amber-100', slug: 'bakery' },
  { id: 5, name: 'Meat & Fish', count: '70+ Items', emoji: '\u{1F357}', gradient: 'from-rose-400 to-pink-400', bg: 'bg-rose-50', ring: 'ring-rose-200', hover: 'hover:bg-rose-100', slug: 'meat' },
  { id: 6, name: 'Snacks', count: '80+ Items', emoji: '\u{1F37F}', gradient: 'from-purple-400 to-violet-400', bg: 'bg-purple-50', ring: 'ring-purple-200', hover: 'hover:bg-purple-100', slug: 'snacks' },
  { id: 7, name: 'Beverages', count: '55+ Items', emoji: '\u{1F9C3}', gradient: 'from-teal-400 to-cyan-400', bg: 'bg-teal-50', ring: 'ring-teal-200', hover: 'hover:bg-teal-100', slug: 'beverages' },
  { id: 8, name: 'Organic', count: '40+ Items', emoji: '\u{1F33F}', gradient: 'from-lime-400 to-green-400', bg: 'bg-lime-50', ring: 'ring-lime-200', hover: 'hover:bg-lime-100', slug: 'organic' },
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
              to={\`/shop?category=\${cat.slug}\`}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={\`group flex flex-col items-center gap-3 rounded-2xl border border-transparent p-4 text-center transition-all duration-300 \${cat.bg} \${cat.hover} ring-1 \${cat.ring} hover:ring-2 hover:-translate-y-1.5 hover:shadow-lg\`}
            >
              <div className={\`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br \${cat.gradient} shadow-md transition-transform duration-300 group-hover:scale-110\`}>
                <span className="text-2xl">{cat.emoji}</span>
                <div className={\`absolute inset-0 rounded-2xl bg-gradient-to-br \${cat.gradient} opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40\`} />
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
`;

// ========================
// FeaturesSection
// ========================
const featuresContent = `import React from 'react';
import { Truck, ShieldCheck, Leaf, Clock, ThumbsUp, RefreshCw } from 'lucide-react';

const features = [
  { id: 1, Icon: Truck, title: 'Free Delivery', desc: 'On all orders above 500 BDT. Fast, reliable, door-to-door.', gradient: 'from-green-500 to-emerald-600', bg: 'bg-green-50', iconColor: 'text-green-600' },
  { id: 2, Icon: ShieldCheck, title: '100% Secure', desc: 'Your payments are encrypted and completely safe with us.', gradient: 'from-blue-500 to-sky-600', bg: 'bg-blue-50', iconColor: 'text-blue-600' },
  { id: 3, Icon: Leaf, title: 'Farm Fresh', desc: 'Sourced directly from certified organic farms, daily.', gradient: 'from-lime-500 to-green-600', bg: 'bg-lime-50', iconColor: 'text-lime-600' },
  { id: 4, Icon: Clock, title: 'Same-Day Delivery', desc: 'Order before 12 PM and get it delivered the same day.', gradient: 'from-orange-500 to-amber-500', bg: 'bg-orange-50', iconColor: 'text-orange-600' },
  { id: 5, Icon: ThumbsUp, title: 'Best Quality', desc: 'Every product passes our strict quality checks before listing.', gradient: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', iconColor: 'text-violet-600' },
  { id: 6, Icon: RefreshCw, title: 'Easy Returns', desc: 'Not satisfied? Return within 24 hours, no questions asked.', gradient: 'from-rose-500 to-pink-500', bg: 'bg-rose-50', iconColor: 'text-rose-600' },
];

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '500+', label: 'Fresh Products' },
  { value: '4.9\u2605', label: 'Average Rating' },
  { value: '99%', label: 'On-Time Delivery' },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
        <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-green-500/5 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            Why Choose Us
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built Around Your{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Trust & Convenience
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            We go beyond grocery delivery. We deliver peace of mind, freshness,
            and a seamless experience every single time.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ id, Icon, title, desc, gradient, bg, iconColor }) => (
            <div
              key={id}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
            >
              <div className={\`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r \${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100\`} />
              <div className="flex items-start gap-5">
                <div className={\`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl \${bg} transition-transform duration-300 group-hover:scale-110\`}>
                  <Icon size={22} className={iconColor} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/5 pt-14 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm font-medium text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

// ========================
// PromoSection
// ========================
const promoContent = `import React from 'react';
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
                  <span className={\`\${deal.badgeColor} rounded-full px-3 py-1 text-xs font-bold text-white\`}>
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
                  <span className={\`rounded-xl bg-gradient-to-r \${deal.accentColor} px-4 py-2 text-2xl font-black text-white shadow-lg\`}>
                    {deal.discount}
                  </span>
                  <div>
                    <p className="text-xl font-extrabold text-white">\u09F3{deal.price}</p>
                    <p className="text-sm text-slate-400 line-through">\u09F3{deal.oldPrice}</p>
                  </div>
                </div>
                <a
                  href={\`/shop?deal=\${deal.slug}\`}
                  className={\`group/btn mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r \${deal.accentColor} px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0\`}
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
`;

// ========================
// NewsletterSection
// ========================
const newsletterContent = `import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Leaf } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-emerald-700 to-teal-800 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/20 shadow-xl">
          <Leaf size={28} className="text-white" />
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm">
          <Mail size={12} />
          Stay In The Loop
        </span>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Get Fresh Deals in
          <br />
          <span className="text-green-200">Your Inbox</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-green-100/80">
          Subscribe and be the first to know about exclusive discounts, new arrivals, and seasonal specials curated just for you.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-green-100">
          {['Weekly fresh deals', 'No spam, ever', 'Unsubscribe anytime'].map((perk) => (
            <span key={perk} className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-green-300" />
              {perk}
            </span>
          ))}
        </div>
        <div className="mt-10">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/20 bg-white/10 py-8 px-6 backdrop-blur-sm">
              <CheckCircle size={40} className="text-green-300" />
              <p className="text-xl font-bold text-white">You are subscribed!</p>
              <p className="text-sm text-green-100/80">Watch your inbox for the freshest deals every week.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-0">
              <div className="relative flex-1">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="h-14 w-full rounded-2xl bg-white pl-12 pr-5 text-sm font-medium text-slate-800 placeholder-slate-400 outline-none ring-2 ring-transparent focus:ring-green-300 sm:rounded-r-none sm:rounded-l-2xl"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-7 text-sm font-bold text-white shadow-lg transition-all hover:bg-slate-800 active:scale-[0.98] disabled:opacity-70 sm:rounded-l-none sm:rounded-r-2xl"
              >
                {loading ? (
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                ) : (
                  <>Subscribe <Send size={15} /></>
                )}
              </button>
            </form>
          )}
        </div>
        <p className="mt-4 text-xs text-green-200/60">
          By subscribing, you agree to our Privacy Policy. We will never share your data.
        </p>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(base, 'categories/CategoriesSection.jsx'), categoriesContent, 'utf8');
fs.writeFileSync(path.join(base, 'features/FeaturesSection.jsx'), featuresContent, 'utf8');
fs.writeFileSync(path.join(base, 'promo/PromoSection.jsx'), promoContent, 'utf8');
fs.writeFileSync(path.join(base, 'newsletter/NewsletterSection.jsx'), newsletterContent, 'utf8');

console.log('All 4 files written successfully!');
