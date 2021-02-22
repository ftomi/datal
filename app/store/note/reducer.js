import { GET_NOTES, ADD_NOTE, ADD_NOTES } from "./actionTypes";

const initialState = {
  notes: []
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_NOTES:
      return state.notes;
    case ADD_NOTE:
      const notes = state.notes;
      return { ...state, notes: [...notes, payload] };
    case ADD_NOTES:
      return { ...state, notes: [...payload] };
    default:
      return state;
  }
}

export default reducer;
