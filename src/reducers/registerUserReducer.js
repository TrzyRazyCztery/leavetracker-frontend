import { createActionNamespace } from "src/utils/actions";

//Action Types
const registerUserAction = createActionNamespace("registerUser");

export const REGISTER_USER_SUCCESS = registerUserAction(
  "REGISTER_USER_SUCCESS"
);
export const REGISTER_USER_FAILED = registerUserAction("REGISTER_USER_FAILED");
export const SAVED_FORM_ERRORS = registerUserAction("SAVED_FORM_ERRORS");

//Selectors
export const getErrors = state => state.registerUserReducer.errors;

//Reducer
const initialState = {
  errors: {}
};

const registerUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return state;
    case REGISTER_USER_FAILED:
      return {...state, errors: action.errors };
    case SAVED_FORM_ERRORS:
      return {...state, errors: action.errors };
    default:
      return state;
  }
};

export default registerUserReducer;
