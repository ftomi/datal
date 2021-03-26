import { call, put, takeLatest } from "redux-saga/effects";
import {
  getInventoryHeadsFromDb,
  getInventoriesFromDb,
  saveInventoryToDb
} from "../../services/inventoryService";
import { setGlobalError, setSignInError } from "../error";
import { setLoader } from "../loader";
import { addInventories, addInventoryHeads } from "../inventory";
import { LOAD_INVENTORIES, LOAD_INVENTORYHEADS, SAVE_INVENTORYHEADS } from "./actionTypes";

function* loadInventories({ payload }) {
  try {
    yield put(setLoader(true));
    const data = yield call(getInventoriesFromDb, payload);
    if (data)
      yield put(addInventories(data));
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

function* loadInventoryHeads({ payload }) {
  try {
    yield put(setLoader(true));
    const data = yield call(getInventoryHeadsFromDb, payload);
    if (data)
      yield put(addInventoryHeads(data));
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

function* saveInventoryData({ payload }) {
  try {
    yield put(setLoader(true));
    const data = yield call(saveInventoryToDb, payload);
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


export function* watchLoadInventoryHeads() {
  yield takeLatest(LOAD_INVENTORYHEADS, loadInventoryHeads);
}

export function* watchSaveInventoryHeads() {
  yield takeLatest(SAVE_INVENTORYHEADS, saveInventoryData);
}
