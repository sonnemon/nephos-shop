import { createSelector } from 'reselect';

const selectOrder = (state) => state.order;

export const selectOrderList = createSelector(
  [selectOrder],
  (order) => order.orderList
);
