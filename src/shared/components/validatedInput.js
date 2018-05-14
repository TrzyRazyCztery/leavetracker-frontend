import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class ValidatedInput extends Component {
  state = {
    dirty: false
  };

  changeDirty = () => {
    this.setState({
      dirty: true
    });
  };

  fieldId = () => this.props.formName + '-' + this.props.name;

  errorsPresent = () => !!this.props.errors && this.props.errors.length > 0;

  render() {
    const { errors, type, name, label, handleChange, value } = this.props;
    return (
      <div>
        <TextField
          error={this.state.dirty && this.errorsPresent()}
          type={type}
          id={this.fieldId()}
          label={label}
          value={value}
          onChange={handleChange(name)}
          margin='normal'
          onBlur={this.changeDirty}
        />
        {this.state.dirty &&
          this.errorsPresent() && (
            <div className='error-text'>{errors[0]} </div>
          )}
      </div>
    );
  }
}

export default ValidatedInput;
