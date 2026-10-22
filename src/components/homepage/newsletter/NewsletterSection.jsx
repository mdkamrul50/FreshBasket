import React, { useState } from 'react';
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
