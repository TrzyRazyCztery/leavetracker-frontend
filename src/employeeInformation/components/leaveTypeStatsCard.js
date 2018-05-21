import React from "react";
import { leaveTypeCardStyle } from "employeeInformation/styles/styles";
import { listOfBusinessDaysBetweenDates } from "utils/dates";
import { reduce } from "lodash";
import moment from "moment";
import StatsCard from "shared/components/statsCard";

const numberOfDaysInYearForLeaveTypeId = (requests, leaveTypeId, year) =>
  reduce(
    requests,
    (counter, request) =>
      request.requestTypeId === leaveTypeId &&
      request.requestStatusId === 1 &&
      (moment(request.startDate).year() === year ||
        moment(request.endDate).year() === year)
        ? counter +
          listOfBusinessDaysBetweenDates(
            request.startDate,
            request.endDate
          ).reduce(
            (counter, date) => (date.year() === year ? counter + 1 : counter),
            0
          )
        : counter,
    0
  );

const LeaveTypeStatsCard = ({ userRequests, selectedYear, leaveTypeId }) => (
  <StatsCard
    icon={leaveTypeCardStyle[leaveTypeId].icon}
    iconColor={leaveTypeCardStyle[leaveTypeId].iconColor}
    title={leaveTypeCardStyle[leaveTypeId].title}
    statIcon={leaveTypeCardStyle[leaveTypeId].statIcon}
    description={numberOfDaysInYearForLeaveTypeId(
      userRequests,
      leaveTypeId,
      selectedYear
    )}
    statText={selectedYear}
  />
);

export default LeaveTypeStatsCard;
