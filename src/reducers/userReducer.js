import { createActionNamespace } from 'utils/actions';

const userAction = createActionNamespace('user');
export const LOAD_USERS_SUCCESS = userAction('LOAD_USERS_SUCCESS');

export const getUsers = state => state.users.usersList;

const initialState = {
  usersList: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return { ...state, usersList: action.users };
    default:
      return state;
  }
};

export default userReducer;
