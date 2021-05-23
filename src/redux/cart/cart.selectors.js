import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectTotalAmount = createSelector(
  [selectCart],
  (cart) => cart.totalAmount
);

export const selectTaxes = createSelector([selectCart], (cart) => cart.taxes);
