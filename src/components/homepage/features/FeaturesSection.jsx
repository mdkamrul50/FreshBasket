import React from 'react';
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
  { value: '4.9★', label: 'Average Rating' },
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
              <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="flex items-start gap-5">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${bg} transition-transform duration-300 group-hover:scale-110`}>
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
