import React, { Component } from "react";
import _ from "lodash";
import Button from "material-ui/Button";
import ValidatedInput from "shared/components/ValidatedInput";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordConfirmation,
  validateSurname
} from "utils/validator";

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

  submitAvailable = () =>
    _.reduce(this.state.userData, (result, field) => result && !!field, true);

  validateInput = () => {
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
    const userData = {...this.state.userData, [name]: event.target.value }
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
          errors={errors.email}
          handleChange={this.handleChange}
          value={userData.email}
        />
        <ValidatedInput
          type="password"
          name="password"
          label="Password"
          errors={errors.password}
          handleChange={this.handleChange}
          value={userData.password}
        />
        <ValidatedInput
          type="password"
          name="passwordConfirmation"
          label="Password confirmation"
          errors={errors.passwordConfirmation}
          handleChange={this.handleChange}
          value={userData.passwordConfirmation}
        />
        <ValidatedInput
          type="text"
          name="name"
          label="Name"
          errors={errors.name}
          handleChange={this.handleChange}
          value={userData.name}
        />
        <ValidatedInput
          type="text"
          name="surname"
          label="Surname"
          errors={errors.surname}
          handleChange={this.handleChange}
          value={userData.surname}
        />
        <div className="sign-button">
          <Button
            onClick={this.submit}
            variant="raised"
            color="primary"
            disabled={!this.submitAvailable()}
          >
            {" Sign "}
          </Button>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
