import { SET_INVENTORY, ADD_INVENTORIES } from "./actionTypes";

const initialState = {
  inventories: [],
  selectedInventory: {},
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_INVENTORY:
      return { ...initialState, selectedInventory: payload };
    case ADD_INVENTORIES:
      return { ...initialState, inventories: payload };
    default:
      return state;
  }
}

export default reducer;
