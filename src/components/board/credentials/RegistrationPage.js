import React, {Component} from 'react'
import RegistrationForm from './RegistrationForm'
import '../../../styles/board/credentials/registrationPage.css'

class RegistrationPage extends Component {

  render() {
    return (
      <div className="registration-page">
        <h2> Sign up </h2>
        <RegistrationForm/>
      </div>
    );
  }
}

export default RegistrationPage;