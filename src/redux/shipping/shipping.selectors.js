import { createSelector } from 'reselect';

const selectShipping = (state) => state.shipping;

export const selectShippingList = createSelector(
  [selectShipping],
  (shipping) => shipping.list
);
