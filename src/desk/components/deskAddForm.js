import React from 'react';
import { FormControl } from 'material-ui/Form';
import ValidatedInput from 'shared/components/validatedInput';
import { getErrors } from 'reducers/deskReducer';
import { saveFormErrors, createDesk } from 'desk/actions/deskActions';
import { connect } from 'react-redux';
import DeskOwnerSelect from 'desk/components/deskOwnerSelect';
import { buttonStyle } from 'variables/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import { validateDeskNumber } from 'utils/validator';

class DeskAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deskData: {
        id: '',
        ownerId: 0,
      },
      open: false,
    };
    this.createDesk = this.props.createDesk.bind(this);
  }

  submitAvailable = () => !!this.state.deskData.id;

  validateInput = () => {
    const { deskData } = this.state;
    const errors = validateDeskNumber(deskData.id);
    this.props.saveFormErrors(errors);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submit = () => {
    this.createDesk(this.state.deskData).then(result => {
      if (result) {
        this.setState({
          ...this.state,
          open: false,
          deskData: { id: '', ownerId: 0 },
        });
      }
    });
  };

  handleChange = name => event => {
    const deskData = { ...this.state.deskData, [name]: event.target.value };
    this.setState({ deskData }, this.validateInput);
  };

  render() {
    const { users, errors } = this.props;
    const { deskData } = this.state;

    return (
      <div className="desk-add-form">
        <Button
          style={buttonStyle}
          variant="raised"
          color="primary"
          onClick={this.handleClickOpen}
        >
          New desk
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle id="form-dialog-title">Create new desk</DialogTitle>
          <DialogContent>
            <ValidatedInput
              errors={errors.id}
              type="number"
              name="id"
              label="Desk Number"
              handleChange={this.handleChange}
              value={deskData.id}
            />
            <FormControl>
              <DeskOwnerSelect
                users={users}
                handleChange={this.handleChange}
                name={'ownerId'}
                value={deskData.ownerId}
                label="Owner"
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
                onClick={this.handleClose}
                color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={this.submit}
              color="primary"
              disabled={!this.submitAvailable()}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: getErrors(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDesk: deskData => dispatch(createDesk(deskData)),
    saveFormErrors: errors => {
      dispatch(saveFormErrors(errors));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeskAddForm);
