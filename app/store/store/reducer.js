import { SET_STORE } from "./actionTypes";

const initialState = "";

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_STORE:
      return payload;
    default:
      return state;
  }
}

export default reducer;
