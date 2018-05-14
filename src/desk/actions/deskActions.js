import {
  LOAD_DESKS_SUCCESS,
  CREATE_DESK_SUCCESS,
  UPDATE_DESK_OWNER_SUCCESS,
  SAVED_FORM_ERRORS,
  REMOVE_DESK_SUCCESS,
  CREATE_DESK_FAILED
} from 'reducers/deskReducer';

import { notifyError } from 'shared/actions/notificationActions';

const loadDesksSuccess = desks => ({ type: LOAD_DESKS_SUCCESS, desks });
const updateDeskOwnerSuccess = updatedDesk => ({
  type: UPDATE_DESK_OWNER_SUCCESS,
  updatedDesk
});
const savedFormErrors = errors => ({ type: SAVED_FORM_ERRORS, errors });
const createDeskSuccess = createdDesk => ({
  type: CREATE_DESK_SUCCESS,
  createdDesk
});
const removeDeskSuccess = deskId => ({ type: REMOVE_DESK_SUCCESS, deskId });
const createDeskFailed = errors => ({ type: CREATE_DESK_FAILED, errors });

export const loadDesks = dispatch => {
  return fetch('/desks', {
    method: 'GET',
    headers: { 'Content-Type': 'request/json' }
  })
    .then(response => {
      const responseInJson = response.json();
      dispatch(loadDesksSuccess(responseInJson.desks));
    })
    .catch(err => {
      dispatch(notifyError(err));
    });
};

export const updateDeskOwner = (deskId, ownerId) => dispatch => {
  return fetch('/desks/' + deskId, {
    method: 'POST',
    headers: { 'Content-Type': 'request/json' },
    body: JSON.stringify({ ownerId })
  })
    .then(response => {
      const response_in_json = response.json();
      response.ok
        ? dispatch(updateDeskOwnerSuccess(response_in_json))
        : dispatch(notifyError(response.json()));
    })
    .catch(err => {
      dispatch(notifyError(err));
    });
};

export const createDesk = deskData => dispatch => {
  return fetch('./desks', {
    method: 'POST',
    headers: { 'Content-Type': 'request/json' },
    body: JSON.stringify(deskData)
  })
    .then(response => {
      const response_in_json = response.json();
      if (response.ok) {
        dispatch(createDeskSuccess(response_in_json));
        return true;
      } else {
        dispatch(createDeskFailed(response_in_json));
        return false;
      }
    })
    .catch(err => {
      dispatch(notifyError(err));
      return false;
    });
};

export const removeDesk = deskId => dispatch => {
  return fetch('./desks/' + deskId, {
    method: 'DELETE',
    headers: { 'Content-Type': 'request/json' },
    body: JSON.stringify({ deskId })
  })
    .then(response => {
      response.ok
        ? dispatch(removeDeskSuccess(deskId))
        : dispatch(notifyError(response.json()));
    })
    .catch(err => {
      dispatch(notifyError(err));
    });
};

export const saveFormErrors = errors => dispatch => {
  dispatch(savedFormErrors(errors));
};
//functions above are only for test, they will be replaced with functions, that will send post to
//server api and match action to response
