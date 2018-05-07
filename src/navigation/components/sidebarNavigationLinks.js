import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemText } from "material-ui";
import { boardRoutes } from "routes/boardRoutes";
import "navigation/styles/sidebarNavigationLinks.css";

const SidebarNavigationLinks = props => {

  const linkStyle = { color: "white", textAlign: "center", fontSize: "14px" };
  const activeLinkStyle = { backgroundColor: "rgba(0, 172, 193)" };

  const activeRoute = routeName => {
    return window.location.pathname.indexOf(routeName) > -1;
  };
  return (
    <List className="sidebar-navigation-list">
      {boardRoutes.map((route, key) => {
        return (
          <NavLink to={route.path} key={key}>
            <ListItem
              button
              style={activeRoute(route.path) ? activeLinkStyle : null}
            >
              <ListItemText
                primary={route.sidebarName}
                disableTypography={true}
                style={linkStyle}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
};

export default SidebarNavigationLinks;
