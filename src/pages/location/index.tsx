// create dashboard page component
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../location/location.scss";
import bg_main from "../../assets/images/bg-main.jpg";

const Location = () => {
  useEffect(() => {
    console.log("test");
  });
  return (
   <>
    <section className="main-banner-sec location-sec">
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
              <h2 className="h2">📍What location is your property located in?</h2>
              <form>
                <div className="form-inner-block">
                  <div className="form-group-main">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Type Your Name"
                        name="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="tel"
                        placeholder="Enter Your Contact No"
                        name="Contact No"
                      />
                      <span className="error-msg">
                        Special Characters are not allowed
                      </span>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="My Email Id is"
                        name="Email"
                      />
                    </div>
                  </div>
                </div>
                <Link to="/" className="theme_btn">
                  Back
                </Link>
                <Link to="/seller/propertytype" className="theme_btn grdnt_btn">
                  Next Question
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

export default Location;
