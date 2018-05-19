import React from 'react';
import 'layout/styles/sidebar.css'
import logoImage from 'assets/img/logo.png';
import backgroundImage from 'assets/img/background-1c.jpg'
import SidebarNavigationLinks from 'navigation/components/sidebarNavigationList'

const Sidebar = () => {
  return(
      <div>
        <div className='sidebar-background-image' style={{backgroundImage: 'url(' + backgroundImage + ')',}}>
          <div className={'logo'}>
                <img src={logoImage} alt='logo' className={'logo-image'} />
          </div>
          <SidebarNavigationLinks/>
        </div>
      </div>
  )
};
export default Sidebar;