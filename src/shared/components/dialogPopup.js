import React, { Component } from "react";
import Button from 'material-ui/Button'
import Dialog, {DialogTitle,DialogContent} from 'material-ui/Dialog'


class DialogPopup extends Component {
  state = { activeDialog: false };

  handleInfoOpen = () => {
    this.setState({ activeDialog: true });
  };

  handleInfoClose = () => {
    this.setState({ activeDialog: false });
  };

  render() {
    const {children, title, buttonStyle} = this.props;
    return (
      <div className="dialog-popup">
        <Button style={buttonStyle} onClick={this.handleInfoOpen}>Available desks</Button>
        <Dialog open={this.state.activeDialog} onClose={this.handleInfoClose}>
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogContent>
            {children}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default DialogPopup
