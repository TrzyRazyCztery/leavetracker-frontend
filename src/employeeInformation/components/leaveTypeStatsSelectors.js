import React from "react";
import "employeeInformation/styles/employeeInformation.css";
import { card } from "shared/styles/statsCardStyle";
import YearSelector from "employeeInformation/components/yearSelector";
import {
  yearSelectionStyle,
  userSelectionStyle
} from "employeeInformation/styles/styles";
import Card from "material-ui/Card";
import UserSelector from "shared/components/userSelector";

const LeaveTypeStatsSelectors = ({
  yearsList,
  selectedYear,
  users,
  selectedUserId,
  handleChange
}) => (
  <Card style={card}>
    <div className={"employee-information-user-selector"}>
      <UserSelector
        users={users}
        handleUserChange={handleChange("selectedUserId")}
        value={selectedUserId}
        style={userSelectionStyle}
      />
    </div>
    <div className={"employee-information-year-selector"}>
      <YearSelector
        style={yearSelectionStyle}
        selectedYear={selectedYear}
        handleChange={handleChange("selectedYear")}
        yearsList={yearsList}
      />
    </div>
  </Card>
);

export default LeaveTypeStatsSelectors;
