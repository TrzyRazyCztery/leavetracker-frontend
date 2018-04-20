import React, {Component} from 'react'
import Button from 'material-ui/Button'
import colors from '../../../variables/colors/colors';
import {registerFormValidator} from "../../../shared/validators";
import ValidatedInput from "./ValidatedInput";

class RegistrationForm extends Component {

  state = {
    userData: {
      email: '',
      password: '',
      passwordConfirmation: '',
      name: '',
      surname: ''
    }
  };

  validateInput = inputFieldName => {
    return registerFormValidator(this.state.userData, inputFieldName);
  };

  handleChange = name => event => {
    let userData = this.state.userData;
    userData[name] = event.target.value;
    this.setState({
      userData: userData
    });
  };

  submit = () => {
    this.props.registerUser(this.state.userData);
  };

  render() {
    return (
      <form>
        <ValidatedInput
          name="email"
          label="E-mail"
          handleChange = {this.handleChange}
          value={this.state.userData.email}
          inputValidator = {this.validateInput}
        />
        <ValidatedInput
          name="password"
          label="Password"
          handleChange = {this.handleChange}
          value={this.state.userData.password}
          inputValidator = {this.validateInput}
        />
        <ValidatedInput
          name="passwordConfirmation"
          label="Password confirmation"
          handleChange = {this.handleChange}
          value={this.state.userData.passwordConfirmation}
          inputValidator = {this.validateInput}
        />
        <ValidatedInput
          name="Name"
          label="Name"
          handleChange = {this.handleChange}
          value={this.state.userData.name}
          inputValidator = {this.validateInput}
        />
        <ValidatedInput
          name="surname"
          label="Surname"
          handleChange = {this.handleChange}
          value={this.state.userData.surname}
          inputValidator = {this.validateInput}
        />
        <div style={{paddingBottom: '30px', paddingTop: '20px'}}>
          <Button onClick={this.submit} style={{ backgroundColor: colors['mainColor']} } variant="raised" color="primary"> Sign </Button>
        </div>

      </form>
    )
  }
}

export default RegistrationForm;