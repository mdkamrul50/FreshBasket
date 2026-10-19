import { Link } from 'react-router-dom';
import { ArrowRight, Heart, ShoppingCart, Star, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import { formatPrice } from '../../../utils/currency';
const bestSellingProducts = [
  {
    id: 101,
    name: 'Fresh Banana',
    category: 'Fresh Fruits',
    price: 120,
    oldPrice: 150,
    unit: '1 dozen',
    rating: 4.8,
    reviews: 124,
    badge: 'Best Seller',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600',
  },
  {
    id: 102,
    name: 'Red Apple',
    category: 'Fresh Fruits',
    price: 220,
    oldPrice: 280,
    unit: '1 kg',
    rating: 4.7,
    reviews: 98,
    badge: '20% OFF',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600',
  },
  {
    id: 103,
    name: 'Fresh Milk',
    category: 'Dairy Products',
    price: 100,
    oldPrice: 120,
    unit: '1 liter',
    rating: 4.9,
    reviews: 156,
    badge: 'Popular',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600',
  },
  {
    id: 104,
    name: 'Fresh Broccoli',
    category: 'Vegetables',
    price: 120,
    oldPrice: 150,
    unit: '1 piece',
    rating: 4.6,
    reviews: 76,
    badge: '15% OFF',
    stock: 18,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600',
  },
  {
    id: 105,
    name: 'Whole Wheat Bread',
    category: 'Bakery',
    price: 90,
    oldPrice: 110,
    unit: '1 pack',
    rating: 4.8,
    reviews: 84,
    badge: 'Best Seller',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600',
  },
];

export default function BestSellingProducts() {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  return (
    <section className="relative overflow-hidden bg-[#f8faf7] py-6 sm:py-20 lg:py-24">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-green-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
              <Sparkles size={16} />
              Customer Favorites
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Best Selling <span className="text-green-700">Products</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Discover the fresh, quality products our customers love to bring
              home every day.
            </p>
          </div>

          <Link
            to="/shop"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-green-200 bg-white px-5 py-3 font-semibold text-green-800 transition hover:border-green-700 hover:bg-green-700 hover:text-white"
          >
            View All Products
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {bestSellingProducts.map((product) => {
            const wishlisted = isWishlisted(product.id);
            const discount = Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100
            );

            return (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-xl hover:shadow-green-900/5"
              >
                {/* Product Image */}
                <div className="relative m-2 overflow-hidden rounded-xl bg-[#f2f7ef]">
                  <Link
                    to={`/product/${product.id}`}
                    aria-label={`View ${product.name}`}
                    className="block"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* Badge */}
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm ${product.badge.includes('OFF')
                      ? 'bg-rose-500'
                      : 'bg-green-700'
                      }`}
                  >
                    {product.badge}
                  </span>

                  {/* Wishlist */}
                  <button
                    type="button"
                    aria-label={
                      wishlisted ? 'Remove from wishlist' : 'Add to wishlist'
                    }
                    aria-pressed={wishlisted}
                    onClick={() => {
                      toggleWishlist(product);
                      toast.success(
                        wishlisted
                          ? 'Removed from wishlist'
                          : 'Added to wishlist'
                      );
                    }}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-600 shadow-sm transition hover:scale-110 hover:text-rose-500"
                  >
                    <Heart
                      size={18}
                      className={
                        wishlisted ? 'fill-rose-500 text-rose-500' : ''
                      }
                    />
                  </button>

                  {/* Discount */}
                  <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-bold text-green-800 shadow-sm">
                    Save {discount}%
                  </span>
                </div>

                {/* Product Information */}
                <div className="px-4 pb-4 pt-2">
                  <p className="text-xs font-medium text-green-700">
                    {product.category}
                  </p>

                  <Link to={`/product/${product.id}`}>
                    <h3 className="mt-1.5 truncate text-base font-bold text-slate-800 transition hover:text-green-700">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="mt-1 text-xs text-slate-400">{product.unit}</p>

                  {/* Rating */}
                  <div className="mt-3 flex items-center gap-1.5">
                    <Star size={15} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-slate-700">
                      {product.rating}
                    </span>
                    <span className="truncate text-xs text-slate-400">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-xl font-extrabold text-green-700">
                      {formatPrice(product.price)}
                    </span>

                    <span className="text-sm text-slate-400 line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                  </div>

                  {/* Add to Cart */}
                  <button
                    type="button"
                    disabled={product.stock < 1}
                    onClick={() => {
                      addToCart(product);
                      toast.success(`${product.name} added to cart`);
                    }}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-3 py-3 text-sm font-semibold text-white transition hover:bg-green-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ShoppingCart size={17} />
                    {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-slate-500">
          <span className="inline-flex h-2 w-2 rounded-full bg-green-600" />
          Fresh picks, great value, everyday essentials.
        </div>
      </div>
    </section>
  );
}
