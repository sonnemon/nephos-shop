import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import userData from './user.data';
import {
  signInFailure,
  singInSuccess,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from './user.actions';

import { setWishDefaultState } from '../wish/wish.actions';

function* signInWithEmail({ payload }) {
  try {
    const user = userData.find(
      (u) =>
        u.email == payload.user.email && u.password == payload.user.password
    );
    if (!user) throw Error('LOGIN_FAILED');
    yield put(
      singInSuccess({
        user,
        token: 'xxxxx.yyyyy.zzzzz',
      })
    );
    payload.callback(false);
  } catch (err) {
    if (err.errors) {
      yield put(signInFailure(err.errors[0].message));
    } else {
      yield put(signInFailure(err));
    }
    payload.callback(true);
  }
}

function* isuserAuthenticated() {
  try {
    // const userAuth = yield getCurrentUser();
    // if (!userAuth) return;
    // yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* signout() {
  try {
    yield put(setWishDefaultState());
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* signUp({ payload }) {
  try {
    // const { user } = yield auth.createUserWithEmailAndPassword(
    //   payload.email,
    //   payload.password
    // );
    // yield put(
    //   signUpSuccess({
    //     user,
    //     additionalData: {
    //       displayName: payload.displayName,
    //     },
    //   })
    // );
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* signInAfterSignUp({ payload }) {
  // yield getSnapshotFromUserAuth(payload.user, payload.additionalData);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isuserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signout);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
