import UserActionTypes from './user.types';
import userData from './user.data';
const INITIAL_STATE = {
  fakeUsers: userData,
  currentUser: null,
  error: null,
  jwtToken: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user,
        jwtToken: action.payload.token,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        jwtToken: null,
        error: null,
      };
    case UserActionTypes.EDIT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
