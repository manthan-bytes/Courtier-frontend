// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../sellerinquiryoption/sellerinquiryoption.scss";
import bg_main from "../../../assets/images/bg-main.jpg";

const SellerInquiryOption = () => {

    // banner slide animation js
    const [newClass, setNewClass] = useState(false);
    useEffect(() => {
      setNewClass(true);
    }, []);

  return (
    <>
      <section className={`main-banner-sec inquiryoption-sec ${ newClass ? "next-class" : "" }`}>
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
                  Would you like to dfsds with a free digital home evaluation,
                  or wait for a Call from a real-estate agent?
                </h2>
                <form>
                  <Link to="/seller/callfromagent" className="theme_btn">
                    GET CALL FROM AGENT
                  </Link>
                  <Link
                    to="/seller/uploadimage"
                    className="theme_btn grdnt_btn"
                  >
                    Go With Digital Evaluation
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

export default SellerInquiryOption;
