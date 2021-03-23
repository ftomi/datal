import { createSelector } from "reselect";

const inventoryStateSelector = (state) => state.inventory;

export const inventorySelector = () =>
  createSelector(inventoryStateSelector, (state) => state.selectedInventory);
