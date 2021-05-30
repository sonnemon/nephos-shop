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

export const selectTotal = createSelector([selectCart], (cart) => cart.total);

export const selectTaxes = createSelector([selectCart], (cart) => cart.taxes);

export const selectShippingMethod = createSelector(
  [selectCart],
  (cart) => cart.shipping
);
