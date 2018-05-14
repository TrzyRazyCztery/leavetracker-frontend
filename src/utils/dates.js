import moment from 'moment'

const listOfDaysBetweenDates = (startDate, endDate) => {
  let dates = [];

  let currDate = moment(startDate).startOf('day');
  let lastDate = moment(endDate).startOf('day');

  while(currDate.diff(lastDate) <= 0) {
    dates.push(moment(currDate.toDate()));
    currDate = currDate.add(1, 'days');
  }


  return dates;
};

export const workDaysBetween = (startDate, endDate) => {
  if(!startDate || !endDate){return 0}
  const daysList = listOfDaysBetweenDates(startDate, endDate);
  const workDays = daysList.reduce((result, day) => {
    return (day.day() === 0 || day.day() === 6)
      ? result
      : result + 1
  },0);
  return workDays
};