import { GET_SUPPLIERS, ADD_SUPPLIERS } from "./actionTypes";

const initialState = {
  suppliers: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_SUPPLIERS:
      return state.suppliers;
    case ADD_SUPPLIERS:
      console.warn("reducer: ", payload)
      return { ...state, suppliers: [...payload] };
    default:
      return state;
  }
}

export default reducer;
