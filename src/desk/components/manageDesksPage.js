import React from 'react';
import { connect } from 'react-redux';
import { loadDesks } from 'desk/actions/deskActions';
import { loadUsers } from 'shared/actions/userActions';
import { getDesks } from 'reducers/deskReducer';
import { getUsers } from 'reducers/userReducer';
import DeskTable from 'desk/components/deskTable';
import 'desk/styles/desk.css';
import Paper from 'material-ui/Paper';
import DeskAddForm from 'desk/components/deskAddForm';

class ManageDesksPage extends React.Component {
  componentDidMount = () => {
    this.props.loadDesks();
    this.props.loadUsers();
  };

  showEdit = deskId => {
    this.setState({ activeEdit: true, deskToEdit: deskId });
  };

  render() {
    const { desks, users } = this.props;
    return (
      <div className="desk-table">
        <Paper>
          <DeskTable desks={desks} users={users} />
          <DeskAddForm users={users} />
          <div className="desk-table-clear"> </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  desks: getDesks(state),
  users: getUsers(state),
});

const mapDispatchToProps = dispatch => ({
  loadDesks: () => dispatch(loadDesks),
  loadUsers: () => dispatch(loadUsers),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageDesksPage);
