import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from 'material-ui/Table';
import DeskRow from 'desk/components/deskRow';
import _ from 'lodash';

const DeskTable = ({ desks, users }) => (
  <Table className='desks-table'>
    <TableHead>
      <TableRow>
        <TableCell> Desk number </TableCell>
        <TableCell> Owner </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {_.map(desks, (desk, key) => (
        <DeskRow
          desk={desk}
          deskOwner={users[desk.ownerId]}
          key={key}
          users={users}
        />
      ))}
    </TableBody>
  </Table>
);

export default DeskTable;
