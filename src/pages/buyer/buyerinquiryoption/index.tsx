// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../buyerinquiryoption/buyerinquiryoption.scss";
import bg_main from "../../../assets/images/bg-main.jpg";

const BuyerInquiryOption = () => {

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
                  Would you like to proceed with providing your search
                  requirements digitally? You can also choose to be contacted in
                  real-life by a real-estate agent.
                </h2>
                <form>
                  <Link to="/buysellproperty" className="theme_btn">
                    GET CALL FROM AGENT
                  </Link>
                  <Link
                    to="/buyer/singlefamily"
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

export default BuyerInquiryOption;
