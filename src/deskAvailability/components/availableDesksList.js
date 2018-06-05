import React from "react";
import List, { ListItem, ListItemText } from "material-ui/List";
import { map, find, filter } from "lodash";
import { composeName } from "utils/strings";

const findDeskForUserId = desks => userId =>
  find(desks, desk => desk.ownerId === userId);

const filterRequestsForUsersWithDesks = desks => requests =>
  filter(requests, request => !!findDeskForUserId(desks, request.ownerId));

const mapRequestsToDeskList = (requests, desks, users) => {
  const requestsFilter = filterRequestsForUsersWithDesks(desks);
  const deskFinder = findDeskForUserId(desks);
  return map(requestsFilter(requests), (request, index) =>
    mapRequestToDeskListItem(
      index,
      users[request.ownerId],
      deskFinder(request.ownerId)
    )
  );
};

const mapRequestToDeskListItem = (index, user, desk) => (
  <ListItem key={index}>
    <ListItemText
      primary={composeName(user.name, user.surname)}
      secondary={`Desk number: ${desk.id}`}
    />
  </ListItem>
);

const AvailableDesksList = ({ requests, desks, users }) => (
  <List>{mapRequestsToDeskList(requests, desks, users)}</List>
);

export default AvailableDesksList;
