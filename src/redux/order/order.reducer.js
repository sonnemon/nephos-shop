import orderData from './order.data';
const INITIAL_STATE = {
  orderList: orderData,
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case UserActionTypes.SIGN_UP_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};

export default orderReducer;
