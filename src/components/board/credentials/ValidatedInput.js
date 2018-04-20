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
    const a = Boolean(this.props.inputValidator(this.props.value));
    console.log(a)
    return a;
  };


  render(){
    const {name, label, handleChange, value} = this.props;
    return(
      <div>
        <TextField
          error={this.validateInput()}
          id={"reg" + name}
          label= {label}
          value={value}
          onChange={handleChange(name)}
          margin="normal"
          onBlur={this.changeDirty}
        />
        {Boolean(this.validateInput) && <div className="error-text">{this.validateInput()} </div>}
      </div>
    )
  }

}

export default ValidatedInput;