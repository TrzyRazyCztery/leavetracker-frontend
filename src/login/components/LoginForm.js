import React, { Component } from "react";
//import validatedInput from "../../shared/components/validatedInput"
import colors from "../../variables/colors";
import Button from "material-ui/Button";
class LoginForm extends Component {
  state = {
    login: "",
    password: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <Button
        style={{ backgroundColor: colors["mainColor"] }}
        variant="raised"
        color="primary"
      >
        {" "}
        LOGIN{" "}
      </Button>
    );
  }
}

export default LoginForm;
