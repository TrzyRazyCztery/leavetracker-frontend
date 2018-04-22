import React from 'react';
import '../../../styles/board/authentication/authenticationPage.css'
import LoginPage from "./LoginPage";
import Paper from 'material-ui/Paper'
import RegistrationPage from './RegistrationPage'

const AutenticationPage = () => {
  return (
      <div className="authentication-page">
        <Paper elevation={8}>
            <div className="authentication-page-login">
              <LoginPage/>
            </div>
            <div className="authentication-page-separator" />
            <div className="authentication-page-register">
              <RegistrationPage/>
            </div>
        </Paper>
      </div>
  )
};

export default AutenticationPage