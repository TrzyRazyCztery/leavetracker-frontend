import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import colors from "../../../variables/colors/colors";
import Button from 'material-ui/Button'
class LoginForm extends Component {

  state = {
    login: '',
    password: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <form>
        <TextField
          id="login"
          label="User Name"
          value={this.state.login}
          onChange={this.handleChange('login')}
          margin="normal"
        />
      <br />
        <TextField
          id="password"
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
        />
        <br /><br />
        <Button style={{backgroundColor: colors['mainColor']} } variant="raised" color="primary"> LOGIN </Button>
        <br /> <br />
      </form>
    )
  }
}

export default LoginForm;