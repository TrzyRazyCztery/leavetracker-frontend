import React from "react";
import Grid from "material-ui/Grid";
import {
  AccountCircle,
  DateRange,
  DirectionsRun
} from "@material-ui/icons/index";
import LeaveTypeStatsSelectors from "employeeInformation/components/leaveTypeStatsSelectors";
import LeaveTypeStatsCard from "employeeInformation/components/leaveTypeStatsCard";
import StatsCard from "shared/components/statsCard";
import { flatten, map, reduce } from "lodash";
import moment from "moment/moment";

const leaveTypeStats = ({
  userRequests,
  users,
  selectedYear,
  selectedUserId,
  handleChange,
  requestTypes
}) => (
  <Grid container spacing={24}>
    <Grid item md={1}>
      {" "}
    </Grid>
    <Grid item md={2}>
      <LeaveTypeStatsSelectors
        yearsList={[
          ...new Set(
            flatten(
              userRequests.map(request => [
                moment(request.startDate).year(),
                moment(request.endDate).year()
              ])
            )
          )
        ]}
        selectedYear={selectedYear}
        users={users}
        selectedUserId={selectedUserId}
        handleChange={handleChange}
      />
    </Grid>
    <Grid item md={2}>
      <StatsCard
        icon={AccountCircle}
        iconColor="blue"
        title="Working Days"
        description="260"
        statIcon={DateRange}
        statText={selectedYear}
      />
    </Grid>
    <Grid item md={2}>
      <StatsCard
        icon={DirectionsRun}
        iconColor="blue"
        title="Days on Leave"
        description={reduce(
          userRequests,
          (counter, request) =>
            request.requestTypeId !== 3 ? counter + request.days : counter,
          0
        )}
        statIcon={DateRange}
        statText={selectedYear}
      />
    </Grid>
    <Grid item md={5}>
      {" "}
    </Grid>
    <Grid item md={1}>
      {" "}
    </Grid>
    {map(requestTypes, (requestType, index) => (
      <Grid item md={2} key={index}>
        <LeaveTypeStatsCard
          userRequests={userRequests}
          selectedYear={selectedYear}
          leaveTypeId={requestType.id}
        />
      </Grid>
    ))}
    <Grid item md={1}>
      {" "}
    </Grid>
  </Grid>
);

export default leaveTypeStats;
