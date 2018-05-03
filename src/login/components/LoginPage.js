import React, { Component } from "react";
import LoginForm from "./LoginForm";
import "../styles/loginPage.css";
import { loginUser } from "../actions/loginUserActions";
import { connect } from "react-redux";
import {
  getErrors,
  getLoginRequestStatus
} from "../../reducers/loginUserReducer";

class LoginPage extends Component {
  render() {
    const { history, loginUser, pendingLoginRequest, errors } = this.props;
    return (
      <div className="login-page">
        <h2> Sign in </h2>
        <LoginForm
          loginUser={loginUser(history)}
          pendingLoginRequest={pendingLoginRequest}
          errors={errors}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pendingLoginRequest: getLoginRequestStatus(state),
  errors: getErrors(state)
});

const mapDispatchToProps = dispatch => ({
  loginUser: history => userData => dispatch(loginUser(history, userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
