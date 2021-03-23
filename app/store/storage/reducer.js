import { SET_STORAGE, ADD_STORAGES } from "./actionTypes";

const initialState = {
  storages: [],
  selectedStorage: {},
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_STORAGE:
      return { ...initialState, selectedStorage: payload };
    case ADD_STORAGES:
      return { ...initialState, storages: payload };
    default:
      return state;
  }
}

export default reducer;
