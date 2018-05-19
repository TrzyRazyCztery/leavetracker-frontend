import React from "react";
import DateRangePicker from "shared/components/dateRangePicker";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import { getErrors } from "reducers/requestReducer";
import { createRequest, saveFormErrors } from "request/actions/requestActions";
import { connect } from "react-redux";
import RequestTypeSelector from "shared/components/requestTypeSelector";
import moment from "moment";
import { workDaysBetween } from "utils/dates";
import { buttonStyle } from "variables/styles";
import Button from "material-ui/Button";
import {formatDate} from "utils/dates";

const initialState = {
  requestData: {
    startDate: moment(),
    endDate: moment(),
    days: 1,
    requestTypeId: 3,
    info: ""
  }
};

class CreateRequestForm extends React.Component {
  state = initialState;

  handleDateRangeChange = (startDate, endDate) => {
    this.setState({
      requestData: {
        ...this.state.requestData,
        startDate: moment(startDate),
        endDate: moment(endDate),
        days: workDaysBetween(startDate, endDate)
      }
    });
  };

  handleChange = name => event => {
    this.setState({
      requestData: {
        ...this.state.requestData,
        [name]: event.target.value
      }
    });
  };

  closeForm = () => {
    this.props.handleFormClose();
  };

  submit = () => {
    this.props
      .createRequest(this.props.userId, this.state.requestData)
      .then(result => (result ? this.closeForm() : null));
  };

  render() {
    const { errors, requestStatuses, requestTypes } = this.props;
    const { requestData } = this.state;
    return (
      <div className="request-creator">
        <Paper>
          <div className="request-creator-form">
            <div className={"request-creator-fields"}>
              <form>
                <RequestTypeSelector
                  requestStatuses={requestStatuses}
                  requestTypes={requestTypes}
                  handleRequestTypeChange={this.handleChange("requestTypeId")}
                  value={
                    !!requestData.requestTypeId ? requestData.requestTypeId : 1
                  }
                />
                <TextField
                  disabled
                  error={errors.startDate}
                  id={"request-creator-startdate"}
                  label="Start Date"
                  value={formatDate(requestData.startDate)}
                  margin="normal"
                />
                <TextField
                  disabled
                  error={errors.endDate}
                  id={"request-creator-enddate"}
                  label="End Date"
                  value={formatDate(requestData.endDate)}
                  margin="normal"
                />
                <TextField
                  disabled
                  error={errors.days}
                  id={"request-creator-days"}
                  label="Days"
                  value={requestData.days}
                  margin="normal"
                />
                <TextField
                  id="request-information"
                  label="Additional Information"
                  multiline
                  rowsMax="5"
                  value={requestData.info}
                  onChange={this.handleChange("info")}
                  margin="normal"
                />
              </form>
            </div>
            <div className="request-creator-form-buttons">
              <Button
                style={buttonStyle}
                onClick={this.submit}
                variant="raised"
                color="primary"
              >
                Create
              </Button>
              <Button
                style={buttonStyle}
                onClick={this.closeForm}
                variant="raised"
                color="primary"
              >
                Cancel
              </Button>
            </div>
          </div>
          <div className="request-creator-date-picker">
            <DateRangePicker
              numberOfMonths={2}
              handleDateRangeChange={this.handleDateRangeChange}
            />
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: getErrors(state)
});
const mapDispatchToProps = dispatch => ({
  createRequest: (userId, requestData) =>
    dispatch(createRequest(userId, requestData)),
  saveFormErrors: errors => dispatch(saveFormErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRequestForm);
