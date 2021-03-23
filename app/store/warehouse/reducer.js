import { SET_WAREHOUSE, ADD_WAREHOUSES } from "./actionTypes";

const initialState = {
  warehouses: [],
  selectedWarehouse: "",
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_WAREHOUSE:
      return { ...initialState, selectedWarehouse: payload };
    case ADD_WAREHOUSES:
      return { ...initialState, warehouses: payload };
    default:
      return state;
  }
}

export default reducer;
