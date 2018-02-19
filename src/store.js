import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";

import { Model } from "./types";

const init = new Model({});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware());
const store = createStore(reducers, init, enhancer);

export default store;
