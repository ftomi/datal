import { combineReducers } from "redux";

import { reducer as loaderReducer } from "./loader";
import { reducer as errorReducer } from "./error";
import { reducer as activeUserReducer } from "./auth";
import { reducer as activeStoreReducer } from "./store";
import { reducer as productReducer } from "./product";

import { reducer as noteReducer } from "./note";

import { RESET_STATE } from "./shared";

const reducer = combineReducers({
  loader: loaderReducer,
  error: errorReducer,
  activeUser: activeUserReducer,
  activeStore: activeStoreReducer,
  note: noteReducer,
  product: productReducer,
});

export default function(state, action) {
  if (action.type === RESET_STATE) {
    state = undefined;
  }
  return reducer(state, action);
}
