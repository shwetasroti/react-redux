import { TOGGLE_WISHLIST } from '../actions/products';

const initialState = {
  products: [
    {
      id: 'p1',
      title: 'Blue T-Shirt',
      description: 'A cotton light blue t-shirt.',
      isWish: false
    },
    {
      id: 'p2',
      title: 'Grey Trousers',
      description: 'A woven stripped grey trousers.',
      isWish: false
    },
    {
      id: 'p3',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isWish: false
    }
  ]
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_WISHLIST:
      const prodIndex = state.products.findIndex(
        p => p.id === action.productId
      );
      const newWishStatus = !state.products[prodIndex].isWish;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isWish: newWishStatus
      };
      return {
        ...state,
        products: updatedProducts
      };
    default:
      return state;
  }
};

export default productReducer;
