import React from "react";
import "react-day-picker/lib/style.css";
import "employeeInformation/styles/coloredLeaveCalendarStyle.css";
import { leaveTypeHighlight } from "employeeInformation/styles/styles";
import DayPicker from "react-day-picker";
import { flatMap, filter, map } from "lodash";
import { formatDate, listOfBusinessDaysBetweenDates } from "utils/dates";

const filterRequests = leaveTypeId => requests =>
  requests.filter(
    request =>
      request.requestTypeId === leaveTypeId && request.requestStatusId === 1
  );

const daysListForRequest = request =>
  map(
    listOfBusinessDaysBetweenDates(request.startDate, request.endDate),
    date => new Date(formatDate(date))
  );

const requestsDaysListForLeaveTypeId = (requests, leaveTypeId) => {
  const requestFilter = filterRequests(leaveTypeId);

  return flatMap(requestFilter(requests), request =>
    daysListForRequest(request)
  );
};
const ColoredLeaveCalendar = ({
  numberOfMonths,
  year,
  startMonth,
  requests
}) => (
  <div>
    <DayPicker
      numberOfMonths={numberOfMonths}
      modifiers={{
        homeOffice: requestsDaysListForLeaveTypeId(requests, 3),
        sick: requestsDaysListForLeaveTypeId(requests, 1),
        other: requestsDaysListForLeaveTypeId(requests, 4),
        vacation: requestsDaysListForLeaveTypeId(requests, 2),
        training: requestsDaysListForLeaveTypeId(requests, 5),
        disabled: { daysOfWeek: [0, 6] }
      }}
      firstDayOfWeek={1}
      month={new Date(year, startMonth)}
    />
  </div>
);

export default ColoredLeaveCalendar;
