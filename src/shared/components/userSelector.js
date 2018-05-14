import React from 'react';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import _ from 'lodash'

const UserSelector = ({ users, handleUserChange, value }) => (
  <Select value={value} onChange={handleUserChange}>
    {_.map(users, (user, index) => (
      <MenuItem value={user.id} key={index}>
        {user.name + ' ' + user.surname}
      </MenuItem>
    ))}
  </Select>
);

export default UserSelector;
