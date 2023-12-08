// create dashboard page component
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../contactinfo/contactinfo.scss";
import bg_main from "../../assets/images/bg-main.jpg";

const ContactInfo = () => {
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
  }, []);

  return (
    <section
      className={`main-banner-sec contactinfo-sec ${
        newClass ? "next-class" : ""
      }`}
    >
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
              <h2 className="h2">Please provide your contact information.</h2>
              <p className="sub-tilte">
                Log-in to receive a <span>free home evalutation</span> within
                24hrs of completing your journey
              </p>
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
                        className="form-control error-m"
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
                <Link to="/buysellproperty" className="theme_btn">
                  Back
                </Link>
                <Link to="/seller/location" className="theme_btn grdnt_btn">
                  Next Question
                </Link>
              </form>
            </div>
            {/* <div className="volume-btn">
              <div className="volume volumeoff">
                <VolumeMute />
              </div>
              <div className="volume volumeon">
                <VolumeOn />
              </div>
            </div> */}
          </div>
        </div>
        <div className="bottom-content-footer">
          <p>
            By entering your contact information, you are providing express
            written consent for Myte Group to contact you at the email and
            number you provided via telephone, mobile device, automated means
            like autodialing, text SMS/MMS and pre-recorded messages, even if
            you are registered on a corporate, state,or federal Do Not Call
            list. You are also acknowledging and agreeing to our terms of
            service and privacy policy. Consent is not required to use our
            services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
