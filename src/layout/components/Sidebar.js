import React from 'react';
import "src/layout/styles/sidebar.css"
import logoImage from "src/assets/img/logo.png";
import backgroundImage from "src/assets/img/background-1c.jpg"


const Sidebar = () => {
  return(
      <div>
        <div className="sidebar-background-image" style={{backgroundImage: "url(" + backgroundImage + ")",}}>
          <div className={"logo"}>
                <img src={logoImage} alt="logo" className={'logo-image'} />
          </div>
        </div>
      </div>
  )
};
export default Sidebar;