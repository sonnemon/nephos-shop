import CategoryActionTypes from './category.types';

export const fetchCategoryStart = (payload) => ({
  type: CategoryActionTypes.FETCH_CATEGORY_START,
  payload,
});

export const fetchCategorySuccess = (category) => ({
  type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS,
  payload: category,
});

export const fetchCategoryFailure = (error) => ({
  type: CategoryActionTypes.FETCH_CATEGORY_FAILURE,
  payload: error,
});

export const fetchCategoriesStart = (payload) => ({
  type: CategoryActionTypes.FETCH_CATEGORIES_START,
  payload,
});

export const fetchCategoriesSuccess = (categoryList) => ({
  type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categoryList,
});

export const fetchCategoriesFailure = (error) => ({
  type: CategoryActionTypes.FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const onToggleCategoryLoader = () => ({
  type: CategoryActionTypes.TOGGLE_CATEGORY_LOADER,
});
