import React, { Component } from "react";
import Button from "material-ui/Button";
import colors from "../../variables/colors";
import ValidatedInput from "../../shared/components/ValidatedInput";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordConfirmation,
  validateSurname
} from "../../utils/validator";

class RegistrationForm extends Component {
  state = {
    userData: {
      email: "",
      password: "",
      passwordConfirmation: "",
      name: "",
      surname: ""
    }
  };

  validateInput = name => {
    const { userData } = this.state;
    const errors = Object.assign(
      {},
      validateEmail(userData.email),
      validatePassword(userData.password),
      validatePasswordConfirmation(
        userData.password,
        userData.passwordConfirmation
      ),
      validateName(userData.name),
      validateSurname(userData.surname)
    );
    this.props.saveFormErrors(errors);
  };

  handleChange = name => event => {
    const userData = Object.assign({}, this.state.userData, {
      [name]: event.target.value
    });
    this.setState(
      {
        userData: userData
      },
      this.validateInput
    );
  };

  submit = () => {
    this.props.registerUser(this.state.userData);
  };

  render() {
    const { errors } = this.props;
    const { userData } = this.state;
    return (
      <form>
        <ValidatedInput
          type="text"
          name="email"
          label="E-mail"
          hasErrors={!!errors.email}
          error={errors.email}
          handleChange={this.handleChange}
          value={userData.email}
        />
        <ValidatedInput
          type="password"
          name="password"
          label="Password"
          hasErrors={!!errors.password}
          error={errors.password}
          handleChange={this.handleChange}
          value={userData.password}
        />
        <ValidatedInput
          type="password"
          name="passwordConfirmation"
          label="Password confirmation"
          hasErrors={!!errors.passwordConfirmation}
          error={errors.passwordConfirmation}
          handleChange={this.handleChange}
          value={userData.passwordConfirmation}
        />
        <ValidatedInput
          type="text"
          name="name"
          label="Name"
          hasErrors={!!errors.name}
          error={errors.name}
          handleChange={this.handleChange}
          value={userData.name}
        />
        <ValidatedInput
          type="text"
          name="surname"
          label="Surname"
          error={errors.surname}
          hasErrors={!!errors.surname}
          handleChange={this.handleChange}
          value={userData.surname}
        />
        <div style={{ paddingBottom: "30px", paddingTop: "20px" }}>
          <Button
            onClick={this.submit}
            style={{ backgroundColor: colors["mainColor"] }}
            variant="raised"
            color="primary"
          >
            {" Sign "}
          </Button>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
