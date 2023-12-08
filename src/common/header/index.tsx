// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logowhite from "../../assets/images/logo-white.svg";
import logoblack from "../../assets/images/logo-black.svg";

const Header = () => {
  // Home burger menu
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      const scrollY = window.scrollY;
      // Define thresholds for adding and removing classes
      const addClassThreshold = 10;
      const removeClassThreshold = 20;

      // Update the state based on the scroll position
      setScrolling(scrollY > addClassThreshold);
    };
    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <header
      className={`header-sec header-bk ${scrolling ? "onscroll" : "scroll"}`}
    >
      <div className="container">
        <div className="custom-row">
          <div className="logo-block-left">
            <Link to="#">
              <img
                className="whitelogo"
                src={logowhite}
                alt="logo"
                width="322"
                height="77"
              />
              <img
                className="blacklogo"
                src={logoblack}
                alt="logo"
                width="322"
                height="77"
              />
            </Link>
          </div>
          <div className="menu-block-right">
            <div className="home-burger-menu">
              <div
                className={isActive ? "is-active" : ""}
                onClick={toggleClass}
              >
                <span className="homeburger-title">MENU</span>
                <div className="homeburger-line">
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
