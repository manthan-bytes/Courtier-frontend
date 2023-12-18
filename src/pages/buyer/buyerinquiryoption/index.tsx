// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../buyerinquiryoption/buyerinquiryoption.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { BUYER } from "../../../core/constants/routes";

const BuyerInquiryOption = () => {
  const navigate = useNavigate();
  const [leadObj, setLeadObj] = useState<any>();

  const handleSubmitEvent = () => {
    switch (leadObj.propertyType) {
      case "single_family":
        navigate(BUYER.SINGLE_FAMILY);
        break;
      case "condo":
        navigate(BUYER.CONDO_PROPERTY);
        break;
      case "revenue_property":
        navigate(BUYER.REVENUE_PROPERTY);
        break;
      case "commercial_or_industry":
        navigate(BUYER.COMMERCIAL_INDUSTRIAL);
        break;
      case "land":
        navigate(BUYER.ABOUT_LAND_FIELD);
        break;
    }
  };
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
    const getLeadObj = localStorage.getItem("leadObj");
    if (getLeadObj) {
      const leadObj = JSON.parse(getLeadObj);
      setLeadObj(leadObj);
    }
  }, []);

  return (
    <>
      <section
        className={`main-banner-sec inquiryoption-sec ${
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
                <h2 className="h2">
                  Would you like to proceed with providing your search
                  requirements digitally? You can also choose to be contacted in
                  real-life by a real-estate agent.
                </h2>
                <form>
                  <Link to="/buysellproperty" className="theme_btn">
                    GET CALL FROM AGENT
                  </Link>
                  <div
                    onClick={handleSubmitEvent}
                    className="theme_btn grdnt_btn"
                  >
                    Go With Digital Evaluation
                  </div>
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