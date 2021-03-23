import { SET_STORAGE, ADD_STORAGES, LOAD_STORAGES } from "./actionTypes";

export function setStorage(entity) {
  return {
    type: SET_STORAGE,
    payload: entity,
  };
}

export function addStorages(entity) {
  return {
    type: ADD_STORAGES,
    payload: entity,
  };
}

export function loadStorages() {
  return {
    type: LOAD_STORAGES,
  };
}