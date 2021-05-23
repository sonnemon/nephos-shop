import { createSelector } from 'reselect';

const selectProduct = (state) => state.product;

export const selectProductList = createSelector(
  [selectProduct],
  (product) => product.list
);

export const selectProductError = createSelector(
  [selectProduct],
  (product) => product.error
);

export const selectProductItem = createSelector(
  [selectProduct],
  (product) => product.item
);

export const selectProductCategory = createSelector(
  [selectProduct],
  (product) => product.category
);
