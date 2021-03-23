import { SET_INVENTORY, ADD_INVENTORYS, LOAD_INVENTORYS } from "./actionTypes";

export function setInventory(entity) {
  return {
    type: SET_INVENTORY,
    payload: entity,
  };
}

export function addWarehouses(entity) {
  return {
    type: ADD_INVENTORYS,
    payload: entity,
  };
}

export function loadWarehouses() {
  return {
    type: LOAD_INVENTORYS,
  };
}