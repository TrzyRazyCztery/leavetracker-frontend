import React from "react";
import List, { ListItem, ListItemText } from "material-ui/List";
import { compact, map, find } from "lodash";
const AvailableDesksList = ({ requests, desks, users }) => (
  <List>
    {map(
      requests,
      (request, index) =>
        !!find(desks, desk => desk.ownerId === users[request.ownerId].id) ? (
          <ListItem key={index}>
            <ListItemText
              primary={compact([
                users[request.ownerId].name,
                users[request.ownerId].surname
              ]).join(" ")}
              secondary={`Desk number: ${
                find(desks, desk => desk.ownerId === users[request.ownerId].id)
                  .id
              }`}
            />
          </ListItem>
        ) : null
    )}
  </List>
);

export default AvailableDesksList;
