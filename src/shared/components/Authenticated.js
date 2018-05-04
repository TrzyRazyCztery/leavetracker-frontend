import React from "react";
import { getAuthenticatedUser } from "reducers/authorizationDataReducer";
import { connect } from "react-redux";

const Authenticated = ({ children, user }) => (!!user ? children : null);

const mapStateToProps = state => ({
  user: getAuthenticatedUser(state)
});

export default connect(mapStateToProps)(Authenticated);
