import { call, put, takeLatest } from "redux-saga/effects";
import {
  getProductsFromDb,
  getProductByBarcode,
} from "../../services/productService";
import { setGlobalError, setSignInError } from "../error";
import { setLoader } from "../loader";
import { addProducts, setSelectedProduct } from "../product";
import { LOAD_PRODUCTS, SEARCH_PRODUCT_BY_BARCODE } from "./actionTypes";

function* searchProductByBarcode({ payload }) {
  try {
    yield put(setLoader(true));
    const data = yield call(getProductByBarcode, payload);
    if (data)
      yield put(setSelectedProduct(data));
    console.warn('data', data)
    // NavigationService.navigate('AuthLoading');
  } catch (error) {
    console.warn('error', error)
    if (error.response.status === 401) {
      yield put(setSignInError(true));
    } else {
      yield put(setGlobalError(true));
    }
  } finally {
    yield put(setLoader(false));
  }
}

function* loadProducts() {
  try {
    yield put(setLoader(true));
    const data = yield call(getProductsFromDb);
    yield put(addProducts(data));
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

export function* watchLoadProducts() {
  yield takeLatest(LOAD_PRODUCTS, loadProducts);
}

export function* watchSearchProductByBarcode() {
  yield takeLatest(SEARCH_PRODUCT_BY_BARCODE, searchProductByBarcode);
}
