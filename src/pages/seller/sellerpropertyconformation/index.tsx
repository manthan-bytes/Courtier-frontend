// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sellerpropertyconformation.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import greaticon from "../../../assets/images/greaticon.svg";

const SellerPropertyConformation = () => {

  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
  }, []);

  return (
    <>
      <section className={`main-banner-sec conformation-sec ${ newClass ? "next-class" : "" }`}>
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
                <img
                  className="greaticon"
                  src={greaticon}
                  alt="greaticon"
                  width="181"
                  height="181"
                />
                <h2 className="h2">
                  You will receive your free property evaluation within 24hrs by
                  email and an agent will call you shortly!
                </h2>
                <h3 className="h2">
                  Would you like to add another property type that you may be
                  selling?
                </h3>
                <form>
                  <Link to="/seller/propertythankyou" className="theme_btn">
                    NO, THANKS
                  </Link>
                  <Link
                    to="/seller/location"
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

export default SellerPropertyConformation;
