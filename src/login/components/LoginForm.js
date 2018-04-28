import React, { Component } from "react";
import validatedInput from "../../shared/components/validatedInput"
import colors from "../../variables/colors";
import Button from "material-ui/Button";
import ValidatedInput from "../../shared/components/ValidatedInput";
class LoginForm extends Component {

  state = {
    loginData:{
      login: "",
      password: ""
    }
  };

  buttonStyle = { backgroundColor: colors["mainColor"] };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const {loginData} = this.state;
    const {errors} = this.props;
    return (
        <div>
          <ValidatedInput
              name="email"
              label="Email"
              type="text"
              hasErrors={}
              errors={}
              handleChange={this.handleChange}
              value={loginData.login}
          />
          <ValidatedInput
              name="password"
              label="Password"
              type="password"
              hasErrors={}
              errors={}
              handleChange={this.handleChange}
              value={loginData.password}
          />
          <Button
              style = {this.buttonStyle}
              variant="raised"
              color="primary"
          >
            {" LOGIN "}
          </Button>
        </div>
    );
  }
}

export default LoginForm;