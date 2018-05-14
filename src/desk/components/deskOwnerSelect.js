import React from 'react';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import _ from 'lodash'
const DeskOwnerSelect = ({ name, users, handleChange, value }) => (
  <Select value={value} onChange={handleChange(name)}>
    <MenuItem value={0}>Unassigned</MenuItem>
    {_.map(users,(user, index) => (
      <MenuItem value={user.id} key={index}>
        {user.name + ' ' + user.surname}
      </MenuItem>
    ))}
  </Select>
);

export default DeskOwnerSelect;
