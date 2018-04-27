import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

class ValidatedInput extends Component {

  state = {
    dirty: false
  };

  changeDirty = () => {
    this.setState({
      dirty: true
    })
  };

  render(){
    const {errors, type, name, label, handleChange, hasErrors, value} = this.props;
    return(
      <div>
        <TextField
          error={this.state.dirty && hasErrors}
          type={type}
          id={"reg" + name}
          label= {label}
          value={value}
          onChange={handleChange(name)}
          margin="normal"
          onBlur={this.changeDirty}
        />
        {this.state.dirty && hasErrors && <div className="error-text">{errors[0]} </div>}
      </div>
    )
  }
}

export default ValidatedInput;
