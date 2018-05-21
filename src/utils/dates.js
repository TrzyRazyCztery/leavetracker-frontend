import Moment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(Moment);

export const APPLICATION_DATE_FORMAT = "YYYY-MM-DD";
export const BUSINESS_DAYS = [1, 2, 3, 4, 5];

const listOfDaysBetweenDates = (startDate, endDate) =>
  !startDate || !endDate
    ? []
    : Array.from(moment.range(startDate, endDate).by("day"));

export const numberOfBusinessDaysBetweenDates = (startDate, endDate) =>
  listOfBusinessDaysBetweenDates(startDate, endDate).length;

export const listOfBusinessDaysBetweenDates = (startDate, endDate) =>
  listOfDaysBetweenDates(startDate, endDate).filter(day =>
     BUSINESS_DAYS.includes(day.day())
  );

export const formatDate = date => moment(date).format(APPLICATION_DATE_FORMAT);
