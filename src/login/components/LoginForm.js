import React, { Component } from "react";
import Button from "material-ui/Button";
import { CircularProgress } from "material-ui/Progress";
import ValidatedInput from "shared/components/ValidatedInput";
import _ from "lodash";

class LoginForm extends Component {
  state = {
    loginData: {
      email: "",
      password: ""
    }
  };

  submitAvailable = () =>
    _.reduce(this.state.loginData, (result, field) => result && !!field, true);

  handleChange = name => event => {
    const loginData = { ...this.state.loginData, [name]: event.target.value}
    this.setState({
      loginData: loginData
    });
  };

  render() {
    const { loginData } = this.state;
    const { errors, pendingLoginRequest, loginUser } = this.props;
    return (
      <div>
        <ValidatedInput
          type="text"
          name="email"
          label="E-mail"
          formName="login-form"
          errors={errors}
          handleChange={this.handleChange}
          value={loginData.email}
        />
        <ValidatedInput
          type="password"
          name="password"
          label="Password"
          formName="login-form"
          errors={[]}
          handleChange={this.handleChange}
          value={loginData.password}
        />
        <div className="login-button">
          {pendingLoginRequest ? (
            <CircularProgress />
          ) : (
            <Button
              style={this.buttonStyle}
              variant="raised"
              disabled={!this.submitAvailable()}
              color="primary"
              onClick={() => {
                loginUser(this.state.loginData);
              }}
            >
              {" LOGIN "}
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default LoginForm;
