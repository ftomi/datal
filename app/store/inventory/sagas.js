import { call, put, takeLatest } from "redux-saga/effects";
import {
  getInventoryHeadsFromDb
} from "../../services/inventoryService";
import { setGlobalError, setSignInError } from "../error";
import { setLoader } from "../loader";
import { addInventories } from "../inventory";
import { LOAD_INVENTORIES } from "./actionTypes";

function* loadInventories({ payload }) {
  try {
    console.warn("1");
    yield put(setLoader(true));
    console.warn("2");
    const data = yield call(getInventoryHeadsFromDb, payload);
    console.warn("3");
    if (data)
      yield put(addInventories(data));
    console.warn("4");
    // NavigationService.navigate('AuthLoading');
  } catch (error) {
    console.error("error: ", error);
    if (error.response.status === 401) {
      yield put(setSignInError(true));
    } else {
      yield put(setGlobalError(true));
    }
  } finally {
    console.warn("5");
    yield put(setLoader(false));
  }
}

export function* watchLoadInventories() {
  yield takeLatest(LOAD_INVENTORIES, loadInventories);
}
