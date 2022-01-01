import { initStore } from './store';

const configureStore = () => {
  const actions = {
    TOGGLE_WISHLIST: (curState, productId) => {
      const prodIndex = curState.products.findIndex(p => p.id === productId);
      const newWishStatus = !curState.products[prodIndex].isWish;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isWish: newWishStatus
      };
      return { products: updatedProducts };
    }
  };
  initStore(actions, {
    products: [
      {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isWish: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isWish: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isWish: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isWish: false
      }
    ]
  });
};

export default configureStore;