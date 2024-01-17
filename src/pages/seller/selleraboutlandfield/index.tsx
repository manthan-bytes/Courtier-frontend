// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../selleraboutlandfield/selleraboutlandfield.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import landfield from "../../../assets/images/landfield.jpg";
import { updateLead } from "../../../service/lead.service";
import { SELLER } from "../../../core/constants/routes";
import { toast } from "react-toastify";
import { TEXT } from "../../../core/constants/headingText";
import { useTranslation } from "react-i18next";

const SellerAboutLandField = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [leadObj, setLeadObj] = useState<any>();
  const [getpreferences, setpreferences] = useState<any>();
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);

  const handleonChangeIsLandField = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['isLandField'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangeCityZonage = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['cityZonage'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangeSurfaceArea = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['surfaceArea'] = e.target.value
    setpreferences(selectedDataObj);

  }
  const handleSubmitClick = async (e: any) => {
    const element: any = document.getElementById("submit");
    if (element) {
      element.classList.add("loader-btn");
    }
    const leadDataObj = leadObj;
    const leadId = leadDataObj.id;

    const lengthOfObj = Object.keys(getpreferences).length;
    if (getpreferences && lengthOfObj === 3) {
      leadDataObj['preferences'] = getpreferences;
    localStorage.setItem('leadObj', JSON.stringify(leadDataObj));
    const leadUpdate = await updateLead(leadId, leadDataObj);
    if (leadUpdate.statusCode === 200) {
      toast.success(t("LEAD_UPDATED_SUCCESS"), {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1200,
      });
      element.classList.remove("loader-btn");
      navigate(SELLER.PROPERTY_SOLD)
    } else {
      toast.error(t("SOMETHING_WENT_WRONG"), {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1200,
      });
      element.classList.remove("loader-btn");
    }
    } else {
      toast.error(t("PLEASE_SELECT_PREFERENCE"), {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1200,
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
      <section className={`main-banner-sec commane-main aboutlandfield-sec ${ newClass ? "next-class" : "" }`}>
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
                  <h2 className="h2">{t("seller.land.title")}</h2>
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
                      {t("seller.land.Q1")}
                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeIsLandField(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Land" value="Land" checked={getpreferences?.isLandField === "Land"}/>
                            <div className="checkbox-lables">{t("Land")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Field" value="Field" checked={getpreferences?.isLandField === "Field"}/>
                            <div className="checkbox-lables">{t("Field")}</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">{t("seller.land.Q2")}</h3>
                      <ul className="property-select" onChange={(e) => handleonChangeCityZonage(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Residential"
                              value="Residential"
                              checked={getpreferences?.cityZonage === "Residential"}
                            />
                            <div className="checkbox-lables">{t("Residential")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Commercial"
                              value="Commercial"
                              checked={getpreferences?.cityZonage === "Commercial"}
                            />
                            <div className="checkbox-lables">{t("Commercial")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Industrial"
                              value="Industrial"
                              checked={getpreferences?.cityZonage === "Industrial"}
                            />
                            <div className="checkbox-lables">{t("Industrial")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Agriculture"
                              value="Agriculture"
                              checked={getpreferences?.cityZonage === "Agriculture"}
                            />
                            <div className="checkbox-lables">{t("Agriculture")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Forestry"
                              value="Forestry"
                              checked={getpreferences?.cityZonage === "Forestry"}
                            />
                            <div className="checkbox-lables">{t("Forestry")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Other"
                              value="Other"
                              checked={getpreferences?.cityZonage === "Other"}
                            />
                            <div className="checkbox-lables">{t("Other")}</div>
                          </label>
                        </li>
                      </ul>

                      <h3 className="h3">{t("seller.land.Q3")}</h3>
                      <ul className="property-select" onChange={(e) => handleonChangeSurfaceArea(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="0 - 2000 sq ft."
                              value="0 - 2000 sq ft."
                              checked={getpreferences?.surfaceArea === "0 - 2000 sq ft."}
                            />
                            <div className="checkbox-lables">
                              {t("0 - 2000 sq ft")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="2000 - 5000 sq ft."
                              value="2000 - 5000 sq ft."
                              checked={getpreferences?.surfaceArea === "2000 - 5000 sq ft."}
                            />
                            <div className="checkbox-lables">
                              {t("2000 - 5000 sq ft")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="5000 - 10000 sq ft."
                              value="5000 - 10000 sq ft."
                              checked={getpreferences?.surfaceArea === "5000 - 10000 sq ft."}
                            />
                            <div className="checkbox-lables">
                              {t("5000 - 10000 sq ft")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="10000+ sq ft."
                              value="10000+ sq ft."
                              checked={getpreferences?.surfaceArea === "10000+ sq ft."}
                            />
                            <div className="checkbox-lables">
                              {t("10000+ sq ft")}{" "}
                            </div>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="form-right-img">
                      <img
                        src={landfield}
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

export default SellerAboutLandField;
