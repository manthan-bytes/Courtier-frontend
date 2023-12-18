// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../sellerinquiryoption/sellerinquiryoption.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { TEXT } from "../../../core/constants/headingText";

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
                  {TEXT.sell_inquiry_options}
                </h2>
                <form>
                  <Link to="/seller/callfromagent" className="theme_btn">
                    {TEXT.call_from_agent}
                  </Link>
                  <Link
                    to="/seller/uploadimage"
                    className="theme_btn grdnt_btn"
                  >
                    {TEXT.digital_evaluation}
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
