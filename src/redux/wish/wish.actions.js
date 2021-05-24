import WishActionTypes from './wish.types';

export const createWishStart = (payload) => ({
  type: WishActionTypes.CREATE_WISH_START,
  payload,
});

export const createWishSuccess = (wish) => ({
  type: WishActionTypes.CREATE_WISH_SUCCESS,
  payload: wish,
});

export const createWishFailure = (error) => ({
  type: WishActionTypes.CREATE_WISH_FAILURE,
  payload: error,
});

export const fetchWishesStart = (payload) => ({
  type: WishActionTypes.FETCH_WISHES_START,
  payload,
});

export const fetchWishesSuccess = (wishList) => ({
  type: WishActionTypes.FETCH_WISHES_SUCCESS,
  payload: wishList,
});

export const fetchWishesFailure = (error) => ({
  type: WishActionTypes.FETCH_WISHES_FAILURE,
  payload: error,
});

export const deleteWishStart = (payload) => ({
  type: WishActionTypes.DELETE_WISH_START,
  payload,
});

export const deleteWishSuccess = (categoryList) => ({
  type: WishActionTypes.DELETE_WISH_SUCCESS,
  payload: categoryList,
});

export const deleteWishFailure = (error) => ({
  type: WishActionTypes.DELETE_WISH_FAILURE,
  payload: error,
});

export const deleteItemToWishStart = (payload) => ({
  type: WishActionTypes.DELETE_ITEM_TO_WISH_START,
  payload,
});

export const deleteItemToWishSuccess = (payload) => ({
  type: WishActionTypes.DELETE_ITEM_TO_WISH_SUCCESS,
  payload,
});

export const deleteItemToWishFailure = (error) => ({
  type: WishActionTypes.DELETE_ITEM_TO_WISH_FAILURE,
  payload: error,
});

export const onToggleWishModal = (payload) => ({
  type: WishActionTypes.ON_TOGGLE_WISH_MODAL,
  payload,
});

export const addItemToWishStart = (payload) => ({
  type: WishActionTypes.ADD_ITEM_TO_WISH_START,
  payload,
});

export const addItemToWishSuccess = (payload) => ({
  type: WishActionTypes.ADD_ITEM_TO_WISH_SUCCESS,
  payload,
});

export const addItemToWishFailure = (error) => ({
  type: WishActionTypes.ADD_ITEM_TO_WISH_FAILURE,
  payload: error,
});

export const setWishDefaultState = () => ({
  type: WishActionTypes.SET_DEFAULT_STATE,
});
