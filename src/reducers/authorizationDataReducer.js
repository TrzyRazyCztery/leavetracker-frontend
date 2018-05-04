import { createActionNamespace } from "utils/actions";
import { LOGIN_USER_SUCCESS } from "reducers/logInUserReducer";
//Action Types
const authorizationDataAction = createActionNamespace("authorizationData");

export const SAVED_AUTHORIZATION_DATA = authorizationDataAction(
  "SAVED_AUTHORIZATION_DATA"
);
export const REMOVED_AUTHORIZATION_DATA = authorizationDataAction(
  "REMOVED_AUTHORIZATION_DATA"
);
//Selectors
export const getAuthenticatedUser = state =>
  state.authorizationData.user;

//Reducer
const initialState = {
  user: null
};

const authorizationDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVED_AUTHORIZATION_DATA:
      return { ...state, user: action.userData };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.userData };
    case REMOVED_AUTHORIZATION_DATA:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authorizationDataReducer;
