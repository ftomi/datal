import { SET_WAREHOUSE, ADD_WAREHOUSES, LOAD_WAREHOUSES } from "./actionTypes";

export function setWarehouse(entity) {
  return {
    type: SET_WAREHOUSE,
    payload: entity,
  };
}

export function addWarehouses(entity) {
  return {
    type: ADD_WAREHOUSES,
    payload: entity,
  };
}

export function loadWarehouses() {
  return {
    type: LOAD_WAREHOUSES,
  };
}