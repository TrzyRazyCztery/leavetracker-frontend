import * as types from './actionTypes';


export function registerUserSuccess() {
  return {
    type: types.REGISTER_USER_SUCCESS
  };
}

export function registerUserFailed(errors) {
  console.log("action errors", errors);
  return {
    type: types.REGISTER_USER_FAILED, errors
  };
}


export function registerUser(userData){
  return function (dispatch){
    console.log("action", userData);
    let errors = {};
    if(!userData.email.includes('@')){ errors.email =  "Email is invalid" }
    if(userData.name === ''){ errors.name = "Empty name is not allowed" }
    if(userData.surname === ''){ errors.surname = "Empty surname is not allowed" }
    if(userData.password.length < 6){ errors.password = "Password should have at least 6 characters" }
    if(userData.password !== userData.passwordConfirmation){ errors.passwordConfirmation =  "Passwords doesn't match"}
    (Object.keys(errors).length === 0 && errors.constructor === Object) ?
      dispatch(registerUserSuccess()) :
      dispatch(registerUserFailed(errors));
  };
}




