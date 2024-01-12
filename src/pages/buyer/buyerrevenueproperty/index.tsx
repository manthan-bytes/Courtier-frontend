// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./buyerrevenueproperty.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import revenueproperty from "../../../assets/images/revenueproperty.jpg";
import { updateLead } from "../../../service/lead.service";
import { BUYER } from "../../../core/constants/routes";
import { toast } from "react-toastify";
import { TEXT } from "../../../core/constants/headingText";
import { useTranslation } from "react-i18next";

const BuyerRevenueProperty = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [leadObj, setLeadObj] = useState<any>();
  const [getpreferences, setpreferences] = useState<any>();
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);

  const handleonChangeTenantsType = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['tenantsType'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangeBuildingType = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['buildingType'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangeInvestment = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['investment'] = e.target.value
    console.log("🚀 ~ file: index.tsx:35 ~ handleonChangeInvestment ~ selectedDataObj:", selectedDataObj)
    setpreferences(selectedDataObj);

  }

  const handleonChangeDownPayment = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['downPayment'] = e.target.value
    console.log("🚀 ~ file: index.tsx:35 ~ handleonChangeInvestment ~ selectedDataObj:", selectedDataObj)

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
      toast.success(t("LEAD_UPDATED_SUCCESS"), {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1200,
      });
      element.classList.remove("loader-btn");
      navigate(BUYER.TIME_LINE)
    } else {
      toast.error(t("SOMETHING_WENT_WRONG"), {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1200,
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
      <section className={`main-banner-sec commane-main condoproperty-sec ${ newClass ? "next-class" : "" }`}>
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
                  {t('buyer.revenue.title')}
                  </h2>
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
                      {t('buyer.revenue.Q1')}

                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeTenantsType(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Any Type For tenants" value="Any Type" checked={getpreferences?.tenantsType === "Any Type"}/>
                            <div className="checkbox-lables">{t('any_type')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Residential  For tenants" value="Residential" checked={getpreferences?.tenantsType === "Residential"}/>
                            <div className="checkbox-lables">{t('Residential')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Commercial  For tenants" value="Commercial" checked={getpreferences?.tenantsType === "Commercial"}/>
                            <div className="checkbox-lables">{t('Commercial')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Office  For tenants" value="Office" checked={getpreferences?.tenantsType === "Office"}/>
                            <div className="checkbox-lables">{t('Office')}</div>
                          </label>
                        </li>

                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Warehouse  For tenants" value="Warehouse" checked={getpreferences?.tenantsType === "Warehouse"}/>
                            <div className="checkbox-lables">{t('Warehouse')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Industrial  For tenants" value="Industrial" checked={getpreferences?.tenantsType === "Industrial"}/>
                            <div className="checkbox-lables">{t('Industrial')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Commercial & Office" value="Commercial & Office" checked={getpreferences?.tenantsType === "Commercial & Office"}/>
                            <div className="checkbox-lables">
                              {t('Commercial & Office')}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Commercial & Residential" value="Commercial & Residential" checked={getpreferences?.tenantsType === "Commercial & Residential"}/>
                            <div className="checkbox-lables">
                              {('Commercial & Residential')}
                            </div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">
                      {t('buyer.revenue.Q2')}
                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeBuildingType(e)}>
                        
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Any Type"
                              value="Any Type"
                              checked={getpreferences?.buildingType === "Any Type"}
                            />
                            <div className="checkbox-lables">{t('any_type')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Duplex"
                              value="Duplex"
                              checked={getpreferences?.buildingType === "Duplex"}
                            />
                            <div className="checkbox-lables">{t('Duplex')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Triplex"
                              value="Triplex"
                              checked={getpreferences?.buildingType === "Triplex"}
                            />
                            <div className="checkbox-lables">{t('Triplex')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Quadruplex"
                              value="Quadruplex"
                              checked={getpreferences?.buildingType === "Quadruplex"}
                            />
                            <div className="checkbox-lables">{t('Quadruplex')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Quintuplex"
                              value="Quintuplex"
                              checked={getpreferences?.buildingType === "Quintuplex"}
                            />
                            <div className="checkbox-lables">{t('Quintuplex')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Other"
                              value="Other"
                              checked={getpreferences?.buildingType === "Other"}
                            />
                            <div className="checkbox-lables">{t('Other')}</div>
                          </label>
                        </li>
                        </ul>
                        <h3 className="h3">
                        {t('buyer.revenue.Q3')}
                        </h3>
                        <ul className="property-select" onChange={(e) => handleonChangeInvestment(e)}>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="Prefer not to say for investment"
                                value="Prefer not to say"
                                checked={getpreferences?.investment === "Prefer not to say"}
                              />
                              <div className="checkbox-lables">
                                {" "}
                                {t('prefer_not_to_say')}
                              </div>
                            </label>
                          </li>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="0-400k for investment"
                                value="0-400k"
                                checked={getpreferences?.investment === "0-400k"}
                              />
                              <div className="checkbox-lables">{t('0-400k')}</div>
                            </label>
                          </li>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="400k-800k for investment"
                                value="400k-800k"
                                checked={getpreferences?.investment === "400k-800k"}
                              />
                              <div className="checkbox-lables">{t('400k-800k')}</div>
                            </label>
                          </li>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="800k-1.2mil for investment"
                                value="800k-1.2mil"
                                checked={getpreferences?.investment === "800k-1.2mil"}
                              />
                              <div className="checkbox-lables">{t('800k-1.2mil')}</div>
                            </label>
                          </li>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="1.2mil+ for investment"
                                value="1.2mil+"
                                checked={getpreferences?.investment === "1.2mil+"}
                              />
                              <div className="checkbox-lables">{t('1.2mil+')}</div>
                            </label>
                          </li>
                          
                        </ul>
                      <h3 className="h3">
                      {t('buyer.revenue.Q4')}
                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeDownPayment(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Prefer not to say for invetments"
                              value="Prefer not to say1"
                              checked={getpreferences?.downPayment === "Prefer not to say1"}
                            />
                            <div className="checkbox-lables">
                            {t('prefer_not_to_say')}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="5%"
                              value="5%"
                              checked={getpreferences?.downPayment === "5%"}
                            />
                            <div className="checkbox-lables">{t('5%')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="10%"
                              value="10%"
                              checked={getpreferences?.downPayment === "10%"}
                            />
                            <div className="checkbox-lables">{t('10%')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="15%"
                              value="15%"
                              checked={getpreferences?.downPayment === "15%"}
                            />
                            <div className="checkbox-lables">{t('15%')}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="20%+"
                              value="20%+"
                              checked={getpreferences?.downPayment === "20%+"}
                            />
                            <div className="checkbox-lables">{t('20%+')}</div>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="form-right-img">
                      <img
                        src={revenueproperty}
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

export default BuyerRevenueProperty;
