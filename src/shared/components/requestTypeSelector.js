import React from 'react';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { map } from 'lodash'

const RequestTypeSelector = ({ requestTypes, handleRequestTypeChange, value }) => (
  <Select value={value} onChange={handleRequestTypeChange}>
    {map(requestTypes, (requestType, index) => (
      <MenuItem value={requestType.id} key={index}>
        {requestType.type}
      </MenuItem>
    ))}
  </Select>
);

export default RequestTypeSelector;
