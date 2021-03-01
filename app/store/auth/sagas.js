import { call, put, takeLatest } from "redux-saga/effects";

// import authService from '../../services/AuthService';
// import NavigationService from '../../services/NavigationService';
import { loginUser } from '../../services/userService';
import {
  setGlobalError,
  setSignInError,
} from "../error";
// import { resetState } from "../shared";
import {
  setUpdatedUser,
  setActiveUser,
} from "./actions";

import {
  GET_ACTIVE_USER,
  LOGIN,
  LOGOUT,
  UPDATE_USER,
} from "./actionTypes";
import { setLoader } from "../loader";

function* login({ payload }) {
  try {
    yield put(setSignInError(false));
    yield put(setLoader(true));

    const data = yield call(loginUser, payload);

    yield put(setActiveUser(data));
    // NavigationService.navigate('AuthLoading');
  } catch (error) {
    if (error.response.status === 401) {
      yield put(setSignInError(true));
    } else {
      yield put(setGlobalError(true));
    }
  } finally {
    yield put(setLoader(false));
  }
}


function* logout() {
  try {
    yield put(setLoader(true));

    yield put(setActiveUser({}));
    //yield call(authService.logout);
    //yield put(resetState());
    //NavigationService.navigate('AuthLoading');
  } catch (error) {
  } finally {
    yield put(setLoader(false));
  }
}
/*

function* forgotPassword({ payload }) {
  try {
    yield put(setForgotPasswordError(false));
    yield put(setLoader(true));
    //yield call(authService.forgotPassword, payload);
    //NavigationService.navigate('ForgotPasswordSuccess');
  } catch (error) {
    if (error.response.status === 422) {
      yield put(setForgotPasswordError(true));
    } else {
      yield put(setGlobalError(true));
    }
  } finally {
    yield put(setLoader(false));
  }
}

function* getActiveUser() {
  try {
    yield put(setLoader(true));
    const { data } = yield call(profileService.getProfile);
    yield put(setActiveUser(data));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}


function* updateUser({ payload }) {
  try {
    yield put(setLoader(true));
    //const { data } = yield call(profileService.updateUser, payload);
    yield put(setUpdatedUser(data));
    //NavigationService.goBack();
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}
*/
export function* watchLogin() {
  yield takeLatest(LOGIN, login);
}
export function* watchLogout() {
  yield takeLatest(LOGOUT, logout);
}
/*
export function* watchGetActiveUser() {
  yield takeLatest(GET_ACTIVE_USER, getActiveUser);
}

export function* watchUpdateUser() {
  yield takeLatest(UPDATE_USER, updateUser);
}
*/