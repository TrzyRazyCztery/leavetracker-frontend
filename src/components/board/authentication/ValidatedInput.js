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
    const {error, type, name, label, handleChange, value} = this.props;
    return(
      <div>
        <TextField
          error={this.state.dirty && Boolean(error)}
          type={type}
          id={"reg" + name}
          label= {label}
          value={value}
          onChange={handleChange(name)}
          margin="normal"
          onBlur={this.changeDirty}
        />
        {this.state.dirty && Boolean(error) && <div className="error-text">{error} </div>}
      </div>
    )
  }
}

export default ValidatedInput;