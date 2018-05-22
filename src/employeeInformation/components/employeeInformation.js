import React from "react";
import "employeeInformation/styles/employeeInformation.css";
import { connect } from "react-redux";
import { loadUsers } from "shared/actions/userActions";
import { loadRequests, loadRequestUtils } from "request/actions/requestActions";
import { getUsers } from "reducers/userReducer";
import { getAuthenticatedUser } from "reducers/authorizationDataReducer";
import {
  getRequests,
  getRequestTypes,
  getRequestStatuses
} from "reducers/requestReducer";
import LoadingPage from "shared/components/loadingPage";
import LeaveTypeStats from "employeeInformation/components/leaveTypeStats";
import ColoredLeaveCalendar from "employeeInformation/components/coloredLeaveCalendar";
import { filter } from "lodash";
import moment from "moment";

class EmployeeInformation extends React.Component {
  state = {
    selectedUserId: this.props.authenticatedUser.id,
    selectedYear: moment().year(),
    loaded: false
  };

  componentDidMount = () => {
    Promise.all([
      this.props.loadUsers(),
      this.props.loadRequests(),
      this.props.loadRequestUtils()
    ]).then(_ => {
      this.setState({ loaded: false });
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { users, requests, requestTypes } = this.props;
    const { selectedUserId, selectedYear, loaded } = this.state;
    const userRequests = filter(
      requests,
      request => request.ownerId === this.state.selectedUserId
    );
    return loaded ? (
      <div className="employee-information">
        <LeaveTypeStats
          users={users}
          userRequests={userRequests}
          selectedUserId={selectedUserId}
          selectedYear={selectedYear}
          handleChange={this.handleChange}
          requestTypes={requestTypes}
        />
        <ColoredLeaveCalendar
          requests={userRequests}
          numberOfMonths={12}
          startMonth={0}
          year={selectedYear}
        />
      </div>
    ) : (
      <LoadingPage loadingText='Loading data'/>
    );
  }
}

const mapStateToProps = state => ({
  users: getUsers(state),
  authenticatedUser: getAuthenticatedUser(state),
  requests: getRequests(state),
  requestTypes: getRequestTypes(state),
  requestStatuses: getRequestStatuses(state)
});

const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch(loadUsers),
  loadRequests: () => dispatch(loadRequests),
  loadRequestUtils: () => dispatch(loadRequestUtils)
});

export default connect(mapStateToProps, mapDispatchToProps)(
  EmployeeInformation
);
