import React from 'react';
import '../../../styles/board/credentials/credentialPage.css'
import LoginPage from "./LoginPage";
import Paper from 'material-ui/Paper'
import RegistrationPage from './RegistrationPage'

const CredentialPage = () => {
  return (
      <div className="credential-page">
        <Paper elevation={8}>
            <div className="credential-page-login">
              <LoginPage/>
            </div>
            <div className="credential-page-separator" />
            <div className="credential-page-register">
              <RegistrationPage/>
            </div>
        </Paper>
      </div>
  )
};

export default CredentialPage