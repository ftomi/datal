import {
  LOAD_SUPPLIERS,
  GET_SUPPLIERS,
  ADD_SUPPLIERS
} from "./actionTypes";

export function loadSuppliers(product) {
  return {
    type: LOAD_SUPPLIERS,
    payload: product
  };
}

export function getSuppliers() {
  return {
    type: GET_SUPPLIERS,
  };
}

export function addSuppliers(suppliers) {
  return {
    type: ADD_SUPPLIERS,
    payload: suppliers,
  };
}
