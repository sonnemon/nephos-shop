import WishActionTypes from './wish.types';
import {
  deleteItemToWishlist,
  deleteWish,
  addItemToWishlist,
} from './wish.utils';

const INITIAL_STATE = {
  list: null,
  error: null,
  itemToAdd: null,
  isOpen: false,
};

const wishReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishActionTypes.FETCH_WISHES_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case WishActionTypes.CREATE_WISH_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case WishActionTypes.DELETE_WISH_SUCCESS:
      return {
        ...state,
        list: deleteWish(state.list, action.payload),
      };
    case WishActionTypes.DELETE_ITEM_TO_WISH_SUCCESS:
      return {
        ...state,
        list: deleteItemToWishlist(
          state.list,
          action.payload.wish,
          action.payload.product
        ),
      };
    case WishActionTypes.ON_TOGGLE_WISH_MODAL:
      if (!state.isOpen) {
        return {
          ...state,
          isOpen: !state.isOpen,
          itemToAdd: action.payload.item,
        };
      } else {
        return {
          ...state,
          isOpen: !state.isOpen,
          itemToAdd: null,
        };
      }
    case WishActionTypes.ADD_ITEM_TO_WISH_SUCCESS:
      return {
        ...state,
        isOpen: !state.isOpen,
        itemToAdd: null,
        list: addItemToWishlist(
          state.list,
          state.itemToAdd,
          action.payload.wishId
        ),
      };
    case WishActionTypes.SET_DEFAULT_STATE:
      return INITIAL_STATE;
    case WishActionTypes.CREATE_WISH_FAILURE:
    case WishActionTypes.FETCH_WISHES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default wishReducer;
