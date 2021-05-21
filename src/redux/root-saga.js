import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { productSagas } from './product/product.sagas';
import { categorySagas } from './categoty/category.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(productSagas), call(categorySagas)]);
}
