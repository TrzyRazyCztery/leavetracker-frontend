import React from 'react'
import { APPLICATION_DATE_FORMAT } from "utils/dates";

const DeskAvailabilityBarDate = ({day}) => (
  <div>
    <div className="day-name">{day.format(`dddd`)}</div>
    <div className="day-date">
      {day.format(`${APPLICATION_DATE_FORMAT}`)}
    </div>
  </div>
);
export default DeskAvailabilityBarDate