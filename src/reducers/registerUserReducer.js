import * as types from '../actions/actionTypes';

export function getErrors(state) {
  return state.registerUserReducer.errors
}

const initialState = {
  errors: {
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    surname: ""
  },
};

function registerUserReducer(state = initialState, action){
  switch(action.type){
    case types.REGISTER_USER_SUCCESS:
      return state;
    case types.REGISTER_USER_FAILED:
      return Object.assign({}, state, {
        errors: action.errors
      });
    case types.VALIDATED_FORM:
      return Object.assign({}, state, {
        errors: action.errors
      });
    default:
      return state;
  }
}

export default registerUserReducer;