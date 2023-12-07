// create dashboard page component
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./sellerpropertythankyou.scss";
import bg_main from "../../../assets/images/bg-main.jpg";

const SellerPropertyThankyou = () => {
  useEffect(() => {
    console.log("test");
  });
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
                  Alright, this was quick and easy, see you again soon!
                </h2>
                <form>
                  <Link to="/seller/propertytype" className="theme_btn">
                    Take Me to Home
                  </Link>
                  <Link
                    to="/seller/propertytype"
                    className="theme_btn grdnt_btn"
                  >
                    I need help TO BUY a property
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

export default SellerPropertyThankyou;
