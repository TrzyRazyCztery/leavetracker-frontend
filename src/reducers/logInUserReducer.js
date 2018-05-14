import { createActionNamespace } from 'utils/actions';
//Action types
const logInAction = createActionNamespace('logInUser');

export const LOGIN_USER_SUCCESS = logInAction('LOGIN_USER_SUCCESS');
export const LOGIN_USER_FAILED = logInAction('LOGIN_USER_FAILED');
export const LOGIN_USER_REQUESTED = logInAction('LOGIN_USER_REQUESTED');

//Selectors

export const getErrors = state => state.logInData.errors;
export const getLogInRequestStatus = state =>
  state.logInData.pendingLogInRequest;

//Reducer
const initialState = {
  errors: [],
  pendingLogInRequest: false
};

const logInUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUESTED:
      return { ...state, pendingLogInRequest: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, pendingLogInRequest: false };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        pendingLogInRequest: false,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default logInUserReducer;
