import {
  SET_INVENTORY,
  ADD_INVENTORIES,
  LOAD_INVENTORIES,
  LOAD_INVENTORYHEADS,
  ADD_TEMP_ITEM,
  REMOVE_TEMP_ITEM,
  SAVE_TEMP_HEAD,
  CLEAN_TEMP,
  ADD_INVENTORYHEADS,
  SAVE_INVENTORYHEADS
} from "./actionTypes";

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

export function loadInventoryHeads(type) {
  return {
    type: LOAD_INVENTORYHEADS
  };
}


export function saveInventoryHeads(type) {
  return {
    type: SAVE_INVENTORYHEADS,
    payload: type
  };
}

export function saveTempHead(entity) {
  return {
    type: SAVE_TEMP_HEAD,
    payload: entity,
  };
}

export function addTempItem(entity) {
  return {
    type: ADD_TEMP_ITEM,
    payload: entity,
  };
}

export function addInventoryHeads(entity) {
  return {
    type: ADD_INVENTORYHEADS,
    payload: entity,
  };
}

export function removeTempItem(entity) {
  return {
    type: REMOVE_TEMP_ITEM,
    payload: entity,
  };
}

export function cleanTemp(entity) {
  return {
    type: CLEAN_TEMP,
  };
}