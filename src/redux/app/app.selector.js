import { createSelector } from 'reselect';

const selectApp = (state) => state.app;

export const selectIsOpenHomeMenu = createSelector(
  [selectApp],
  (app) => app.isOpenHomeMenu
);

export const selectIsOpenCartMenu = createSelector(
  [selectApp],
  (app) => app.isOpenCartMenu
);

export const selectIsOpenSearchMenu = createSelector(
  [selectApp],
  (app) => app.isOpenSearchMenu
);

export const selectIsOpenCategoryMenu = createSelector(
  [selectApp],
  (app) => app.isOpenCategoryMenu
);

export const selectIsOpenSidebar = createSelector(
  [selectApp],
  (app) => app.isOpenSidebar
);
