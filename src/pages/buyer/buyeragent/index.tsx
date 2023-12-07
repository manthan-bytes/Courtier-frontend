// create dashboard page component
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./buyeragent.scss";
import bg_main from "../../../assets/images/bg-main.jpg";

const BuyerAgent = () => {

  return (
    <>
      <section className="main-banner-sec propertythankyou-sec">
        <div className="banner-overlay"></div>
        <img
          className="banner-bg"
          src={bg_main}
          alt="banner img"
          width="1920"
          height="1080"
        />
        <div className="banner-cantent-block">
          <div className="container">
            <div className="custom-row">
              <div className="form-step-contect">
                <h2 className="h2">
                  Would you like to add another type of property to your search?
                </h2>
                <p className="sub-tilte">if you found this journey cool - make sure to share and talk about it with your friends!</p>
                <form>
                  <Link to="/buysellproperty" className="theme_btn">
                    NO, THANKS
                  </Link>
                  <Link
                    to="/buyer/timeline"
                    className="theme_btn grdnt_btn"
                  >
                    YES I WANT TO ADD
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyerAgent;
