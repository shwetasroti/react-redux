import React from 'react';

import WishlistItem from '../components/Wishlist/WishlistItem';
import { useStore } from '../hooks-store/store';
import './Products.css';

const Wishlist = props => {
  const state = useStore()[0];
  const wishlistProducts = state.products.filter(p => p.isWish);
  let content = <p className="placeholder">Got no wishlist item yet!</p>;
  if (wishlistProducts.length > 0) {
    content = (
      <ul className="products-list">
        {wishlistProducts.map(prod => (
          <WishlistItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Wishlist;
