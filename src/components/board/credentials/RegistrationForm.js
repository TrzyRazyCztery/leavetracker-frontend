import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import colors from '../../../variables/colors/colors';


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

  handleChange = name => event => {
    let userData = this.state.userData;
    userData[name] = event.target.value;
    this.setState({
      userData: userData
    });
  };

  submit = () => {
    console.log(this.state.userData);
    this.props.registerUser(this.state.userData);
  };

  render() {

    const {errors} = this.props;
    return (

      <form>
        <TextField
          error={errors && errors.email}
          id="regEmail"
          label={(errors && errors.email) ? errors.email : "E-mail"}
          value={this.state.userData.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <TextField
          error={errors && errors.password}
          id="regPassword"
          label={(errors && errors.password) ? errors.password : "Password"}
          value={this.state.userData.password}
          onChange={this.handleChange('password')}
          type="password"
          margin="normal"
        />
        <TextField
          error={errors && errors.passwordConfirmation}
          id="regPasswordConfirmation"
          label={(errors && errors.passwordConfirmation) ? errors.errors.passwordConfirmation : "Password confirmation"}
          value={this.state.userData.passwordConfirmation}
          onChange={this.handleChange('passwordConfirmation')}
          margin="normal"
          type="password"
        />
        <TextField
          error={errors && errors.name}
          id="name"
          label={(errors && errors.name) ? errors.name : "Name"}
          value={this.state.userData.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          error={errors && errors.surname}
          id="surname"
          label={(errors && errors.surname) ? errors.surname : "Surname" }
          value={this.state.userData.surname}
          onChange={this.handleChange('surname')}
          margin="normal"
        />

        <Button onClick={this.submit} style={{ backgroundColor: colors['mainColor']} } variant="raised" color="primary"> Sign </Button>

      </form>
    )
  }
}

export default RegistrationForm;