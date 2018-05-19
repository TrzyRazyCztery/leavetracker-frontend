import React, { Component } from "react";
import Button from "material-ui/Button";
import { CircularProgress } from "material-ui/Progress";
import ValidatedInput from "shared/components/validatedInput";
import {reduce} from "lodash";

class LogInForm extends Component {
  state = {
    logInData: {
      email: '',
      password: ''
    }
  };

  submitAvailable = () =>
    reduce(this.state.logInData, (result, field) => result && !!field, true);

  handleChange = name => event => {
    const logInData = { ...this.state.logInData, [name]: event.target.value}
    this.setState({ logInData });
  };

  render() {
    const { logInData } = this.state;
    const { errors, pendingLogInRequest, logInUser } = this.props;
    return (
      <div>
        <ValidatedInput
          type='text'
          name='email'
          label='E-mail'
          formName='login-form'
          errors={errors}
          handleChange={this.handleChange}
          value={logInData.email}
        />
        <ValidatedInput
          type='password'
          name='password'
          label='Password'
          formName='login-form'
          errors={[]}
          handleChange={this.handleChange}
          value={logInData.password}
        />
        <div className='login-button'>
          {pendingLogInRequest ? (
            <CircularProgress />
          ) : (
            <Button
              style={this.buttonStyle}
              variant='raised'
              disabled={!this.submitAvailable()}
              color='primary'
              onClick={() => {
                logInUser(this.state.logInData);
              }}
            >
              {' LOGIN '}
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default LogInForm;
