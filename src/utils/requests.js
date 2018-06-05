import { flatMap, map, reduce, filter, find } from "lodash";
import {
  formatDate,
  listOfBusinessDaysBetweenDates,
  APPLICATION_DATE_FORMAT
} from "utils/dates";

//There is a lot of room for improvement in this module,
//It should be written in a more generic way, filters should be composable

const filterRequestsByLeaveTypeId = leaveTypeId => requests =>
  filter(
    requests,
    request =>
      request.requestTypeId === leaveTypeId && request.requestStatusId === 1
  );
const filterRequestsByRequestStatusId = requestStatusId => requests =>
  filter(requests, request => request.requestStatusId === requestStatusId);

const filterRequestsByDate = (date, requests) =>
  filter(
    requests,
    request =>
      !!find(
        listOfBusinessDaysBetweenDates(request.startDate, request.endDate),
        day =>
          day.format(APPLICATION_DATE_FORMAT) ===
          date.format(APPLICATION_DATE_FORMAT)
      )
  );
const filterBusinessDaysByYear = year => businessDays =>
  businessDays.filter(day => day.year() === year);

const daysListForRequestInJSDateFormat = request =>
  map(
    listOfBusinessDaysBetweenDates(request.startDate, request.endDate),
    date => new Date(formatDate(date))
  );

export const numberOfDaysInYearForLeaveTypeId = (
  requests,
  leaveTypeId,
  year
) => {
  const leaveTypeIdFilter = filterRequestsByLeaveTypeId(leaveTypeId);
  const requestStatusFilter = filterRequestsByRequestStatusId(1);
  const yearFilter = filterBusinessDaysByYear(year);
  return reduce(
    requestStatusFilter(leaveTypeIdFilter(requests)),
    (counter, request) =>
      counter +
      yearFilter(
        listOfBusinessDaysBetweenDates(request.startDate, request.endDate)
      ).length,
    0
  );
};

export const requestsDaysListForLeaveTypeId = (requests, leaveTypeId) => {
  const leaveTypeIdFilter = filterRequestsByLeaveTypeId(leaveTypeId);
  const requestStatusFilter = filterRequestsByRequestStatusId(1);
  return flatMap(requestStatusFilter(leaveTypeIdFilter(requests)), request =>
    daysListForRequestInJSDateFormat(request)
  );
};

export const requestsListForDate = (requests, date) => {
  const requestStatusFilter = filterRequestsByRequestStatusId(1);
  return requestStatusFilter(filterRequestsByDate(date, requests));
};
