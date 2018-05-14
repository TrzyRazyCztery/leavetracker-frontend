import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  SAVED_FORM_ERRORS
} from 'reducers/registerUserReducer';
import {
  notifySuccess,
  notifyError
} from 'shared/actions/notificationActions';
import { saveAuthorizationData} from 'shared/actions/authorizationDataActions';

const registerUserSuccess = () => ({ type: REGISTER_USER_SUCCESS });
const registerUserFailed = errors => ({
  type: REGISTER_USER_FAILED,
  errors
});
const savedFormErrors = errors => ({ type: SAVED_FORM_ERRORS, errors });

export const registerUser = (history, userData) => dispatch => {
  return fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'request/json' },
    body: JSON.stringify(userData)
  })
    .then(response => {
      const responseInJson = response.json();
      if (responseInJson.registerSuccess) {
        const userData = responseInJson.user;
        dispatch(registerUserSuccess(userData));
        history.push('/');
        dispatch(notifySuccess(`Register success, now you are logged in as ${userData.name}`));
        dispatch(saveAuthorizationData(userData));
      } else {
        dispatch(registerUserFailed(responseInJson.errors));
        dispatch(notifyError('log in failed'));
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
