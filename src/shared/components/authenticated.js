import { getAuthenticatedUser } from 'reducers/authorizationDataReducer';
import { connect } from 'react-redux';

const Authenticated = ({ children, user, requiredPermission }) => !!user && user.permissions.includes(requiredPermission) ? children : null;

const mapStateToProps = state => ({
  user: getAuthenticatedUser(state)
});

export default connect(mapStateToProps)(Authenticated);
