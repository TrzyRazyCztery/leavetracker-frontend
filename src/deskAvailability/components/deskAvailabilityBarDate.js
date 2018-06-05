import React from 'react'
import { formatDate } from "utils/dates";

const DeskAvailabilityBarDate = ({day}) => (
  <div>
    <div className="day-name">{day.format(`dddd`)}</div>
    <div className="day-date">
      {day.format(`${formatDate(day)}`)}
    </div>
  </div>
);
export default DeskAvailabilityBarDate