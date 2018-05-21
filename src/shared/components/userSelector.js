import React from "react";
import { MenuItem } from "material-ui/Menu";
import Select from "material-ui/Select";
import {map, compact} from "lodash";

const UserSelector = ({ users, handleUserChange, value, style = {} }) => (
  <Select style={style} value={value} onChange={handleUserChange}>
    {map(users, (user, index) => (
      <MenuItem value={user.id} key={index}>
        {compact([user.name, user.surname]).join(' ')}
      </MenuItem>
    ))}
  </Select>
);

export default UserSelector;
