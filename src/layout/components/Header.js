import React from "react";
import "layout/styles/header.css";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";
import Authenticated from "shared/components/authenticated";
import Unauthenticated from "shared/components/unauthenticated";
import UserNavbar from "userNavbar/components/userNavbar";
import {buttonStyle} from"variables/styles"

const Header = () => {
  return (
    <div className="header">
      <div className="header-toolbar">
        <Authenticated>
          <UserNavbar />
        </Authenticated>
        <Unauthenticated>
          <Link to="/sign">
            <Button style={buttonStyle} variant="raised" color="primary">
              LogIn
            </Button>
          </Link>
        </Unauthenticated>
      </div>
    </div>
  );
};

export default Header;
