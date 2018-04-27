import React from "react";
import "../styles/header.css";
import Button from "material-ui/Button";
import colors from "../../variables/colors";
import { Link } from "react-router-dom";

const Header = () => {
  const buttonStyle = {
    backgroundColor: colors["mainColor"],
    textDecoration: "none"
  };
  return (
    <div className="header">
      <div className="header-toolbar">
        <Link to="/authentication">
          <Button style={buttonStyle} variant="raised" color="primary">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
