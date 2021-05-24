import AppActionTypes from './app.types';
const INITIAL_STATE = {
  isOpenHomeMenu: false,
  isOpenCartMenu: false,
  isOpenSearchMenu: false,
  isOpenCategoryMenu: false,
  isOpenSidebar: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.TOGGLE_HOME_MENU:
      return {
        ...state,
        isOpenHomeMenu: !state.isOpenHomeMenu,
        isOpenCartMenu: false,
        isOpenSearchMenu: false,
      };
    case AppActionTypes.TOGGLE_CART_MENU:
      return {
        ...state,
        isOpenCartMenu: !state.isOpenCartMenu,
        isOpenHomeMenu: false,
        isOpenSearchMenu: false,
      };
    case AppActionTypes.TOGGLE_SEARCH_MENU:
      return {
        ...state,
        isOpenSearchMenu: !state.isOpenSearchMenu,
        isOpenHomeMenu: false,
        isOpenCartMenu: false,
      };
    case AppActionTypes.TOGGLE_CATEGORY_MENU:
      return {
        ...state,
        isOpenCategoryMenu: !state.isOpenCategoryMenu,
      };
    case AppActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpenSidebar: !state.isOpenSidebar,
        isOpenHomeMenu: !state.isOpenSidebar ? false : true,
      };
    case AppActionTypes.RESET_MENU:
      if (action.payload) {
        return {
          isOpenHomeMenu: false,
          isOpenCartMenu: false,
          isOpenSearchMenu: false,
          isOpenCategoryMenu: false,
          isOpenSidebar: true,
        };
      } else {
        return {
          isOpenHomeMenu: false,
          isOpenCartMenu: false,
          isOpenSearchMenu: false,
          isOpenCategoryMenu: false,
        };
      }

    default:
      return state;
  }
};

export default userReducer;
