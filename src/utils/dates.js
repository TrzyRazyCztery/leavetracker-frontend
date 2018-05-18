import Moment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(Moment);

export const APPLICATION_DATE_FORMAT = "DD/MM/YYYY";

const listOfDaysBetweenDates = (startDate, endDate) =>
  Array.from(moment.range(startDate, endDate).by("day"));

export const workDaysBetween = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return 0;
  }
  return listOfDaysBetweenDates(startDate, endDate).reduce((result, day) => {
    return day.day() === 0 || day.day() === 6 ? result : result + 1;
  }, 0);
};

export const formatDate = date => moment(date).format(APPLICATION_DATE_FORMAT);
