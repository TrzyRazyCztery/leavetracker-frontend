import * as types from './actionTypes';


export function registerUserSuccess() {
  return {
    type: types.REGISTER_USER_SUCCESS
  };
}

export function registerUserFailed(errors) {
  return {
    type: types.REGISTER_USER_FAILED, errors
  };
}

export function registerUser(userData) {
  return function (dispatch) {
    return fetch("http://localhost:3000/", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'userData': userData})
    })
      .then((response) => { return response.json() })
      .catch(error => { throw(error);
      })
      .then( responseBody => {
        if (responseBody.errors){
          dispatch(registerUserFailed(responseBody));
        } else { dispatch(registerUserSuccess())}
      })
  }
}




