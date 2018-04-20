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

  validateInput = () => {
    return this.props.inputValidator(this.props.name);
  };


  render(){
    const {name, label, handleChange, value} = this.props;
    return(
      <div>
        <TextField
          error={this.state.dirty && this.validateInput()}
          id={"reg" + name}
          label= {label}
          value={value}
          onChange={handleChange(name)}
          margin="normal"
          onBlur={this.changeDirty}
        />
        {this.state.dirty && this.validateInput() && <div className="error-text">{this.validateInput()} </div>}
      </div>
    )
  }

}

export default ValidatedInput;