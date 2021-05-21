import { takeLatest, put, all, call } from 'redux-saga/effects';
import CategoryActionTypes from './category.types';
import categoryData from './category.data';
import {
  fetchCategorySuccess,
  fetchCategoryFailure,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './category.actions';

function* fetchCategory({ payload }) {
  try {
    const category = categoryData.find(
      (category) => category.name == payload.categoryName
    );
    yield put(fetchCategorySuccess(category));
  } catch (error) {
    yield put(fetchCategoryFailure('ERROR_TO_FETCH_CATEGORY'));
  }
  payload.callback();
}
function* onFetchCategoryStart() {
  yield takeLatest(CategoryActionTypes.FETCH_CATEGORY_START, fetchCategory);
}

function* fetchCategories({ payload }) {
  try {
    const categories = categoryData;
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailure('ERROR_TO_FETCH_CATEGORIES'));
  }
  payload.callback();
}
function* onFetchCategoriesStart() {
  yield takeLatest(CategoryActionTypes.FETCH_CATEGORIES_START, fetchCategories);
}

export function* categorySagas() {
  yield all([call(onFetchCategoryStart), call(onFetchCategoriesStart)]);
}
