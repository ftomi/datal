import { GET_NOTES, ADD_NOTE } from "./actionTypes";

const initialState = {
   notes: null
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_NOTES:
      return state.notes;
    case ADD_NOTE:
      return {...state, [...state.notes, payload]};
    default:
      return state;
  }
}

export default reducer;
