import React from 'react';

// Apni apnar project folder-e image-ti "hero-banner.jpg" name rakhben
import heroImage from '../../../assets/hero-banner.jpg';

const HeroBanner = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white shadow-2xl min-h-[420px] md:min-h-[500px] flex flex-col md:flex-row items-center justify-between">
        {/* Background Image Container with Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={heroImage}
            alt="Fresh Organic Grocery Basket"
            className="w-full h-full  object-right md:object-center"
          />
          {/* Subtle overlay for better text readability on small screens */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:w-2/3"></div>
        </div>

        {/* Left Content Area (Sits over the dark left side of the image) */}
        <div className="relative z-10 p-6 sm:p-10 md:p-12 lg:p-16 max-w-xl flex flex-col items-start justify-center">
          {/* Offer Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 backdrop-blur-md">
            <span>🌿 100% Organic & Farm Fresh</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-4">
            Freshness <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
              Delivered
            </span>{' '}
            To Your Door
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed max-w-md">
            Discover handpicked artisanal bakery, organic dairy, exotic fruits,
            and fresh herbs tailored for your healthy daily life.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#shop-now"
              className="w-full sm:w-auto text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Shop Now
            </a>
            <a
              href="#offers"
              className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-2xl border border-white/20 transition-all backdrop-blur-sm"
            >
              View Offers
            </a>
          </div>

          {/* Feature Highlights */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 w-full text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold text-lg">✓</span> Free
              Delivery $30+
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold text-lg">✓</span> Same
              Day Shipping
            </div>
          </div>
        </div>

        {/* Right Side Spacer for Desktop Layout */}
        <div className="hidden md:block w-1/2 h-full z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
