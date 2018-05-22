import React from "react";
import { leaveTypeCardStyle } from "employeeInformation/styles/styles";
import { listOfBusinessDaysBetweenDates } from "utils/dates";
import { reduce } from "lodash";
import StatsCard from "shared/components/statsCard";

const filterRequests = leaveTypeId => requests =>
  requests.filter(
    request =>
      request.requestTypeId === leaveTypeId && request.requestStatusId === 1
  );

const filterBusinessDaysByYear = year => businessDays =>
  businessDays.filter(day => day.year() === year);

const numberOfDaysInYearForLeaveTypeId = (requests, leaveTypeId, year) => {
  const requestFilter = filterRequests(leaveTypeId);
  const yearFilter = filterBusinessDaysByYear(year);
  return reduce(
    requestFilter(requests),
    (counter, request) =>
      counter +
      yearFilter(
        listOfBusinessDaysBetweenDates(request.startDate, request.endDate)
      ).length,
    0
  );
};

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
