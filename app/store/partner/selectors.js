import { createSelector } from "reselect";

const suppliersStateSelector = (state) => state.partner;

export const suppliersSelector = () =>
  createSelector(suppliersStateSelector, (state) => state.suppliers);
