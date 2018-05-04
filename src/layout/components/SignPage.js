import React from "react";
import "layout/styles/signPage.css";
import LogInPage from "logIn/components/LogInPage";
import Paper from "material-ui/Paper";
import RegistrationPage from "registration/components/RegistrationPage";

const SignPage = props => {
  return (
    <div className="sign-page">
      <Paper elevation={8}>
        <div className="sign-page-login">
          <LogInPage {...props} />
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
