import { createSelector } from "reselect";

const storageStateSelector = (state) => state.storage;

export const storeSelector = () =>
  createSelector(storageStateSelector, (state) => state.selectedStorage);
