import { getAuthenticatedUser } from 'reducers/authorizationDataReducer';
import { connect } from 'react-redux';

const Unauthenticated = ({ children, user }) => (!!user ? null : children);

const mapStateToProps = state => ({
  user: getAuthenticatedUser(state)
});

export default connect(mapStateToProps)(Unauthenticated);
