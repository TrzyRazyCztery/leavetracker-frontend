import { connect } from "react-redux";
import React from "react";
import { getAuthenticatedUser } from "src/reducers/authorizationDataReducer";
import { logoutUser } from "src/shared/actions/authorizationDataActions";

const userNavbar = ({ user, logout }) => (
  <div>
    {`You are logged as ${user.name} (`}
    <a href="#" onClick={logout}>
      logout
    </a>
    {")"}
  </div>
);

const mapStateToProps = state => ({
  user: getAuthenticatedUser(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser)
});

export default connect(mapStateToProps, mapDispatchToProps)(userNavbar);
