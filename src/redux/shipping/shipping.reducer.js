import shippingData from './shipping.data';
const INITIAL_STATE = {
  list: shippingData,
};

const shippingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shippingReducer;
