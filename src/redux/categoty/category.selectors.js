import { createSelector } from 'reselect';

const selectCategory = (state) => state.category;

export const selectCategoryList = createSelector(
  [selectCategory],
  (category) => category.list
);

export const selectCategoryItem = createSelector(
  [selectCategory],
  (category) => category.category
);

export const selectCategoryError = createSelector(
  [selectCategory],
  (category) => category.error
);
