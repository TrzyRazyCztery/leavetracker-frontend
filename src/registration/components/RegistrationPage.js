import React, { Component } from "react";
import RegistrationForm from "src/registration/components/RegistrationForm";
import "src/registration/styles/registrationPage.css";
import { connect } from "react-redux";
import { getErrors } from "src/reducers/registerUserReducer";
import { registerUser, saveFormErrors } from "src/registration/actions/registerUserActions";

class RegistrationPage extends Component {
  render() {
    return (
      <div className="registration-page">
        <h2> Sign up </h2>
        <RegistrationForm
          registerUser={this.props.registerUser}
          saveFormErrors={this.props.saveFormErrors}
          errors={this.props.errors}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: getErrors(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: userData => {
      dispatch(registerUser(userData));
    },
    saveFormErrors: errors => {
      dispatch(saveFormErrors(errors));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
