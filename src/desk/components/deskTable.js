import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from 'material-ui/Table';
import DeskRow from 'desk/components/deskRow';
import {map, find} from 'lodash';

const DeskTable = ({ desks, users }) => (
  <Table className='desks-table'>
    <TableHead>
      <TableRow>
        <TableCell> Desk number </TableCell>
        <TableCell> Owner </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {map(desks, (desk, key) => (
        <DeskRow
          desk={desk}
          deskOwner={find(users,user => desk.ownerId === user.id)}
          key={key}
          users={users}
        />
      ))}
    </TableBody>
  </Table>
);

export default DeskTable;
