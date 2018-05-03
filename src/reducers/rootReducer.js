import { combineReducers } from "redux";
import registerUserReducer from "./registerUserReducer";
import loginUserReducer from "./loginUserReducer";
import notificationReducer from "./notificationReducer";
import authorizationDataReducer from "./authorizationDataReducer";

const rootReducer = combineReducers({
  registerUserReducer,
  loginUserReducer,
  notificationReducer,
  authorizationDataReducer
});

export default rootReducer;
