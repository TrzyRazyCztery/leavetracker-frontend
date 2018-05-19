import { combineReducers } from 'redux';
import registerData from 'reducers/registerUserReducer';
import logInData from 'reducers/logInUserReducer';
import notifications from 'reducers/notificationReducer';
import authorizationData from 'reducers/authorizationDataReducer';
import desks from 'reducers/deskReducer';
import users from 'reducers/userReducer';
import requests from 'reducers/requestReducer';

const rootReducer = combineReducers({
  registerData,
  logInData,
  notifications,
  authorizationData,
  desks,
  users,
  requests
});

export default rootReducer;
