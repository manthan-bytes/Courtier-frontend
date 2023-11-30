// create dashboard page component
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import { TEXT } from "../../core/constants/headingText";
import volumeoff from "../../assets/images/volumeoff-icon.svg";
import volumeon from "../../assets/images/volumeon-icon.svg";
import {
  VolumeMute,
  VolumeOn,
  Buyericon,
  Sellericon,
  Googleicon,
} from "../../core/icons";

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
      <div className="banner-cantent-block">
        <div className="container">
          <div className="custom-row">
            <div className="form-step-contect">
              <h2 className="h2">
                Great 💫
                <br />
                Are you looking to buy or sell property?
              </h2>
              <div className="form-inner-block">
                <label className="custom-select">
                  <input type="radio" name="layout" value="L" />

                  <div className="custom-lable">
                    <span className="svg-icon">
                      <Buyericon />
                    </span>
                    I’m Buyer
                  </div>
                </label>
                <label className="custom-select">
                  <input type="radio" name="layout" value="L" />

                  <div className="custom-lable">
                    <span className="svg-icon">
                      <Sellericon />
                    </span>
                    I’m Seller
                  </div>
                </label>
              </div>
              <Link to="/seller/contactinfo" className="theme_btn blue_btn">
                Go To Contact Info
              </Link>
            </div>
            <div className="login-block">
              <h2 className="h2">Login to Continue</h2>
              <label className="custom-select">
                <Link to="#" className="theme_btn">
                  <Googleicon />
                  Continue with Goolge
                </Link>
              </label>
            </div>
            <div className="volume-btn">
              <div className="volume volumeoff">
                <VolumeMute />
              </div>
              <div className="volume volumeon">
                <VolumeOn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySellProperty;
