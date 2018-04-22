import React from 'react';
import '../../styles/header/header.css'
import Button from 'material-ui/Button'
import colors from '../../variables/colors/colors';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
      <div className="header">
        <div className="header-toolbar">
          <Link to='/authentication'><Button style={{backgroundColor: colors['mainColor'], textDecoration: 'none'}} variant="raised" color="primary"> Login </Button></Link>
        </div>
      </div>
  )
};

export default Header;