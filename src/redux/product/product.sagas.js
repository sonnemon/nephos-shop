import { takeLatest, put, all, call } from 'redux-saga/effects';
import ProductActionTypes from './product.types';
import productData from './product.data';
import categoryData from '../categoty/category.data';
import {
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductSuccess,
  fetchProductFailure,
  fetchProductsCategorySuccess,
  fetchProductsCategoryFailure,
} from './product.actions';

function* fetchProducts({ payload }) {
  try {
    const products = productData.filter(
      (product) => product.category == payload.category
    );
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure('ERROR_TO_FETCH_PRODUCTS'));
  }
  payload.callback();
}
function* onFetchProductsStart() {
  yield takeLatest(ProductActionTypes.FETCH_PRODUCTS_START, fetchProducts);
}

function* fetchProduct({ payload }) {
  try {
    let product = productData.find(
      (product) => product.id == payload.productId
    );
    if (!product) {
      throw new Error('PRODUCT_NOT_EXIST');
    }
    product.categoryItem = categoryData.find(
      (category) => category.name == product.category
    );
    const productIds = product.related.map((p) => parseInt(p.id));
    product.relatedItems = productData.filter((product) =>
      productIds.includes(product.id)
    );
    yield put(fetchProductSuccess(product));
  } catch (error) {
    yield put(fetchProductFailure('ERROR_TO_FETCH_PRODUCTS'));
  }
  payload.callback();
}
function* onFetchProductStart() {
  yield takeLatest(ProductActionTypes.FETCH_PRODUCT_START, fetchProduct);
}

function* fetchProductCategory({ payload }) {
  try {
    let products = categoryData;
    for (const category of products) {
      if (!('products' in category)) {
        category['products'] = [];
      }
      for (const product of productData) {
        if (category['products'].length == 3) {
          break;
        }
        if (category.name == product.category) {
          category['products'].push(product);
        }
      }
    }
    yield put(fetchProductsCategorySuccess(products));
  } catch (error) {
    yield put(fetchProductsCategoryFailure('ERROR_TO_FETCH_PRODUCT_CATEGORY'));
  }
  payload.callback();
}
function* onFectchProductCategoryStart() {
  yield takeLatest(
    ProductActionTypes.FETCH_PRODUCTS_CATEGORY_START,
    fetchProductCategory
  );
}
export function* productSagas() {
  yield all([
    call(onFetchProductsStart),
    call(onFetchProductStart),
    call(onFectchProductCategoryStart),
  ]);
}
