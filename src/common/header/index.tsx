// create dashboard page component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import logowhite from "../../assets/images/logo-white.svg";
import logoblack from "../../assets/images/logo-black.svg";


const Header = () => {
  
  // Home burger menu 
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header className='header-sec'>
      <div className="container">
          <div className="custom-row">
            <div className="logo-block-left">
              <Link to="#"><img src={logowhite} alt="logo" width="322" height="77" /></Link>
            </div>
            <div className='menu-block-right'>
              <div className='home-burger-menu'>
                  <div className={isActive ? 'is-active' : '' } onClick={toggleClass}>
                  <span className='homeburger-title'>MENU</span>
                  <div className='homeburger-line'>
                    <span className="line"></span>
                    <span className="line"></span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;