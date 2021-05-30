import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import appReducer from './app/app.reducer';
import categoryReducer from './categoty/category.reducer';
import productReducer from './product/product.reducer';
import cartReducer from './cart/cart.reducer';
import orderReducer from './order/order.reducer';
import wishReducer from './wish/wish.reducer';
import shippingReducer from './shipping/shipping.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'category', 'cart', 'wish', 'shipping'],
};

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
  wish: wishReducer,
  shipping: shippingReducer,
});

export default persistReducer(persistConfig, rootReducer);
