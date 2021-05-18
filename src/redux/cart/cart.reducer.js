const INITIAL_STATE = {
  products: [
    {
      id: 9,
      name: 'Ambassador',
      category: 'Office',
      price: 699.99,
      quantity: 2,
      images: [
        {
          url: 'assets/img/products/office3.jpg',
        },
      ],
    },
  ],
};

const cartReducer = (state = INITIAL_STATE, action) => {
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

export default cartReducer;
