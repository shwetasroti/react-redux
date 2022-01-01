export const TOGGLE_WISHLIST = 'TOGGLE_WISHLIST';

export const toggleWish = id => {
    return { type: TOGGLE_WISHLIST, productId: id };
};