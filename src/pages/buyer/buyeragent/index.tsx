// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./buyeragent.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { BUYER, ROUTES } from "../../../core/constants/routes";

const BuyerAgent = () => {
  const navigate = useNavigate();
  const [leadObj, setLeadObj] = useState<any>();

  const handleSubmitClick = async () => {
    const leadDataObj = leadObj;
    const newLeadObj = {
      leadType : leadDataObj.leadType,
    }
    localStorage.setItem('leadObj', JSON.stringify(newLeadObj));
      navigate(BUYER.LOCATION)
  }
  const handleSubmitHomeClick = async () => {
    // const leadDataObj = leadObj;
    // const newLeadObj = {
     
    // }
    // localStorage.setItem('leadObj', JSON.stringify(newLeadObj));
      navigate(BUYER.PROPERTY_THANKYOU)
  }
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
      <section className={`main-banner-sec propertythankyou-sec ${ newClass ? "next-class" : "" }`}>
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
                  You will receive your curated list of properties within 24hrs and an Agent will call you shortly!                </h2>
                <h2 className="h2">
                Would you like to add another property type to your search?	
                </h2>
                {/* <p className="sub-tilte">if you found this journey cool - make sure to share and talk about it with your friends!</p> */}
                <form>
                  <div onClick={handleSubmitHomeClick} className="theme_btn">
                    NO, THANKS
                  </div>
                  <div onClick={handleSubmitClick}
                    
                    className="theme_btn grdnt_btn"
                  >
                    YES I WANT TO ADD
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

export default BuyerAgent;
