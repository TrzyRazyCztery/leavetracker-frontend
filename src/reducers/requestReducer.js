import { createActionNamespace } from "utils/actions";
import {omit} from "lodash";

const requestAction = createActionNamespace("request");

export const LOAD_REQUESTS_SUCCESS = requestAction("LOAD_REQUESTS_SUCCESS");
export const CREATE_REQUEST_SUCCESS = requestAction("CREATE_REQUESTS_SUCCESS");
export const CREATE_REQUEST_FAILED = requestAction("CREATE_REQUEST_FAILED");
export const REMOVE_REQUEST_SUCCESS = requestAction("REMOVE_REQUEST_SUCCESS");
export const SAVED_FORM_ERRORS = requestAction("SAVED_FORM_ERRORS");
export const LOAD_REQUEST_UTILS_SUCCESS = requestAction(
  "LOAD_REQUEST_UTILS_SUCCESS"
);
export const CHANGE_REQUEST_STATUS_SUCCESS = requestAction(
  "CHANGE_REQUEST_STATUS_SUCCESS"
);

export const getErrors = state => state.desks.errors;
export const getRequestStatuses = state => state.requests.requestStatusesList;
export const getRequests = state => state.requests.requestsList;
export const getRequestTypes = state => state.requests.requestTypesList;
const initialState = {
  requestTypesList: {},
  errors: {},
  requestsList: {},
  requestStatusesList: {}
};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REQUESTS_SUCCESS:
      return { ...state, requestsList: action.requests };
    case CREATE_REQUEST_FAILED:
      return { ...state, errors: action.errors };
    case CREATE_REQUEST_SUCCESS:
      return {
        ...state,
        requestsList: {
          ...state.requestsList,
          [action.createdRequest.id]: action.createdRequest
        }
      };
    case LOAD_REQUEST_UTILS_SUCCESS:
      return {
        ...state,
        requestStatusesList: action.requestUtils.requestStatuses,
        requestTypesList: action.requestUtils.requestTypes
      };
    case SAVED_FORM_ERRORS:
      return { ...state, errors: action.errors };
    case REMOVE_REQUEST_SUCCESS:
      return {
        ...state,
        requestsList: omit(state.requestsList, action.requestId)
      };
    case CHANGE_REQUEST_STATUS_SUCCESS:
      return {
        ...state,
        requestsList: {
          ...state.requestsList,
          [action.updatedRequest.id]: action.updatedRequest
        }
      };
    default:
      return state;
  }
};

export default requestReducer;
