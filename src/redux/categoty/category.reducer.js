import CategoryActionTypes from './category.types';
const INITIAL_STATE = {
  list: null,
  item: null,
  error: null,
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
      };
    case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case CategoryActionTypes.FETCH_CATEGORIES_FAILURE:
    case CategoryActionTypes.FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
