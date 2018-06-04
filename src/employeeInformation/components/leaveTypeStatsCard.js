import React from "react";
import { leaveTypeCardStyle } from "employeeInformation/styles/styles";
import { listOfBusinessDaysBetweenDates } from "utils/dates";
import StatsCard from "shared/components/statsCard";
import {numberOfDaysInYearForLeaveTypeId} from "utils/requests";


const LeaveTypeStatsCard = ({ userRequests, selectedYear, leaveTypeId }) => {
  const cardStyle = leaveTypeCardStyle[leaveTypeId];
  return (
    <StatsCard
      icon={cardStyle.icon}
      iconColor={cardStyle.iconColor}
      title={cardStyle.title}
      statIcon={cardStyle.statIcon}
      description={numberOfDaysInYearForLeaveTypeId(
        userRequests,
        leaveTypeId,
        selectedYear
      )}
      statText={selectedYear}
    />
  );
};

export default LeaveTypeStatsCard;
