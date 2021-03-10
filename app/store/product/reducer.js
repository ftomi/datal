import { GET_PRODUCTS, GET_PRODUCT, SET_SELECTED_PRODUCT, ADD_PRODUCTS } from "./actionTypes";

const initialState = {
  products: [],
  selectedProduct: {},
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCTS:
      return state.products;
    case GET_PRODUCT:
      return state.selectedProduct;
    case SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };
    case ADD_PRODUCTS:
      return { ...state, products: [...payload] };
    default:
      return state;
  }
}

export default reducer;
