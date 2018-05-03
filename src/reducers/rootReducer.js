import { combineReducers } from "redux";
import registerUserReducer from "src/reducers/registerUserReducer";
import loginUserReducer from "src/reducers/loginUserReducer";
import notificationReducer from "src/reducers/notificationReducer";
import authorizationDataReducer from "src/reducers/authorizationDataReducer";

const rootReducer = combineReducers({
  registerUserReducer,
  loginUserReducer,
  notificationReducer,
  authorizationDataReducer
});

export default rootReducer;
