import React, { Component } from 'react';
import RegistrationForm from 'registration/components/RegistrationForm';
import 'registration/styles/registrationPage.css';
import { connect } from 'react-redux';
import { getErrors } from 'reducers/registerUserReducer';
import {
  registerUser,
  saveFormErrors
} from 'registration/actions/registerUserActions';

class RegistrationPage extends Component {
  render() {
    const {registerUser, saveFormErrors, errors, history} = this.props;
    return (
      <div className='registration-page'>
        <h2> Sign up </h2>
        <RegistrationForm
          registerUser={registerUser(history)}
          saveFormErrors={saveFormErrors}
          errors={errors}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: getErrors(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: history => userData => {
      dispatch(registerUser(history, userData));
    },
    //I think, this one should be changed to handle promise result, then use
    // redirect directly from this component instead of pushing history to action
    saveFormErrors: errors => {
      dispatch(saveFormErrors(errors));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
