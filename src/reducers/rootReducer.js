import { combineReducers } from 'redux';
import registerUserReducer from 'reducers/registerUserReducer';
import logInUserReducer from 'reducers/logInUserReducer';
import notificationReducer from 'reducers/notificationReducer';
import authorizationDataReducer from 'reducers/authorizationDataReducer';
import deskReducer from 'reducers/deskReducer';
import userReducer from 'reducers/userReducer';
import requestReducer from 'reducers/requestReducer';

const rootReducer = combineReducers({
  registerData: registerUserReducer,
  logInData: logInUserReducer,
  notifications: notificationReducer,
  authorizationData: authorizationDataReducer,
  desks: deskReducer,
  users: userReducer,
  requests: requestReducer
});

export default rootReducer;
