import * as types from '../actions/actionTypes';

export function getErrors(state) {
  console.log("getErrors", state)
  return state.registerUserReducer.registrationErrors
}

function registerUserReducer(state = {}, action){
  console.log("reducer state", state);
  console.log("reducer action", action);
  switch(action.type){
    case types.REGISTER_USER_SUCCESS:
      return Object.assign({}, state, {
        registrationErrors: {}
      });
    case types.REGISTER_USER_FAILED:
      return Object.assign({}, state, {
        registrationErrors: action.errors
      });
    default:
      return state;
  }
}

export default registerUserReducer;