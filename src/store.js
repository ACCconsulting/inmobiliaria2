import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import Reducer from "./_Reducer";

const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    //codigo para queno trune en el navegador queno se tiene instalada el complemento
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
export default store;
