import {
  SET_INVENTORY,
  ADD_INVENTORIES,
  SAVE_TEMP_HEAD,
  ADD_TEMP_ITEM,
  REMOVE_TEMP_ITEM,
  CLEAN_TEMP,
} from "./actionTypes";

const initialState = {
  inventories: [],
  selectedInventory: {},
  inventoryHeads: [],
  tempInventoryHead: {},
  tempInventoryItems: []
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_INVENTORY:
      return { ...initialState, selectedInventory: payload };
    case ADD_INVENTORIES:
      return { ...initialState, inventories: payload };
    case SAVE_TEMP_HEAD:
      return { ...initialState, tempInventoryHead: payload };
    case ADD_TEMP_ITEM:
      return { ...initialState, tempInventoryItems: [...tempInventoryItems, payload] };
    case REMOVE_TEMP_ITEM:
      const actualItems = state.tempInventoryItems.filter(x => x.id !== payload.id);
      return { ...initialState, tempInventoryItems: actualItems };
    case CLEAN_TEMP:
      return {
        ...initialState,
        tempInventoryHead: {},
        tempInventoryItems: []
      }
    default:
      return state;
  }
}

export default reducer;
