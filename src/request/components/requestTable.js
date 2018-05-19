import React from "react";
import Table, {
  TableBody,
  TableCell,
  TableRow,
  TableHead
} from "material-ui/Table";
import RequestRow from "request/components/requestRow";
import { find, map } from "lodash";

const RequestTable = ({ requests, user, requestTypes, requestStatuses }) => (
  <Table className="request-table">
    <TableHead>
      <TableRow>
        <TableCell> Employee Name </TableCell>
        <TableCell> Start Date </TableCell>
        <TableCell> End Date </TableCell>
        <TableCell> Days </TableCell>
        <TableCell> Leave Type </TableCell>
        <TableCell> Status </TableCell>
        <TableCell> Info </TableCell>
        <TableCell> Actions </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {map(
        requests,
        (request, key) =>
          request.ownerId === user.id ? (
            <RequestRow
              request={request}
              requestOwner={user}
              key={key}
              requestType={find(
                requestTypes,
                type => type.id === request.requestTypeId
              )}
              requestStatus={find(
                requestStatuses,
                status => status.id === request.requestStatusId
              )}
            />
          ) : null
      )}
    </TableBody>
  </Table>
);

export default RequestTable;
