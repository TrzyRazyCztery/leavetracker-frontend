import React from "react";
import { TableRow, TableCell } from "material-ui/Table";
import Authenticated from "shared/components/authenticated";
import {
  approveRequest,
  declineRequest,
  removeRequest
} from "request/actions/requestActions";
import { connect } from "react-redux";
import Button from "material-ui/Button";
import Icon from "material-ui/Icon";
import Popover from "material-ui/Popover";
import {formatDate} from "utils/dates";
import Dialog, {DialogTitle,DialogContentText,DialogContent} from 'material-ui/Dialog'
import {compact} from 'lodash'

class RequestRow extends React.Component {
  state = {
    infoOpen: false
  };

  statusColor = status => {
    switch (status) {
      case "Pending":
        return "orange";
      case "Approved":
        return "green";
      case "Declined":
        return "red";
    }
  };
  handleInfoOpen = () => {
    this.setState({ infoOpen: true });
  };

  handleInfoClose = () => {
    this.setState({ infoOpen: false });
  };

  render() {
    const {
      approveRequest,
      declineRequest,
      removeRequest,
      requestOwner,
      request,
      requestType,
      requestStatus
    } = this.props;
    return (
      <TableRow>
        <TableCell>{compact([requestOwner.name, requestOwner.surname]).join(' ')}</TableCell>
        <TableCell>{formatDate(request.startDate)}</TableCell>
        <TableCell>{formatDate(request.endDate)}</TableCell>
        <TableCell>{request.days}</TableCell>
        <TableCell>{requestType.type}</TableCell>
        <TableCell style={{ color: this.statusColor(requestStatus.status) }}>
          {requestStatus.status}
        </TableCell>
        <TableCell>
          <Button onClick={this.handleInfoOpen}>
            <Icon>info_icon</Icon>
          </Button>
          <Dialog
            open={this.state.infoOpen}
            onClose={this.handleClose}
          >
            <DialogTitle id="alert-dialog-slide-title">
              { compact([requestOwner.name, requestOwner.surname]).join(' ') + ' ' +
              compact([formatDate(request.startDate), formatDate(request.endDate)]).join(' - ') + ' ' +
              requestType.type }
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                {request.info}
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </TableCell>
        <TableCell>
          {requestStatus.status === "Pending" ? (
            <div className="request-page-row-buttons">
              <Authenticated requiredPermission={2}>
                <Button onClick={() => approveRequest(request.id)}>
                  Approve
                </Button>
                <Button onClick={() => declineRequest(request.id)}>
                  Decline
                </Button>
              </Authenticated>
              <Button onClick={() => removeRequest(request.id)}>
                <Icon color="error">delete_circle</Icon>
              </Button>
            </div>
          ) : null}
        </TableCell>
      </TableRow>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  approveRequest: requestId => dispatch(approveRequest(requestId)),
  declineRequest: requestId => dispatch(declineRequest(requestId)),
  removeRequest: requestId => dispatch(removeRequest(requestId))
});

export default connect(null, mapDispatchToProps)(RequestRow);
