// create dashboard page component
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../sellersinglefamily/sellersinglefamily.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { SELLER } from "../../../core/constants/routes";
import { useTranslation } from "react-i18next";

const SellerSingleFamily = () => {
  const navigate = useNavigate();
  const [leadObj, setLeadObj] = useState<any>();
  const { t } = useTranslation();
  const handleSubmitEvent = () => {
    switch (leadObj.propertyType) {
      case "single_family":
        navigate(SELLER.SINGLE_FAMILY_HOME_STYLE);
        break;
      case "condo":
        navigate(SELLER.CONDO_PROPERTY);
        break;
      case "revenue_property":
        navigate(SELLER.REVENUE_PROPERTY);
        break;
      case "commercial_or_industry":
        navigate(SELLER.COMMERCIAL_INDUSTRIAL);
        break;
      case "land":
        navigate(SELLER.ABOUT_LAND_FIELD);
        break;
    }
  };
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    const element: any = document.getElementById("header");
    if (element) {
      element.classList.add("header-bk");
    }
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
        className={`main-banner-sec singlefamily-sec ${
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
                  {t("great")} 💫
                  <br />
                  {t("We would like to know more about your Property!")}
                </h2>
                <form>
                  <div
                    onClick={handleSubmitEvent}
                    className="theme_btn grdnt_btn"
                  >
                    {t("lets_continue")}
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

export default SellerSingleFamily;
