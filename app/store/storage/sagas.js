import { call, put, takeLatest } from "redux-saga/effects";
import {
  getStoragesFromDb
} from "../../services/storageService";
import { setGlobalError, setSignInError } from "../error";
import { setLoader } from "../loader";
import { addStorages } from "../storage";
import { LOAD_STORAGES } from "./actionTypes";

function* loadStorages() {
  try {
    yield put(setLoader(true));
    const data = yield call(getStoragesFromDb);

    yield put(addStorages(data));
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

export function* watchLoadStorages() {
  yield takeLatest(LOAD_STORAGES, loadStorages);
}
