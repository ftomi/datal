import { createSelector } from "reselect";

const warehouseStateSelector = (state) => state.warehouse;

export const storeSelector = () =>
  createSelector(warehouseStateSelector, (state) => state.selectedWarehouse);
