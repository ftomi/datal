import { call, put, takeLatest } from "redux-saga/effects";
import {
  getSuppliersFromDb
} from "../../services/partnerService";
import { setGlobalError, setSignInError } from "../error";
import { setLoader } from "../loader";
import { addSuppliers } from "../partner";
import { LOAD_SUPPLIERS } from "./actionTypes";

function* loadSuppliers({ payload }) {
  try {
    yield put(setLoader(true));
    const data = yield call(getSuppliersFromDb, payload);
    console.warn("suppliers: ", data);
    yield put(addSuppliers(data));
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

export function* watchLoadSuppliers() {
  yield takeLatest(LOAD_SUPPLIERS, loadSuppliers);
}
