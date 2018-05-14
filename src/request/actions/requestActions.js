import {
  LOAD_REQUESTS_SUCCESS,
  LOAD_REQUEST_UTILS_SUCCESS,
  CREATE_REQUEST_SUCCESS,
  CREATE_REQUEST_FAILED,
  REMOVE_REQUEST_SUCCESS,
  SAVED_FORM_ERRORS,
  CHANGE_REQUEST_STATUS_SUCCESS
} from "reducers/requestReducer";

import { notifyError, notifySuccess } from "shared/actions/notificationActions";

export const loadRequestsSuccess = requests => ({
  type: LOAD_REQUESTS_SUCCESS,
  requests
});
export const createRequestSuccess = createdRequest => ({
  type: CREATE_REQUEST_SUCCESS,
  createdRequest
});
export const createRequestFailed = errors => ({
  type: CREATE_REQUEST_FAILED,
  errors
});
export const removeRequestSuccess = requestId => ({
  type: REMOVE_REQUEST_SUCCESS,
  requestId
});
export const loadRequestUtilsSuccess = requestUtils => ({
  type: LOAD_REQUEST_UTILS_SUCCESS,
  requestUtils
});
export const changeRequestStatusSuccess = updatedRequest => ({
  type: CHANGE_REQUEST_STATUS_SUCCESS,
  updatedRequest
});

const savedFormErrors = errors => ({ type: SAVED_FORM_ERRORS, errors });

export const loadRequests = dispatch => {
  return fetch("/requests", {
    method: "GET",
    headers: { "Content-Type": "request/json" }
  })
    .then(response => {
      const responseInJson = response.json();
      dispatch(loadRequestsSuccess(responseInJson.requests));
    })
    .catch(err => {
      dispatch(notifyError(err));
    });
};

export const createRequest = (userId, requestData) => dispatch => {
  return fetch("./requests", {
    method: "POST",
    headers: {
      "Content-Type": "request/json",
      "X-Authorization-Id": userId
    },
    body: JSON.stringify(requestData)
  })
    .then(response => {
      const response_in_json = response.json();
      if (response.ok) {
        dispatch(createRequestSuccess(response_in_json));
        dispatch(notifySuccess("Request created"));
        return true;
      } else {
        dispatch(createRequestFailed(response_in_json));
        return false;
      }
    })
    .catch(err => {
      dispatch(notifyError(err));
      return false;
    });
};

export const removeRequest = requestId => dispatch => {
  return fetch("./requests/" + requestId, {
    method: "DELETE",
    headers: { "Content-Type": "request/json" },
    body: JSON.stringify({ requestId })
  })
    .then(response => {
      response.ok
        ? dispatch(removeRequestSuccess(requestId))
        : dispatch(notifyError(response.toString()));
    })
    .catch(err => {
      dispatch(notifyError(err.toString()));
    });
};

export const loadRequestUtils = dispatch => {
  return fetch("/requests/utils", {
    method: "GET",
    headers: { "Content-Type": "request/json" }
  })
    .then(response => {
      const responseInJson = response.json();
      dispatch(loadRequestUtilsSuccess(responseInJson.utils));
    })
    .catch(err => {
      dispatch(notifyError(err));
    });
};

export const approveRequest = requestId => dispatch =>
  dispatch(changeRequestStatus(requestId, 1));
export const declineRequest = requestId => dispatch =>
  dispatch(changeRequestStatus(requestId, 2));

export const changeRequestStatus = (requestId, statusId) => dispatch => {
  return fetch("/requests/" + requestId, {
    method: "POST",
    headers: { "Content-Type": "request/json" },
    body: JSON.stringify({ statusId })
  })
    .then(response => {
      const responseInJson = response.json();
      response.ok
        ? dispatch(changeRequestStatusSuccess(responseInJson))
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
