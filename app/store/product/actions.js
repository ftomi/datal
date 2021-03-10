import {
  LOAD_PRODUCTS,
  GET_PRODUCTS,
  SEARCH_PRODUCT_BY_BARCODE,
  SET_SELECTED_PRODUCT,
  GET_PRODUCT,
} from "./actionTypes";

export function loadProducts() {
  return {
    type: LOAD_PRODUCTS,
  };
}

export function getProducts() {
  return {
    type: GET_PRODUCTS,
  };
}

export function getProduct() {
  return {
    type: GET_PRODUCT,
  };
}

export function setSelectedProduct(product) {
  return {
    type: SET_SELECTED_PRODUCT,
    payload: product,
  };
}

export function searchProductByBarcode(barcode) {
  return {
    type: SEARCH_PRODUCT_BY_BARCODE,
    payload: barcode,
  };
}
