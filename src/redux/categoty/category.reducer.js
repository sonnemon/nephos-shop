import categoryData from './category.data';
const INITIAL_STATE = {
  categoryList: categoryData.categories,
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case UserActionTypes.SIGN_UP_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};

export default categoryReducer;
