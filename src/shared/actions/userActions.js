import { LOAD_USERS_SUCCESS } from 'reducers/userReducer';
import {notifyError} from 'shared/actions/notificationActions';

const loadUsersSuccess = users => ({ type: LOAD_USERS_SUCCESS, users});

export const loadUsers = dispatch => {
  return fetch('/users', {
    method: 'GET',
    headers: { 'Content-Type': 'request/json' },
  }).then(response => {
    const responseInJSON = response.json();
    dispatch(loadUsersSuccess(responseInJSON.users))
  }).catch(err => {
    dispatch(notifyError(err))
  })
};