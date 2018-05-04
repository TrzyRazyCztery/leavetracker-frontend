import React, { Component } from "react";
import LogInForm from "logIn/components/LogInForm";
import "logIn/styles/logInPage.css";
import { logInUser } from "logIn/actions/logInUserActions";
import { connect } from "react-redux";
import {
  getErrors,
  getLogInRequestStatus
} from "reducers/logInUserReducer";

class LogInPage extends Component {
  render() {
    const { history, logInUser, pendingLogInRequest, errors } = this.props;
    return (
      <div className="login-page">
        <h2> Sign in </h2>
        <LogInForm
          logInUser={logInUser(history)}
          pendingLogInRequest={pendingLogInRequest}
          errors={errors}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pendingLogInRequest: getLogInRequestStatus(state),
  errors: getErrors(state)
});

const mapDispatchToProps = dispatch => ({
  logInUser: history => userData => dispatch(logInUser(history, userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
