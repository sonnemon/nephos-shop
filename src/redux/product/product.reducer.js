import productData from './product.data';
const INITIAL_STATE = {
  productList: productData.products,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
