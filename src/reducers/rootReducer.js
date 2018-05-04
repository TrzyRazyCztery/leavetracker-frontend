import { combineReducers } from "redux";
import registerUserReducer from "reducers/registerUserReducer";
import loginUserReducer from "reducers/loginUserReducer";
import notificationReducer from "reducers/notificationReducer";
import authorizationDataReducer from "reducers/authorizationDataReducer";

const rootReducer = combineReducers({
  registerUserReducer,
  loginUserReducer,
  notificationReducer,
  authorizationDataReducer
});

export default rootReducer;
