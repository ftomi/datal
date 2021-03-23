import { call, put, takeLatest } from "redux-saga/effects";
import {
  getWarehousesFromDb
} from "../../services/warehouseService";
import { setGlobalError, setSignInError } from "../error";
import { setLoader } from "../loader";
import { addWarehouses } from "../warehouse";
import { LOAD_WAREHOUSES } from "./actionTypes";

function* loadWarehouses() {
  try {
    yield put(setLoader(true));
    const data = yield call(getWarehousesFromDb);

    yield put(addWarehouses(data));
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

export function* watchLoadWarehouses() {
  yield takeLatest(LOAD_WAREHOUSES, loadWarehouses);
}
