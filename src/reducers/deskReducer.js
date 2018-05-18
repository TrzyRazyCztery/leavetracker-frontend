import {createActionNamespace} from "utils/actions";
import {omit} from 'lodash'

const deskAction = createActionNamespace('desk');

export const LOAD_DESKS_SUCCESS = deskAction("LOAD_DESKS_SUCCESS");
export const CREATE_DESK_SUCCESS = deskAction("CREATE_DESK_SUCCESS");
export const UPDATE_DESK_OWNER_SUCCESS = deskAction("CHANGE_DESK_OWNER_SUCCESS");
export const SAVED_FORM_ERRORS = deskAction("SAVED_FORM_ERRORS");
export const REMOVE_DESK_SUCCESS = deskAction("REMOVE_DESK_SUCCESS");
export const CREATE_DESK_FAILED = deskAction("CREATE_DESK_FAILED");
export const getErrors = state => state.desks.errors;
export const getDesks = state => state.desks.deskList;

const initialState = {
  errors: {},
  deskList: {}
};

const deskReducer = ( state = initialState, action ) => {
  switch(action.type){
    case LOAD_DESKS_SUCCESS:
      return {...state, deskList: action.desks};
    case CREATE_DESK_SUCCESS:
      return {...state, deskList: {...state.deskList, [action.createdDesk.id]: action.createdDesk}};
    case CREATE_DESK_FAILED:
      return {...state, errors: action.errors};
    case UPDATE_DESK_OWNER_SUCCESS:
      return {...state, deskList: {...state.deskList, [action.updatedDesk.id]: action.updatedDesk}};
    case SAVED_FORM_ERRORS:
      return {...state, errors: action.errors };
    case REMOVE_DESK_SUCCESS:
      return {...state, deskList: omit(state.deskList, action.deskId)};
    default:
      return state;
  }
};

export default deskReducer;
