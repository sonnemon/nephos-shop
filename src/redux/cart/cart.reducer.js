import CartActionTypes from './cart.types';
import {
  addItemToCart,
  removeItemToCart,
  changeQuantityItemToCart,
  calcTotalAmount,
} from './cart.utils';

const INITIAL_STATE = {
  items: [],
  totalAmount: 0,
  taxes: 0,
  shipping: 0,
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
        totalAmount: calcTotalAmount(newCart),
        taxes: (calcTotalAmount(newCart) * TAXES) / 100,
      };
    case CartActionTypes.REMOVE_CART_ITEM:
      newCart = removeItemToCart(state.items, action.payload);
      return {
        ...state,
        items: newCart,
        totalAmount: calcTotalAmount(newCart),
        taxes: (calcTotalAmount(newCart) * TAXES) / 100,
      };
    case CartActionTypes.CHANGE_QUANTITY_TO_CART:
      newCart = changeQuantityItemToCart(state.items, action.payload);
      return {
        ...state,
        items: newCart,
        totalAmount: calcTotalAmount(newCart),
        taxes: (calcTotalAmount(newCart) * TAXES) / 100,
      };
    default:
      return state;
  }
};

export default cartReducer;
