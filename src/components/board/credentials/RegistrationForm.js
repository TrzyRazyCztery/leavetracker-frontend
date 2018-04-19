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
    console.log(this.props);
    this.props.registerUser(this.state.userData);
  };

  render() {

    const {errors} = this.props;
    return (

      <form>
        <TextField
          error={Boolean(errors && errors.email)}
          id="regEmail"
          label= "E-mail"
          value={this.state.userData.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        {(errors && errors.email) && <div className="error-text">{errors.email} </div>}
        <TextField
          error={Boolean(errors && errors.password)}
          id="regPassword"
          label="Password"
          value={this.state.userData.password}
          onChange={this.handleChange('password')}
          type="password"
          margin="normal"
        />
        {(errors && errors.password) && <div className="error-text">{errors.password} </div>}
        <TextField
          error={Boolean(errors && errors.passwordConfirmation)}
          id="regPasswordConfirmation"
          label= "Password confirmation"
          value={this.state.userData.passwordConfirmation}
          onChange={this.handleChange('passwordConfirmation')}
          margin="normal"
          type="password"
        />
        {(errors && errors.passwordConfirmation) && <div className="error-text">{errors.passwordConfirmation} </div>}
        <TextField
          error={Boolean(errors && errors.name)}
          id="name"
          label="Name"
          value={this.state.userData.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        {(errors && errors.name) && <div className="error-text">{errors.name} </div>}
        <TextField
          error={Boolean(errors && errors.surname)}
          id="surname"
          label="Surname"
          value={this.state.userData.surname}
          onChange={this.handleChange('surname')}
          margin="normal"
        />
        {(errors && errors.surname) && <div className="error-text">{errors.surname} </div>}
        <div style={{paddingBottom: '30px', paddingTop: '20px'}}>
          <Button onClick={this.submit} style={{ backgroundColor: colors['mainColor']} } variant="raised" color="primary"> Sign </Button>
        </div>

      </form>
    )
  }
}

export default RegistrationForm;