import { createSelector } from "reselect";

const storeStateSelector = (state) => state.activeStore;

export const storeSelector = () =>
  createSelector(storeStateSelector, (state) => state.selectedStore);
