import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import refreshTokenMiddleware from "./middleware/refreshTokenMiddleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, refreshTokenMiddleware))
);

export default store;
