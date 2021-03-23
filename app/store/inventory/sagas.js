import { call, put, takeLatest } from "redux-saga/effects";
import {
  getInventoriesFromDb
} from "../../services/inventoryService";
import { setGlobalError, setSignInError } from "../error";
import { setLoader } from "../loader";
import { addInventories } from "../inventory";
import { LOAD_INVENTORIES } from "./actionTypes";

function* loadInventories() {
  try {
    yield put(setLoader(true));
    const data = yield call(getInventoriesFromDb);

    yield put(addInventories(data));
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

export function* watchLoadInventories() {
  yield takeLatest(LOAD_INVENTORIES, loadInventories);
}
