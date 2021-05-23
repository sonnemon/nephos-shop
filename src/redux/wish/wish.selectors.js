import { createSelector } from 'reselect';

const selectWish = (state) => state.wish;

export const selectWishList = createSelector([selectWish], (wish) => wish.list);

export const selectWishError = createSelector(
  [selectWish],
  (wish) => wish.error
);

export const selectIsOpen = createSelector([selectWish], (wish) => wish.isOpen);
