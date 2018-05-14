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
import moment from "moment";
class RequestRow extends React.Component {
  state = {
    anchorEl: null
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
  handleInfoOpen = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
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
        <TableCell>{requestOwner.name + " " + requestOwner.surname}</TableCell>
        <TableCell>{moment(request.startDate).format("DD/MM/YYYY")}</TableCell>
        <TableCell>{moment(request.endDate).format("DD/MM/YYYY")}</TableCell>
        <TableCell>{request.days}</TableCell>
        <TableCell>{requestType.type}</TableCell>
        <TableCell style={{ color: this.statusColor(requestStatus.status) }}>
          {requestStatus.status}
        </TableCell>
        <TableCell>
          <Button onClick={this.handleInfoOpen}>
            <Icon>info_icon</Icon>
          </Button>
          <Popover
            open={Boolean(this.state.anchorEl)}
            anchorEl={this.state.anchorEl}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <div className="info-popover">
              <h4> Reason </h4>
              <span> {request.info} </span>
            </div>
          </Popover>
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
