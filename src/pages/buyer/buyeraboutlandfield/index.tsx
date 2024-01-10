// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./buyeraboutlandfield.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import aboutlandfield from "../../../assets/images/aboutlandfield.jpg";
import { BUYER } from "../../../core/constants/routes";
import { updateLead } from "../../../service/lead.service";
import { toast } from "react-toastify";
import { TEXT } from "../../../core/constants/headingText";
import { useTranslation } from "react-i18next";

const BuyerAboutLandField = () => {
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
  const handleonChangeBudget = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['budget'] = e.target.value
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
      navigate(BUYER.TIME_LINE)
    } else {
      toast.error(leadUpdate.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      element.classList.remove("loader-btn");
    }
  }
  useEffect(() => {
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
                  <h2 className="h2"> {t("buyer.land.title")}</h2>
                  <div onClick={handleSubmitClick}
                    className="theme_btn grdnt_btn"
                    id="submit"
                  >
                    <span>
                      {t('submit')}
                    </span>
                  </div>
                </div>

                <form>
                  <div className="form-inner-block">
                    <div className="form-left-content">
                      <h3 className="h3">
                      {t("buyer.land.Q1")}
                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeIsLandField(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Land" value="Land" checked={getpreferences?.isLandField === "Land"}/>
                            <div className="checkbox-lables">{t('Land')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Field" value="Field" checked={getpreferences?.isLandField === "Field"}/>
                            <div className="checkbox-lables">{t('Field')}</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">{t("buyer.land.Q2")}</h3>
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

                      <h3 className="h3">{t("buyer.land.Q3")}</h3>
                     
                      <div className="form-group mtbottom property-select">
                        <input
                          className={`form-control placeholder-pink`}
                          type="text"
                          placeholder={t("Surface Area")}
                          value={getpreferences?.surfaceArea}
                          onChange={(e) => handleonChangeSurfaceArea(e)}
                          style={{
                            color: 'gray',
                            filter: 'grayscale(100%)',
                            
                          }}
                        />
                      </div>
                      <h3 className="h3">
                        {t("buyer.land.Q4")}
                      </h3>

                      <ul className="property-select" onChange={(e) => handleonChangeBudget(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Prefer not to say"
                              value="Prefer not to say"
                              checked={getpreferences?.budget === "Prefer not to say"}
                            />
                            <div className="checkbox-lables">
                              {" "}
                              {t("prefer_not_to_say")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="0-400k"
                              value="0-400k"
                              checked={getpreferences?.budget === "0-400k"}
                            />
                            <div className="checkbox-lables">{t("0-400k")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="400k-800k"
                              value="400k-800k"
                              checked={getpreferences?.budget === "400k-800k"}
                            />
                            <div className="checkbox-lables">{t("400k-800k")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="800k-1.2mil"
                              value="800k-1.2mil"
                              checked={getpreferences?.budget === "800k-1.2mil"}
                            />
                            <div className="checkbox-lables">{t("800k-1.2mil")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="1.2mil+"
                              value="1.2mil+"
                              checked={getpreferences?.budget === "1.2mil+"}
                            />
                            <div className="checkbox-lables">{t("1.2mil+")}</div>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="form-right-img">
                      <img
                        src={aboutlandfield}
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

export default BuyerAboutLandField;
