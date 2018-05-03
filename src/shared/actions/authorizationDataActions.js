import {
  SAVED_AUTHORIZATION_DATA,
  REMOVED_AUTHORIZATION_DATA
} from "src/reducers/authorizationDataReducer";

import { storageAdapter } from "src/utils/adapters";

const savedAuthorizationData = userData => ({
  type: SAVED_AUTHORIZATION_DATA,
  userData
});

const removedAuthorizationData = {
  type: REMOVED_AUTHORIZATION_DATA
};

export const copyAuthorizationDataFromStorage = dispatch => {
  const userData = storageAdapter.load("user");
  !!userData ? dispatch(savedAuthorizationData(userData)) : null;
};

export const logoutUser = dispatch => {
  storageAdapter.remove("user");
  dispatch(removedAuthorizationData);
};
