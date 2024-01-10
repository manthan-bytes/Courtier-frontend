// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./buyerpropertythankyou.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { ROUTES, SELLER } from "../../../core/constants/routes";
import { useTranslation } from "react-i18next";

const BuyerPropertyThankyou = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleTakeMeHome = async (e: any) => {
    const newLeadObj = {
     
    }
    localStorage.setItem('leadObj', JSON.stringify(newLeadObj));
      navigate(ROUTES.HOME)
  }

  const handleSellProperty = async (e: any) => {
    const newLeadObj = {
        leadType: 'seller',
    }
    localStorage.setItem('leadObj', JSON.stringify(newLeadObj));
      navigate(SELLER.LOCATION)
  }
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
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
                  {t("thanks_you")}
                </h2>
                <form>
                  <div onClick={handleTakeMeHome} className="theme_btn">
                    {t("Take Me to Home")}
                  </div>
                  <div
                    onClick={handleSellProperty}
                    className="theme_btn grdnt_btn"
                  >
                    {t("I need help TO SELL a property")}
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

export default BuyerPropertyThankyou;
