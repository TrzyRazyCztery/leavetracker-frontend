import { createActionNamespace } from "src/utils/actions";

//Action Types
const registerNotificationAction = createActionNamespace("notification");

export const NOTIFIED_ERROR = registerNotificationAction("NOTIFIED_ERROR");
export const NOTIFIED_INFO = registerNotificationAction("NOTIFIED_INFO");
export const NOTIFIED_SUCCESS = registerNotificationAction("NOTIFIED_SUCCESS");
export const NOTIFIED_WARNING = registerNotificationAction("NOTIFIED_WARNING");

//Selectors
export const getNotification = state => state.notificationReducer.notification;

//Reducer
const initialState = {
  notification: {}
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFIED_ERROR:
      return Object.assign({}, state, {
        notification: {
          type: "error",
          message: action.message
        }
      });
    case NOTIFIED_INFO:
      return Object.assign({}, state, {
        notification: {
          type: "info",
          message: action.message
        }
      });
    case NOTIFIED_SUCCESS:
      return Object.assign({}, state, {
        notification: {
          type: "success",
          message: action.message
        }
      });
    case NOTIFIED_WARNING:
      return Object.assign({}, state, {
        notification: {
          type: "warning",
          message: action.message
        }
      });
    default:
      return state;
  }
};

export default notificationReducer;
