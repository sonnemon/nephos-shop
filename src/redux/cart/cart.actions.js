import CartActionTypes from './cart.types';

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item,
});

export const removeItemToCart = (item) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item,
});

export const changeQuantityToCart = (item) => ({
  type: CartActionTypes.CHANGE_QUANTITY_TO_CART,
  payload: item,
});

export const setShippingMethod = (item) => ({
  type: CartActionTypes.SET_SHIPPING_METHOD,
  payload: item,
});
