import { SET_STORE, ADD_STORES, LOAD_STORES } from "./actionTypes";

export function setStore(store) {
  return {
    type: SET_STORE,
    payload: store,
  };
}

export function addStores(stores) {
  return {
    type: ADD_STORES,
    payload: stores,
  };
}

export function loadStores() {
  return {
    type: LOAD_STORES,
  };
}