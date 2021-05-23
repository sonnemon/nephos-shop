import ProductActionTypes from './product.types';
const INITIAL_STATE = {
  list: null,
  category: null,
  item: null,
  error: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        item: action.payload,
      };
    case ProductActionTypes.FETCH_PRODUCTS_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
      };
    case ProductActionTypes.FETCH_PRODUCT_FAILURE:
    case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
    case ProductActionTypes.FETCH_PRODUCTS_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
