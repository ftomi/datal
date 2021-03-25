import {
  SET_INVENTORY,
  ADD_INVENTORIES,
  SAVE_TEMP_HEAD,
  ADD_TEMP_ITEM,
  REMOVE_TEMP_ITEM,
  CLEAN_TEMP,
  ADD_INVENTORYHEADS
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
      return { ...state, selectedInventory: payload };
    case ADD_INVENTORIES:
      return { ...state, inventories: payload };
    case ADD_INVENTORYHEADS:
      return { ...state, inventoryHeads: payload };
    case SAVE_TEMP_HEAD:
      console.log(payload)
      return { ...state, tempInventoryHead: payload };
    case ADD_TEMP_ITEM:
      console.log(state.tempInventoryItems)
      return { ...state, tempInventoryItems: [...state.tempInventoryItems, payload] };
    case REMOVE_TEMP_ITEM:
      const actualItems = state.tempInventoryItems.filter(x => x.id !== payload.id);
      console.log(actualItems)
      return { ...state, tempInventoryItems: actualItems };
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
