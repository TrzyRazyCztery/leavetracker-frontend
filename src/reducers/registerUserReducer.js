import * as types from '../actions/actionTypes';

export function getErrors(state) {
  return state.registerUserReducer.errors
}
export function getEmailAlreadyUsed(state){
  return state.registerUserReducer.emailAlreadyUsed
}

const initialState = {
  errors: {
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    surname: "",
  },
  emailAlreadyUsed: false
};

function registerUserReducer(state = initialState, action){
  switch(action.type){
    case types.REGISTER_USER_SUCCESS:
      return state;
    case types.REGISTER_USER_FAILED:
      return Object.assign({}, state, {
        errors: action.errors
      });
    case types.EMAIL_IS_FREE:
      return Object.assign({}, state, {
        emailAlreadyUsed: false
      });
    case types.EMAIL_ALREADY_USED:
      return Object.assign({}, state, {
        emailAlreadyUsed: true
      });
    default:
      return state;
  }
}

export default registerUserReducer;