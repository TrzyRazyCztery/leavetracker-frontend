import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import colors from '../../../variables/colors/colors';


class RegistrationForm extends Component {

  state = {
    email: '',
    password: '',
    passwordConfirmation: '',
    name: '',
    surname: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  submit = () => {
    console.log(this.state);
  };

  render() {
    return (

      <form>
        <TextField
          id="regEmail"
          label="E-mail"
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <br />
        <TextField
          id="regPassword"
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          type="password"
          margin="normal"
        />
        <TextField
          id="regPasswordConfirmation"
          label="Password confirmation"
          value={this.state.passwordConfirmation}
          onChange={this.handleChange('passwordConfirmation')}
          margin="normal"
          type="password"
        />
        <TextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="surname"
          label="Surname"
          value={this.state.surname}
          onChange={this.handleChange('surname')}
          margin="normal"
        />
        <br /><br />
        <Button onClick={this.submit} style={{backgroundColor: colors['mainColor']} } variant="raised" color="primary"> Sign </Button>
        <br /> <br />
      </form>
    )
  }
}

export default RegistrationForm;