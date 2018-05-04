import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  SAVED_FORM_ERRORS
} from "reducers/registerUserReducer";
import {
  notifySuccess,
  notifyError
} from "shared/actions/notificationActions";

const registerUserSuccess = () => ({ type: REGISTER_USER_SUCCESS });
const registerUserFailed = errors => ({
  type: REGISTER_USER_FAILED,
  errors
});
const savedFormErrors = errors => ({ type: SAVED_FORM_ERRORS, errors });

export const registerUser = userData => dispatch => {
  return fetch("/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  })
    .then(response => {
      const responseInJson = response.json();
      if (responseInJson.registerSuccess) {
        const userData = responseInJson.user;
        dispatch(registerUserSuccess(userData));
        dispatch(notifySuccess(`Register success!`));
      } else {
        dispatch(registerUserFailed(responseInJson.errors));
        dispatch(notifyError("log in failed"));
      }
    })
    .catch(err => {
      dispatch(notifyError(err));
    });
};
//function above is only for test, it will be replaced with function, that will send post to
//server api and match action to response from server

export const saveFormErrors = errors => dispatch => {
  dispatch(savedFormErrors(errors));
};
