import React, {Component} from 'react'
import RegistrationForm from './RegistrationForm'
import '../../../styles/board/authentication/registrationPage.css'
import {connect} from 'react-redux'
import {getErrors} from "../../../reducers/registerUserReducer";
import {registerUser, validateForm} from "../../../actions/registerUserActions";

class RegistrationPage extends Component {

  render() {
    return (
      <div className="registration-page">
        <h2> Sign up </h2>
        <RegistrationForm
          registerUser = {this.props.registerUser}
          validateForm = {this.props.validateForm}
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
};

const mapDispatchToProps = (dispatch) =>  {
  return {
    registerUser: (userData) => {
      dispatch(registerUser(userData))
    },
    validateForm: (userData) => {
      dispatch(validateForm(userData))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);