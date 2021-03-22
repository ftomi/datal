import { SET_STORE, ADD_STORES } from "./actionTypes";

const initialState = {
  stores: [],
  selectedStore: "",
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_STORE:
      return { ...initialState, selectedStore: payload };
    case ADD_STORES:
      return { ...initialState, stores: payload };
    default:
      return state;
  }
}

export default reducer;
