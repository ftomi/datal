import { call, put, takeLatest } from "redux-saga/effects";
import {
  getStoresFromDb
} from "../../services/storeService";
import { setGlobalError, setSignInError } from "../error";
import { setLoader } from "../loader";
import { addStores } from "../store";
import { LOAD_STORES } from "./actionTypes";

function* loadStores() {
  try {
    yield put(setLoader(true));
    const data = yield call(getStoresFromDb);

    yield put(addStores(data));
    // NavigationService.navigate('AuthLoading');
  } catch (error) {
    console.error("error: ", error);
    if (error.response.status === 401) {
      yield put(setSignInError(true));
    } else {
      yield put(setGlobalError(true));
    }
  } finally {
    yield put(setLoader(false));
  }
}

export function* watchLoadStores() {
  yield takeLatest(LOAD_STORES, loadStores);
}
