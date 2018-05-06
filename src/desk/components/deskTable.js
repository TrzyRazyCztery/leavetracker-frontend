import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from 'material-ui/Table';
import DeskRow from 'desk/components/deskRow';
import _ from 'lodash';

const DeskTable = ({ desks, users, showEdit, activeEdit, deskToEdit }) => (
  <Table className="desks-table">
    <TableHead>
      <TableRow>
        <TableCell> Desk number </TableCell>
        <TableCell> Owner </TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
    <TableBody>
      {_.map(desks, (desk, key) => (
        <DeskRow
          desk={desk}
          deskOwner={users.find(user => desk.ownerId === user.id)}
          key={key}
          users={users}
        />
      ))}
    </TableBody>
  </Table>
);

export default DeskTable;
