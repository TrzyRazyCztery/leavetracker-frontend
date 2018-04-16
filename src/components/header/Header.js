import React from 'react';
import '../../styles/header/header.css'
import boardRoutes from '../../routes/boardRoutes';
import Button from 'material-ui/Button'

const headerName = (location) => {
  const route = boardRoutes.find((route) => {
    return route.path === location.pathname
  });
  return (route === undefined) ? "" : route.headerName;
};

const Header = (props) => {
  return (
      <div className="header">
        <div className="header-name">
          {headerName(props.location)}
        </div>
        <div className="header-toolbar">
          <Button variant="raised" color="primary"> Login </Button>
        </div>
      </div>
  )
};

export default Header;