import React from "react";
import "src/layout/styles/signPage.css";
import LoginPage from "src/login/components/LoginPage";
import Paper from "material-ui/Paper";
import RegistrationPage from "src/registration/components/RegistrationPage";

const SignPage = props => {
  return (
    <div className="sign-page">
      <Paper elevation={8}>
        <div className="sign-page-login">
          <LoginPage {...props} />
        </div>
        <div className="sign-page-separator" />
        <div className="sign-page-register">
          <RegistrationPage />
        </div>
      </Paper>
    </div>
  );
};

export default SignPage;
