import { SET_INVENTORY, ADD_INVENTORIES, LOAD_INVENTORIES } from "./actionTypes";

export function setInventory(entity) {
  return {
    type: SET_INVENTORY,
    payload: entity,
  };
}

export function addInventories(entity) {
  return {
    type: ADD_INVENTORIES,
    payload: entity,
  };
}

export function loadInventories(type) {
  return {
    type: LOAD_INVENTORIES,
    payload: type
  };
}