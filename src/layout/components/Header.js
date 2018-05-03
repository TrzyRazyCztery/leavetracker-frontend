import React from "react";
import "src/layout/styles/header.css";
import Button from "material-ui/Button";
import colors from "src/variables/colors";
import { Link } from "react-router-dom";
import Authenticated from "src/shared/components/Authenticated";
import Unauthenticated from "src/shared/components/Unauthenticated";
import UserNavbar from "src/userNavbar/components/userNavbar";

const Header = () => {
  const buttonStyle = {
    backgroundColor: colors["mainColor"],
    textDecoration: "none"
  };
  return (
    <div className="header">
      <div className="header-toolbar">
        <Authenticated>
          <UserNavbar />
        </Authenticated>
        <Unauthenticated>
          <Link to="/sign">
            <Button style={buttonStyle} variant="raised" color="primary">
              Login
            </Button>
          </Link>
        </Unauthenticated>
      </div>
    </div>
  );
};

export default Header;
