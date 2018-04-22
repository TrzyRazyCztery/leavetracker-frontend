export function registerFormValidator(userData) {

  const emailValidator = (email) => {
    const regExpForEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExpForEmail.test(String(email).toLocaleLowerCase());
  };

  let errors = {};
  if (!emailValidator(userData.email)) {
    errors.email =  "Email is invalid";
  } else errors.email = "";
  if (userData.name === '') {
    errors.name = "Empty name is not allowed"
  }  else {
    errors.name = "";
  }
  if (userData.surname === '') {
    errors.surname = "Empty surname is not allowed"
  } else {
    errors.surname = "";
  }
  if (userData.password.length < 6) {
    errors.password = "Password should have at least 6 characters";
  } else {
    errors.password = "";
  }
  if (userData.password !== userData.passwordConfirmation) {
    errors.passwordConfirmation = "Passwords doesn't match";
  } else {
    errors.passwordConfirmation = "";
  }
  return errors
}