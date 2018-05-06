import { combineReducers } from "redux";
import registerUserReducer from "reducers/registerUserReducer";
import logInUserReducer from "reducers/logInUserReducer";
import notificationReducer from "reducers/notificationReducer";
import authorizationDataReducer from "reducers/authorizationDataReducer";
import deskReducer from "reducers/deskReducer";
import userReducer from "reducers/userReducer";

const rootReducer = combineReducers({
  registerData: registerUserReducer,
  logInData: logInUserReducer,
  notifications: notificationReducer,
  authorizationData: authorizationDataReducer,
  desks: deskReducer,
  users: userReducer
});

export default rootReducer;
