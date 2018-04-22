import React, {Component} from 'react'
import Button from 'material-ui/Button'
import colors from '../../../variables/colors/colors';
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

  validateInput = () => {
    this.props.validateForm(this.state.userData);
  };

  handleChange = name => event => {
    let userData = this.state.userData;
    userData[name] = event.target.value;
    this.validateInput();
    this.setState({
      userData: userData
    });
  };

  submit = () => {
    this.props.registerUser(this.state.userData);
  };

  render() {
    const {errors} = this.props;
    return (
      <form>
        <ValidatedInput
          type="text"
          name="email"
          label="E-mail"
          error={errors.email}
          handleChange = {this.handleChange}
          value={this.state.userData.email}
          inputValidator = {this.validateInput}
        />
        <ValidatedInput
          type="password"
          name="password"
          label="Password"
          error={errors.password}
          handleChange = {this.handleChange}
          value={this.state.userData.password}
          inputValidator = {this.validateInput}
        />
        <ValidatedInput
          type="password"
          name="passwordConfirmation"
          label="Password confirmation"
          error={errors.passwordConfirmation}
          handleChange = {this.handleChange}
          value={this.state.userData.passwordConfirmation}
          inputValidator = {this.validateInput}
        />
        <ValidatedInput
          type="text"
          name="name"
          label="Name"
          error={errors.name}
          handleChange = {this.handleChange}
          value={this.state.userData.name}
          inputValidator = {this.validateInput}
        />
        <ValidatedInput
          type="text"
          name="surname"
          label="Surname"
          error={errors.surname}
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