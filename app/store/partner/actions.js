import {
  LOAD_SUPPLIERS,
  GET_SUPPLIERS,
  ADD_SUPPLIERS
} from "./actionTypes";

export function loadSuppliers() {
  return {
    type: LOAD_SUPPLIERS,
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
