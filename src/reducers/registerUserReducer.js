import * as types from '../actions/actionTypes';

function registerUserReducer(state = [], action){
  switch(action.type){
    case types.REGISTER_USER_SUCCESS:
      return state;
    case types.REGISTER_USER_FAILED:
      return Object.assign({}, state, {
        errors: action.errors
      });
    default:
      return state;
  }
}

export default registerUserReducer();