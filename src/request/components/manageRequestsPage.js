import React from "react";
import { getAuthenticatedUser } from "reducers/authorizationDataReducer";
import {
  getRequests,
  getRequestTypes,
  getRequestStatuses
} from "reducers/requestReducer";
import { getUsers } from "reducers/userReducer";
import { connect } from "react-redux";
import UserSelector from "shared/components/userSelector";
import { loadUsers } from "shared/actions/userActions";
import { loadRequests, loadRequestUtils } from "request/actions/requestActions";
import Button from "material-ui/Button";
import { buttonStyle } from "variables/styles";
import "request/styles/request.css";
import RequestTable from "request/components/requestTable";
import Paper from "material-ui/Paper";
import Authenticated from "shared/components/authenticated";
import CreateRequestForm from "request/components/createRequestForm";

class ManageRequestsPage extends React.Component {
  state = {
    selectedUserId: this.props.authenticatedUser.id,
    creatorIsActive: false
  };
  componentDidMount = () => {
    this.props.loadUsers();
    this.props.loadRequestUtils();
    this.props.loadRequests();
  };

  handleUserChange = event => {
    this.setState({ selectedUserId: event.target.value });
  };
  handleOpenCreator = () => {
    this.setState({ creatorIsActive: true });
  };

  handleFormClose = () => {
    this.setState({ creatorIsActive: false });
  };

  render() {
    const { users, requests, requestTypes, requestStatuses } = this.props;
    const { selectedUserId, creatorIsActive } = this.state;
    return (
      <div className={"request-page"}>
        {!creatorIsActive ? (
          <div>
            <Authenticated requiredPermission={2}>
              <div className="requests-page-user-select">
                <UserSelector
                  users={users}
                  value={selectedUserId}
                  handleUserChange={this.handleUserChange}
                />
              </div>
            </Authenticated>
            <div className="request-page-user-requests">
              <Paper>
                <RequestTable
                  requests={requests}
                  user={users[selectedUserId]}
                  requestTypes={requestTypes}
                  requestStatuses={requestStatuses}
                />
              </Paper>
              <div className="request-page-create-button">
                {this.props.authenticatedUser.id === selectedUserId ? (
                  <Button
                    style={buttonStyle}
                    variant="raised"
                    color="primary"
                    onClick={() => this.handleOpenCreator()}
                  >
                    New Request
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <CreateRequestForm
            requestTypes={requestTypes}
            requestStatuses={requestStatuses}
            handleFormClose={this.handleFormClose}
            userId={this.props.authenticatedUser.id}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch(loadUsers),
  loadRequests: () => dispatch(loadRequests),
  loadRequestUtils: () => dispatch(loadRequestUtils)
});

const mapStateToProps = state => ({
  requests: getRequests(state),
  users: getUsers(state),
  authenticatedUser: getAuthenticatedUser(state),
  requestTypes: getRequestTypes(state),
  requestStatuses: getRequestStatuses(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageRequestsPage);
