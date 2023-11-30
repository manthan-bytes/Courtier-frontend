// create dashboard page component
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import { TEXT } from "../../core/constants/headingText";


const BuySellProperty = () => {
  return (
    <section className="main-banner-sec">
     <div className="banner-overlay"></div>
      <img
          className="banner-bg"
          src={bg_main}
          alt="banner img"
          width="1920"
          height="1080"
        />
          <h1>Buy Sell Property</h1>
      <Link to="/seller/contactinfo">Go To Contact Info</Link>
    </section>
  );
};

export default BuySellProperty;
