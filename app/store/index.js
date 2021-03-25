import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

export default store;
