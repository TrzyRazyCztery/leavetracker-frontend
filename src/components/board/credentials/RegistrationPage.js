import React, {Component} from 'react'
import RegistrationForm from './RegistrationForm'
import '../../../styles/board/credentials/registrationPage.css'
import {connect} from 'react-redux'
import {getErrors} from "../../../reducers/registerUserReducer";
import {registerUser} from "../../../actions/registerUserActions";

class RegistrationPage extends Component {

  render() {
    return (
      <div className="registration-page">
        <h2> Sign up </h2>
        <RegistrationForm
          registerUser = {this.props.registerUser}
          errors = {this.props.errors}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapstate", state)
  return {
    errors: getErrors(state)
  }
};

const mapDispatchToProps = (dispatch) =>  {
  return {
    registerUser: (userData) => {
      dispatch(registerUser(userData))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);