import React from 'react';
import '../styles/sidebar.css'
import logoImage from "../../assets/img/logo.png";
import backgroundImage from "../../assets/img/background-1c.jpg"


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