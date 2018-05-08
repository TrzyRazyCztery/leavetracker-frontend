import React from "react";
import { NavLink } from "react-router-dom";
import { ListItem, ListItemText } from "material-ui";

const SidebarNavigationItem = ({ route , activeRoute}) => {
  const linkStyle = {
    color: "white",
    textAlign: "center",
    fontSize: "14px"
  };
  const activeLinkStyle = { ...linkStyle, "backgroundColor": "rgba(0, 172, 193)" };
  return (
    <NavLink to={route.path}>
      <ListItem button style={activeRoute ? activeLinkStyle : null}>
        <ListItemText
          primary={route.sidebarName}
          disableTypography={true}
          style={linkStyle}
        />
      </ListItem>
    </NavLink>
  );
};

export default SidebarNavigationItem;
