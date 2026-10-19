import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('freshbasket-wishlist')) || [];
    } catch {
      return [];
    }
  });

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);

    const updatedWishlist = exists
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];

    setWishlist(updatedWishlist);
    localStorage.setItem(
      'freshbasket-wishlist',
      JSON.stringify(updatedWishlist)
    );
  };

  const isWishlisted = (productId) =>
    wishlist.some((item) => item.id === productId);

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isWishlisted }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
