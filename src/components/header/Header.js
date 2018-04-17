import React from 'react';
import '../../styles/header/header.css'
import boardRoutes from '../../routes/boardRoutes';
import Button from 'material-ui/Button'
import colors from '../../variables/colors/colors';

const headerName = (location) => {
  const route = boardRoutes.find((route) => {
    return route.path === location.pathname
  });
  return (route === undefined) ? "" : route.headerName;
};

const Header = (props) => {
  return (
      <div className="header">
        {/*<div className="header-name">*/}
          {/*{headerName(props.location)}*/}
        {/*</div>*/}
        <div className="header-toolbar">
          <Button style={{backgroundColor: colors['mainColor']}} variant="raised" color="primary"> Login </Button>
        </div>
      </div>
  )
};

export default Header;