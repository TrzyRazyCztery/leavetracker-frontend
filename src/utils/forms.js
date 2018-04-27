const emailValidator = email => {
  const regExpForEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExpForEmail.test(String(email).toLocaleLowerCase());
};

export const registerFormValidator = userData => ({
  email:
    emailValidator(userData.email)
      ? ""
      : "Email is invalid",
  name:
    userData.name === ""
      ? "Empty name is not allowed"
      : "",
  surname:
    userData.surname = ""
      ? "Empty surname is not allowed"
      : "",
  password:
    userData.password.length < 6
      ? "Password should have at least 6 characters"
      : "",
  passwordConfirmation:
    userData.password !== userData.passwordConfirmation
      ? "Passwords doesn't match"
      : ""
});
