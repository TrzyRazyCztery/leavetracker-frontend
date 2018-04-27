import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  SAVED_FORM_ERRORS
} from "../../reducers/registerUserReducer";

const registerUserSuccess = () => ({ type: REGISTER_USER_SUCCESS });
const registerUserFailed = errors => ({
  type: REGISTER_USER_FAILED,
  errors
});
const savedFormErrors = errors => ({ type: SAVED_FORM_ERRORS, errors });

export const registerUser = userData => dispatch => {
  const errors = {
    email: userData.email === "foo@bar.com" ? "Email is already used" : ""
  };
  const anyErrorMessages = Object.values(errors).some(message => message);
  anyErrorMessages
    ? dispatch(registerUserFailed(errors))
    : dispatch(registerUserSuccess());
};
//function above is only for test, it will be replaced with function, that will send post to
//server api and match action to response from server

export const saveFormErrors = errors => dispatch => {
  dispatch(savedFormErrors(errors));
};
