import { createSelector } from "reselect";

const suppliersStateSelector = (state) => state.supplier;

export const suppliersSelector = () =>
  createSelector(suppliersStateSelector, (state) => state.suppliers);
