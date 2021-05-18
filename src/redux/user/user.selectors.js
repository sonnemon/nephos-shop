import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectJWTToken = createSelector(
  [selectUser],
  (user) => user.jwtToken
);

export const selectFakeUsers = createSelector(
  [selectUser],
  (user) => user.fakeUsers
);
