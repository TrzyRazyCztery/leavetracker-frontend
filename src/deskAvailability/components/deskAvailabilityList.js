import React from "react";
import Grid from "material-ui/Grid";
import DeskAvailabilityBar from "deskAvailability/components/deskAvailabilityBar";
import { listOfBusinessDaysBetweenDates } from "utils/dates";
import moment from "moment";

const DeskAvailabilityList = props => (
  <Grid container spacing={16}>
    {listOfBusinessDaysBetweenDates(moment(), moment().add(7, "days")).map(
      (day, key) => (
        <Grid item md={12} key={key}>
          <DeskAvailabilityBar day={day} {...props} />
        </Grid>
      )
    )}
  </Grid>
);

export default DeskAvailabilityList;
