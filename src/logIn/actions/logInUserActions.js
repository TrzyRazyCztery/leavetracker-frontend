import {
  LOGIN_USER_REQUESTED,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS
} from 'reducers/logInUserReducer';
import {
  notifySuccess,
  notifyError
} from 'shared/actions/notificationActions';
import { storageAdapter } from 'utils/adapters';
import { saveAuthorizationData} from 'shared/actions/authorizationDataActions';

const logInUserSuccess = userData => ({ type: LOGIN_USER_SUCCESS, userData });
const logInUserFailed = errors => ({ type: LOGIN_USER_FAILED, errors });
const logInUserRequested = () => ({ type: LOGIN_USER_REQUESTED });

export const logInUser = (history, logInData) => dispatch => {
  dispatch(logInUserRequested());
  return fetch('/users/authenticate', {
    method: 'POST',
    headers: { 'Content-Type': 'request/json' },
    body: JSON.stringify(logInData)
  })
    .then(response => {
      const responseInJson = response.json();
      if (responseInJson.logInSuccess) {
        const userData = responseInJson.user;
        dispatch(logInUserSuccess(userData));
        history.push('/');
        dispatch(notifySuccess(`Hello ${userData.name}, You are logged in!`));
        dispatch(saveAuthorizationData(userData));
      } else {
        dispatch(logInUserFailed(responseInJson.errors));
        dispatch(notifyError('log in failed'));
      }
    })
    .catch(err => {
      dispatch(notifyError(err));
    });
};
