import { SET_STORE } from "./actionTypes";

export function setStore(store) {
  return {
    type: SET_STORE,
    payload: store,
  };
}
