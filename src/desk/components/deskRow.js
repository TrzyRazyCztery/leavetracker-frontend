import React from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import DeskOwnerSelect from 'desk/components/deskOwnerSelect';
import { updateDeskOwner, removeDesk } from 'desk/actions/deskActions';
import { connect } from 'react-redux';
import Authenticated from 'shared/components/authenticated'
class DeskRow extends React.Component {
  state = {
    activeEdit: false,
    newOwnerId: 0,
  };

  handleOwnerChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  changeEditVisibility = () => {
    this.setState({ activeEdit: !this.state.activeEdit });
  };

  saveUpdateOwner = () => {
    this.props.updateDeskOwner(this.props.desk.id, this.state.newOwnerId);
    this.setState({ activeEdit: false, newOrderId: 0 });
  };

  render() {
    const { desk, deskOwner, users, removeDesk } = this.props;
    const { activeEdit } = this.state;
    return (
      <TableRow>
        <TableCell>{desk.id}</TableCell>
        <TableCell>
          <div className={'cell-owner-select'}>
          {activeEdit ? (
            <DeskOwnerSelect
              users={users}
              handleChange={this.handleOwnerChange}
              value={!!this.state.newOwnerId ? this.state.newOwnerId : deskOwner.id}
              name='newOwnerId'
            />
          ) : !!deskOwner ? (
            deskOwner.name + ' ' + deskOwner.surname
          ) : (
            'Unassigned'
          )}
          </div>

          <Authenticated requiredPermission={2}>
            <div className="cell-manage-buttons">
              {activeEdit ? (
                <Button onClick={() => this.saveUpdateOwner()}>
                  <Icon>done_icon</Icon>
                </Button>
              ) : (
                <Button onClick={() => this.changeEditVisibility()}>
                  <Icon>edit_circle</Icon>
                </Button>
              )}
              <Button onClick={() => removeDesk(desk.id)}>
                <Icon color='error'>delete_circle</Icon>
              </Button>
            </div>
          </Authenticated>

        </TableCell>

      </TableRow>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateDeskOwner: (deskId, newOwnerId) =>
    dispatch(updateDeskOwner(deskId, newOwnerId)),
  removeDesk: deskId => dispatch(removeDesk(deskId)),
});

export default connect(null, mapDispatchToProps)(DeskRow);
