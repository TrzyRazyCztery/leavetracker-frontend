import { createActionNamespace } from "utils/actions";
//Action types
const loginAction = createActionNamespace("loginUser");

export const LOGIN_USER_SUCCESS = loginAction("LOGIN_USER_SUCCESS");
export const LOGIN_USER_FAILED = loginAction("LOGIN_USER_FAILED");
export const LOGIN_USER_REQUESTED = loginAction("LOGIN_USER_REQUESTED");

//Selectors

export const getErrors = state => state.loginUserReducer.errors;
export const getLoginRequestStatus = state =>
  state.loginUserReducer.pendingLoginRequest;

//Reducer
const initialState = {
  errors: [],
  pendingLoginRequest: false
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUESTED:
      return { ...state, pendingLoginRequest: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, pendingLoginRequest: false };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        pendingLoginRequest: false,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default loginUserReducer;
