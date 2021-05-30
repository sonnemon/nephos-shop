import CartActionTypes from './cart.types';
import {
  addItemToCart,
  removeItemToCart,
  changeQuantityItemToCart,
  calcTotalAmount,
  calcAll,
} from './cart.utils';

const INITIAL_STATE = {
  items: [],
  totalAmount: 0,
  taxes: 0,
  shipping: null,
  total: 0,
};

const TAXES = 6;

const cartReducer = (state = INITIAL_STATE, action) => {
  let newCart = null;
  switch (action.type) {
    case CartActionTypes.ADD_CART_ITEM:
      newCart = addItemToCart(state.items, action.payload);
      return {
        ...state,
        items: newCart,
        ...calcAll(newCart, TAXES, state.shipping),
      };
    case CartActionTypes.REMOVE_CART_ITEM:
      newCart = removeItemToCart(state.items, action.payload);
      return {
        ...state,
        items: newCart,
        ...calcAll(newCart, TAXES, state.shipping),
      };
    case CartActionTypes.CHANGE_QUANTITY_TO_CART:
      newCart = changeQuantityItemToCart(state.items, action.payload);
      return {
        ...state,
        items: newCart,
        ...calcAll(newCart, TAXES, state.shipping),
      };
    case CartActionTypes.SET_SHIPPING_METHOD:
      return {
        ...state,
        shipping: action.payload,
        ...calcAll(state.items, TAXES, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
