export function registerFormValidator(userData, fieldToValidate) {
  const emailValidator = (email) => {
    const regExpForEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExpForEmail.test(String(email).toLocaleLowerCase());
  };
  switch (fieldToValidate) {

    case "email":
      if (!emailValidator(userData.email)) {
        return "Email is invalid"
      } else {
        return ""
      }
    case "name":
      if (userData.name === '') {
        return "Empty name is not allowed"
      }  else {
        return ""
      }
    case "surname":
      if (userData.surname === '') {
        return "Empty surname is not allowed"
      } else {
        return ""
      }
    case "password":
      if (userData.password.length < 6) {
        return "Password should have at least 6 characters"
      } else {
        return ""
      }
    case "passwordConfirmation":
      if (userData.password !== userData.passwordConfirmation) {
        return "Passwords doesn't match"
      } else {
        return ""
      }
    default:
      return ""
  }
}