import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartProducts = createSelector(
  [selectCart],
  (cart) => cart.products
);
