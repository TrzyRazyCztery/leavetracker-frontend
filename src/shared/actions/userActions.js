import { LOAD_USERS_SUCCESS } from "reducers/userReducer";
import {notifyError} from "shared/actions/notificationActions";

const loadUsersSuccess = users => ({ type: LOAD_USERS_SUCCESS, users});

export const loadUsers = dispatch => {
  return fetch("/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(response => {
    const responsInJSON = response.json();
    dispatch(loadUsersSuccess(responsInJSON.users))
  }).catch(err => {
    dispatch(notifyError(err))
  })
};