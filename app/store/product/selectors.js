import { createSelector } from "reselect";

const productsStateSelector = (state) => state.products;

export const productsSelector = () =>
  createSelector(productsStateSelector, (state) => state.products);

const selectedProductStateSelector = (state) => state.selectedProduct;

export const selectedProductSelector = () =>
  createSelector(
    selectedProductStateSelector,
    (state) => state.selectedProduct
  );
