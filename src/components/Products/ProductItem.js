import React from 'react';

import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';
import './ProductItem.css';

const ProductItem = React.memo(props => {
  console.log('RENDERING');
  const dispatch = useStore(false)[1];

  const toggleWishHandler = () => {
    // toggleFav(props.id);
    dispatch('TOGGLE_WISHLIST', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isWish ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isWish ? 'button-outline' : ''}
          onClick={toggleWishHandler}
        >
          {props.isWish ? 'Remove from wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
