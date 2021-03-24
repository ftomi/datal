import { createSelector } from "reselect";

const inventoryStateSelector = (state) => state.inventory;

export const inventorySelector = () =>
  createSelector(inventoryStateSelector, (state) => state.selectedInventory);

export const inventoryHeadSelector = () =>
  createSelector(inventoryStateSelector, (state) => state.tempInventoryHead);

export const inventoryItemsSelector = () =>
  createSelector(inventoryStateSelector, (state) => state.tempInventoryItems);
