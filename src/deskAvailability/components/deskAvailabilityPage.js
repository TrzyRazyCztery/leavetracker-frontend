import React, { Component } from "react";
import DeskAvailabilityList from "deskAvailability/components/deskAvailabilityList";
import "deskAvailability/styles/deskAvailability.css";
import LoadingPage from "shared/components/loadingPage";
import { connect } from "react-redux";
import { getRequests } from "reducers/requestReducer";
import { getDesks } from "reducers/deskReducer";
import { loadRequests } from "request/actions/requestActions";
import { loadDesks } from "desk/actions/deskActions";
import { loadUsers } from "shared/actions/userActions";
import { getUsers } from "reducers/userReducer";

class DeskAvailabilityPage extends Component {
  state = {
    loaded: false
  };
  componentDidMount = () => {
    Promise.all([
      this.props.loadRequests(),
      this.props.loadDesks(),
      this.props.loadUsers()
    ]).then(_ => {
      this.setState({ loaded: true });
    });
  };
  render() {
    const { requests, desks, users } = this.props;
    return this.state.loaded ? (
      <DeskAvailabilityList users={users} desks={desks} requests={requests} />
    ) : (
      <LoadingPage loadingText="Loading data" />
    );
  }
}
const mapStateToProps = state => ({
  desks: getDesks(state),
  requests: getRequests(state),
  users: getUsers(state)
});

const mapDispatchToProps = dispatch => ({
  loadDesks: () => dispatch(loadDesks),
  loadRequests: () => dispatch(loadRequests),
  loadUsers: () => dispatch(loadUsers)
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DeskAvailabilityPage
);
