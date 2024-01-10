// create dashboard page component
import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../sellercommercialindustrial/sellercommercialindustrial.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import commercialindustrial from "../../../assets/images/industrial.jpg";
import { updateLead } from "../../../service/lead.service";
import { SELLER } from "../../../core/constants/routes";
import { toast } from "react-toastify";
import { TEXT } from "../../../core/constants/headingText";
import { useTranslation } from "react-i18next";

const SellerCommercialIndustrial = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [leadObj, setLeadObj] = useState<any>();
  const [getpreferences, setpreferences] = useState<any>();
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);

  const handleonChangeProjectType = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['projectType'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangePropertyUsed = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['propertyUsed'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangeDescribeBusiness = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['describeBusiness'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangeGrossRevenue = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['grossRevenue'] = e.target.value
    setpreferences(selectedDataObj);

  }
  const handleSubmitClick = async (e: any) => {
    const element: any = document.getElementById("submit");
    if (element) {
      element.classList.add("loader-btn");
    }
    const leadDataObj = leadObj;
    const leadId = leadDataObj.id;
    leadDataObj['preferences'] = getpreferences;
    localStorage.setItem('leadObj', JSON.stringify(leadDataObj));
    const leadUpdate = await updateLead(leadId, leadDataObj);
    if (leadUpdate.statusCode === 200) {
      toast.success(leadUpdate.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      element.classList.remove("loader-btn");
      navigate(SELLER.PROPERTY_SOLD)
    } else {
      toast.error(leadUpdate.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      element.classList.remove("loader-btn");
    }
  }
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
      const preferences = leadObj.preferences;
      if (preferences) {
        console.log("🚀 ~ file: index.tsx:97 ~ useEffect ~ preferences:", preferences)
        setpreferences(preferences)
      } else {
        setpreferences({})
      }
    }
  }, []);

  return (
    <>
      <section className={`main-banner-sec commane-main industrial-sec ${ newClass ? "next-class" : "" }`}>
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
                <div className="heading-top">
                  <h2 className="h2">
                    {t("buyer.commercial.title")}
                  </h2>
                  <div onClick={handleSubmitClick}
                    className="theme_btn grdnt_btn"
                    id="submit"
                  >
                    <span>
                    {t("submit")}
                    </span>
                  </div>
                </div>

                <form>
                  <div className="form-inner-block">
                    <div className="form-left-content">
                      <h3 className="h3">
                      {t("buyer.commercial.Q1")}
                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeProjectType(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Commercial business" value="Commercial" checked={getpreferences?.projectType === "Commercial"}/>
                            <div className="checkbox-lables">{t("Commercial")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Industrial business" value="Industrial" checked={getpreferences?.projectType === "Industrial"}/>
                            <div className="checkbox-lables">{t("Industrial")}</div>
                            </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Business business" value="Business" checked={getpreferences?.projectType === "Business"}/>
                            <div className="checkbox-lables">{t("Business")}</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">{t("buyer.commercial.Q2")}</h3>
                      <ul className="property-select" onChange={(e) => handleonChangePropertyUsed(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Commercial"
                              value="Commercial"
                              checked={getpreferences?.propertyUsed === "Commercial"}
                            />
                            <div className="checkbox-lables">{t("Commercial")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Office"
                              value="Office"
                              checked={getpreferences?.propertyUsed === "Office"}
                            />
                            <div className="checkbox-lables">{t("Office")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Industrial"
                              value="Industrial"
                              checked={getpreferences?.propertyUsed === "Industrial"}
                            />
                            <div className="checkbox-lables">{t("Industrial")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Commercial & Office"
                              value="Commercial & Office"
                              checked={getpreferences?.propertyUsed === "Commercial & Office"}
                            />
                            <div className="checkbox-lables">{t("Commercial & Office")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Commercial & Industrial"
                              value="Commercial & Industrial"
                              checked={getpreferences?.propertyUsed === "Commercial & Industrial"}
                            />
                            <div className="checkbox-lables">{t("Commercial & Industrial")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Industrial & Office"
                              value="Industrial & Office"
                              checked={getpreferences?.propertyUsed === "Industrial & Office"}
                            />
                            <div className="checkbox-lables">{t("Industrial & Office")}</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">
                      {t("seller.commercial.Q3")}
                      </h3>
                      <div className="form-group">
                         <textarea  className="form-control"
                            placeholder={t("Describe the business")}
                            value={getpreferences?.describeBusiness}
                            onChange={(e) => handleonChangeDescribeBusiness(e)}></textarea>
                        </div>
                      <h3 className="h3">
                      {t("seller.commercial.Q4")}
                      </h3>
                      <div className="form-group mtbottom">
                        <input
                          className="form-control"
                          type="number"
                          placeholder={t("Avg Gross Revenue")}
                          value={getpreferences?.grossRevenue}
                            onChange={(e) => handleonChangeGrossRevenue(e)}
                        />
                      </div>
                    </div>
                    <div className="form-right-img">
                      <img
                        src={commercialindustrial}
                        alt="single family img"
                        width="845"
                        height="700"
                      />
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

export default SellerCommercialIndustrial;
