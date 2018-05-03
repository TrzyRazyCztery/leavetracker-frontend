import { createStore, applyMiddleware } from "redux";
import rootReducer from "src/reducers/rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const configureStore = () =>
  createStore(rootReducer, applyMiddleware(thunk, logger));

export default configureStore;
