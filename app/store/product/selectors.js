import { createSelector } from "reselect";

const productsStateSelector = (state) => state.product;

export const productsSelector = () =>
  createSelector(productsStateSelector, (state) => state.products);

export const selectedProductSelector = () =>
  createSelector(
    productsStateSelector,
    (state) => state.selectedProduct
  );
