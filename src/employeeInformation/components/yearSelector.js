import React from "react";
import { yearSelectionStyle } from "employeeInformation/styles/styles";
import { MenuItem } from "material-ui/Menu";
import Select from "material-ui/Select";

const YearSelector = ({ selectedYear, handleChange, yearsList }) => (
  <Select
    style={yearSelectionStyle}
    value={selectedYear}
    onChange={handleChange}
  >
    {yearsList.length === 0 ? (
      <MenuItem value={selectedYear} key={0}>
        {selectedYear}
      </MenuItem>
    ) : (
      yearsList.map((year, index) => (
        <MenuItem value={year} key={index}>
          {year}
        </MenuItem>
      ))
    )}
  </Select>
);

export default YearSelector;
