import * as types from './actionTypes';
import {registerFormValidator} from '../shared/validators';

export function registerUserSuccess() {
  return {
    type: types.REGISTER_USER_SUCCESS
  };
}

export function registerUserFailed(errors) {
  return {
    type: types.REGISTER_USER_FAILED, errors
  };
}

export function validatedForm(errors){
  return {
    type: types.VALIDATED_FORM, errors
  }
}

export function registerUser(userData){
  return function (dispatch){
    let errors = {};
    if (userData.email === 'foo@bar.com'){
      errors.email = "Email already used";
    }
    (Object.keys(errors).length === 0 && errors.constructor === Object) ?
      dispatch(registerUserSuccess()) :
      dispatch(registerUserFailed(errors));
  };
}

export function validateForm(userData){
  return function (dispatch) {
    dispatch(validatedForm(registerFormValidator(userData)));
  }
}




