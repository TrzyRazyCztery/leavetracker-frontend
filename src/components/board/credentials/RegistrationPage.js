import React, {Component} from 'react'
import RegistrationForm from './RegistrationForm'
import '../../../styles/board/credentials/registrationPage.css'
import {connect} from 'react-redux'
import {getErrors} from "../../../reducers/registerUserReducer";
import registerUser from "../../../reducers/registerUserReducer";

class RegistrationPage extends Component {

  render() {
    return (
      <div className="registration-page">
        <h2> Sign up </h2>
        <RegistrationForm
          registerUser = {registerUser}
          errors = {this.props.errors}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: getErrors(state)
  }
}

const mapDispatchToProps = { registerUser };

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);