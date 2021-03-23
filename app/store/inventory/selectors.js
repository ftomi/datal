import { createSelector } from "reselect";

const inventoryStateSelector = (state) => state.inventory;

export const storeSelector = () =>
  createSelector(inventoryStateSelector, (state) => state.selectedInventory);
