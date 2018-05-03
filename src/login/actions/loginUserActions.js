import {
  LOGIN_USER_REQUESTED,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS
} from "src/reducers/loginUserReducer";
import {
  notifySuccess,
  notifyError
} from "src/shared/actions/notificationActions";
import { storageAdapter } from "src/utils/adapters";

const loginUserSuccess = userData => ({ type: LOGIN_USER_SUCCESS, userData });
const loginUserFailed = errors => ({ type: LOGIN_USER_FAILED, errors });
const loginUserRequested = () => ({ type: LOGIN_USER_REQUESTED });

export const loginUser = (history, loginData) => dispatch => {
  dispatch(loginUserRequested());
  return fetch("/users/authenticate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData)
  })
    .then(response => {
      const response_in_json = response.json();
      if (response_in_json.loginSuccess) {
        const userData = response_in_json.user;
        dispatch(loginUserSuccess(userData));
        history.push("/");
        dispatch(notifySuccess(`Hello ${userData.name}, You are logged in!`));
        storageAdapter.store("user", userData);
      } else {
        dispatch(loginUserFailed(response_in_json.errors));
        dispatch(notifyError("login failed"));
      }
    })
    .catch(err => {
      dispatch(notifyError(err));
    });
};
