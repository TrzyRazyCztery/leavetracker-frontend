import React, { Component } from "react";
import Button from "material-ui/Button";
import { requestsListForDate } from "utils/requests";
import { compact, reduce } from "lodash";
import {
  summaryCircleStyles,
  deskAvailabilityBarStyles
} from "deskAvailability/styles/styles";
import DialogPopup from "shared/components/dialogPopup";
import AvailableDesksList from "deskAvailability/components/availableDesksList";
import DeskAvailabilityBarDate from "deskAvailability/components/deskAvailabilityBarDate";

class DeskAvailabilityBar extends Component {
  render() {
    const { day, users, requests, desks } = this.props;
    const requestsForDay = requestsListForDate(requests, day);
    const numberOfUsers = reduce(users, counter => counter + 1, 0);
    const numberOfDesks = reduce(desks, counter => counter + 1, 0);
    const deskAvailability =
      numberOfUsers - requestsForDay.length - numberOfDesks;
    const statColor = deskAvailability > 0 ? "red" : "green";
    return (
      <div className="desk-availability-item">
        <div style={deskAvailabilityBarStyles[statColor]}>
          <Button variant="raised" style={summaryCircleStyles[statColor]}>
            {Math.abs(deskAvailability)}
          </Button>
          <div className="desk-availability-bar-date">
            <DeskAvailabilityBarDate day={day} />
          </div>
          <div className="show-desk-button">
            <DialogPopup title="Available Desks">
              <AvailableDesksList
                requests={requestsForDay}
                users={users}
                desks={desks}
              />
            </DialogPopup>
          </div>
        </div>
      </div>
    );
  }
}
export default DeskAvailabilityBar;
