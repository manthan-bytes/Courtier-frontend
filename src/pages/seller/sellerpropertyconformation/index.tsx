// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sellerpropertyconformation.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import greaticon from "../../../assets/images/greaticon.svg";
import { SELLER } from "../../../core/constants/routes";

const SellerPropertyConformation = () => {
  const navigate = useNavigate();
  const [leadObj, setLeadObj] = useState<any>();


  const handleSubmitClick = async (e: any) => {
    const leadDataObj = leadObj;
    const newLeadObj = {
      leadType : leadDataObj.leadType,
    }
    localStorage.setItem('leadObj', JSON.stringify(newLeadObj));
      navigate(SELLER.LOCATION)
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

export default SellerPropertyConformation;
