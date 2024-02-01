// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../buyerinquiryoption/buyerinquiryoption.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { BUYER } from "../../../core/constants/routes";
import { sendEmail } from "../../../service/login.service";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const BuyerInquiryOption = () => {
  const navigate = useNavigate();
  const [leadObj, setLeadObj] = useState<any>();
  const { t } = useTranslation();
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

  const callFromAgent = async () => {
    const email = localStorage.getItem("email");
    const emailObj = {
      email: email,
      type: leadObj.leadType,
      leadId: leadObj.id,
    };
    const sendEmailResponse = await sendEmail(emailObj);
    if (sendEmailResponse.statusCode === 200) {
      toast.success(t("EMAIL_SENT_SUCCESS"), {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1200,
      });
    } else {
      toast.error(t("SOMETHING_WENT_WRONG_IN_EMAIL"), {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1200,
      });
    }
    navigate(BUYER.CALL_AGENT)
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
                {t('inquiry_1')} <span style={{color:'red'}}>{t('inquiry_2')} </span> {t('inquiry_3')}
                </h2>
                <form>
                  <div onClick={callFromAgent} className="theme_btn">
                    {t('get_call_from_agent')}
                  </div>
                  <div
                    onClick={handleSubmitEvent}
                    className="theme_btn grdnt_btn"
                  >
                    {t('go_with_digital_evalution')}
                    <div className="btn_text">
                        {t("BTN_TEXT")}
                    </div>
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
