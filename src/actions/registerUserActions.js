import * as types from './actionTypes';


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

export function emailAlreadyUsed() {
  return {
    type: types.EMAIL_ALREADY_USED
  };
}

export function emailIsFree() {
  return {
    type: types.EMAIL_IS_FREE
  };
}




export function registerUser(userData){
  return function (dispatch){
    let errors = {};
    if(!userData.email.includes('@')){ errors.email =  "Email is invalid" }
    if(userData.name === ''){ errors.name = "Empty name is not allowed" }
    if(userData.surname === ''){ errors.surname = "Empty surname is not allowed" }
    console.log("pass ", userData.password,
                "\nconfpass ", userData.passwordConfirmation,
                "\npasslen ", userData.password.length,
                "\nmathching ", userData.password !== userData.passwordConfirmation)
    if(userData.password.length < 6){ errors.password = "Password should have at least 6 characters" }
    if(userData.password !== userData.passwordConfirmation){ errors.passwordConfirmation =  "Passwords doesn't match"}
    console.log(errors);
    (Object.keys(errors).length === 0 && errors.constructor === Object) ?
      dispatch(registerUserSuccess()) :
      dispatch(registerUserFailed(errors));
  };
}

export function checkEMailAvailability(emailAddress){
  return function(dispatch){
    if (  emailAddress === "foo@bar.pl"
       || emailAddress === "bar@foo.pl"
       || emailAddress === "test@test.com"){
      dispatch(emailAlreadyUsed())
    }else {
      dispatch(emailIsFree())
    }
  }
}




