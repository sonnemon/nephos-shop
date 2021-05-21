import ProductActionTypes from './product.types';
const INITIAL_STATE = {
  list: null,
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
    case ProductActionTypes.FETCH_PRODUCT_FAILURE:
    case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
