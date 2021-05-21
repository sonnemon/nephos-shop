import ProductActionTypes from './product.types';

export const fetchProductsStart = (payload) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_START,
  payload,
});

export const fetchProductsSuccess = (products) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (keyError) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: keyError,
});

export const fetchProductStart = (payload) => ({
  type: ProductActionTypes.FETCH_PRODUCT_START,
  payload,
});

export const fetchProductSuccess = (product) => ({
  type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchProductFailure = (error) => ({
  type: ProductActionTypes.FETCH_PRODUCT_FAILURE,
  payload: error,
});
