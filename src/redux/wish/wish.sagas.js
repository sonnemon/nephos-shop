import { takeLatest, put, all, call } from 'redux-saga/effects';
import WishActionTypes from './wish.types';
import wishData from './whish.data';
import {
  fetchWishesSuccess,
  fetchWishesFailure,
  createWishSuccess,
  createWishFailure,
} from './wish.actions';
import { v4 as uuidv4 } from 'uuid';

function* fetchWishes({ payload }) {
  try {
    const wishList = wishData;
    yield put(fetchWishesSuccess(wishList));
  } catch (error) {
    yield put(fetchWishesFailure('ERROR_TO_FETCH_WISHES'));
  }
  payload.callback();
}
function* onStartFetchWishes() {
  yield takeLatest(WishActionTypes.FETCH_WISHES_START, fetchWishes);
}

function* createWish({ payload }) {
  try {
    const wish = {
      id: uuidv4(),
      name: payload.name,
      products: [],
    };
    yield put(createWishSuccess(wish));
  } catch (error) {
    yield put(createWishFailure('ERROR_TO_CREATE_WISHES'));
  }
  payload.callback();
}
function* onCreateWishStart() {
  yield takeLatest(WishActionTypes.CREATE_WISH_START, createWish);
}

export function* wishSagas() {
  yield all([
    //
    //
    call(onCreateWishStart),
    call(onStartFetchWishes),
  ]);
}
