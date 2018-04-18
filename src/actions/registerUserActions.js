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

// export function registerUser(userData) {
//   return function (dispatch) {
//     return fetch("http://localhost:3000/", {
//       method: "post",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({'userData': userData})
//     })
//       .then((response) => { return response.json() })
//       .catch(error => { throw(error);
//       })
//       .then( responseBody => {
//         if (responseBody.errors){
//           dispatch(registerUserFailed(responseBody));
//         } else { dispatch(registerUserSuccess())}
//       })
//   }
// }


export function registerUser(userData){
  return function (dispatch){
    let errors = {};
    if(userData.email.includes('@')){ errors.email =  "Email is invalid" }
    if(userData.name !== ''){ errors.name = "Empty name is not allowed" }
    if(userData.password.length < 6){ errors.password = "Password should have at least 6 characters" }
    if(userData.password !== userData.passwordConfirmation){ errors.passwordConfirmation =  "Passwords doesn't match"}
    (Object.keys(errors).length === 0 && errors.constructor === Object) ?
      dispatch(registerUserSuccess()) :
      dispatch(registerUserFailed());
  };
}




