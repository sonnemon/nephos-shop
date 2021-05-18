import AppActionTypes from './app.types';

export const onToggleHomeMenu = () => ({
  type: AppActionTypes.TOGGLE_HOME_MENU,
});

export const onToggleCartMenu = () => ({
  type: AppActionTypes.TOGGLE_CART_MENU,
});

export const onToggleSearchMenu = () => ({
  type: AppActionTypes.TOGGLE_SEARCH_MENU,
});

export const onToggleCategoryMenu = () => ({
  type: AppActionTypes.TOGGLE_CATEGORY_MENU,
});

export const onToggleSidebar = () => ({
  type: AppActionTypes.TOGGLE_SIDEBAR,
});

export const resetMenu = () => ({
  type: AppActionTypes.RESET_MENU,
});
