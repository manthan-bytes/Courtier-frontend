// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../sellerrevenueproperty/sellerrevenueproperty.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import revenueproperty from "../../../assets/images/revenueproperty.jpg";
import { updateLead } from "../../../service/lead.service";
import { SELLER } from "../../../core/constants/routes";
import { toast } from "react-toastify";
import { TEXT } from "../../../core/constants/headingText";
import { useTranslation } from "react-i18next";

const SellerRevenueProperty = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [leadObj, setLeadObj] = useState<any>();
  const [getpreferences, setpreferences] = useState<any>();
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  const [getTotalNumber, setTotalNumber] = useState<any>();

  const handleonChangePropertyMeant = async (e: any) => {
    const selectedDataObj = { ...getpreferences };
    selectedDataObj["propertyMeant"] = e.target.value;
    setpreferences(selectedDataObj);
  };

  const handleonChangeBuildingType = async (e: any) => {
    const selectedDataObj = { ...getpreferences };
    selectedDataObj["buildingType"] = e.target.value;
    setpreferences(selectedDataObj);
  };

  const handleonChangeResidentialUnit = async (e: any) => {
    const selectedDataObj = { ...getpreferences };
    selectedDataObj["residentialUnit"] = e.target.value;
    console.log(
      "🚀 ~ file: index.tsx:35 ~ handleonChangeResidentialUnit ~ selectedDataObj:",
      selectedDataObj
    );
    setpreferences(selectedDataObj);
  };

  const handleonChangeCommercialUnit = async (e: any) => {
    const selectedDataObj = { ...getpreferences };
    selectedDataObj["commercialUnit"] = e.target.value;
    console.log(
      "🚀 ~ file: index.tsx:43 ~ handleonChangeCommercialUnit ~ selectedDataObj:",
      selectedDataObj
    );
    setpreferences(selectedDataObj);
  };

  const handleonChangeAverageRevenue = async (e: any) => {
    const selectedDataObj = { ...getpreferences };
    selectedDataObj["averageRevenue"] = e.target.value;
    setpreferences(selectedDataObj);
  };

  const calculateUnit = () => {
    if (getpreferences?.residentialUnit && getpreferences?.commercialUnit) {
      return (
        Number(getpreferences.residentialUnit) +
        Number(getpreferences.commercialUnit)
      );
    }
  };

  const handleSubmitClick = async (e: any) => {
    const element: any = document.getElementById("submit");
    if (element) {
      element.classList.add("loader-btn");
    }
    const leadDataObj = leadObj;
    const leadId = leadDataObj.id;
    leadDataObj["preferences"] = getpreferences;
    localStorage.setItem("leadObj", JSON.stringify(leadDataObj));
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
  };
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
        console.log(
          "🚀 ~ file: index.tsx:97 ~ useEffect ~ preferences:",
          preferences
        );
        setpreferences(preferences);
      } else {
        setpreferences({});
      }
    }
  }, []);

  return (
    <>
      <section
        className={`main-banner-sec commane-main condoproperty-sec ${
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
                <div className="heading-top">
                  <h2 className="h2">{t("seller.revenue.title")} </h2>
                  <div
                    onClick={handleSubmitClick}
                    className="theme_btn grdnt_btn"
                    id="submit"
                  >
                    <span>{t("submit")}</span>
                  </div>
                </div>

                <form>
                  <div className="form-inner-block">
                    <div className="form-left-content">
                      <h3 className="h3">{t("seller.revenue.Q1")}</h3>
                      <ul
                        className="property-select"
                        onChange={(e) => handleonChangePropertyMeant(e)}
                      >
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Residential"
                              value="Residential"
                              checked={
                                getpreferences?.propertyMeant === "Residential"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Residential")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Commercial"
                              value="Commercial"
                              checked={
                                getpreferences?.propertyMeant === "Commercial"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Commercial")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Office"
                              value="Office"
                              checked={
                                getpreferences?.propertyMeant === "Office"
                              }
                            />
                            <div className="checkbox-lables">{t("Office")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Warehouse"
                              value="Warehouse"
                              checked={
                                getpreferences?.propertyMeant === "Warehouse"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Warehouse")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Industrial"
                              value="Industrial"
                              checked={
                                getpreferences?.propertyMeant === "Industrial"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Industrial")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Warehouse & Office"
                              value="Warehouse & Office"
                              checked={
                                getpreferences?.propertyMeant ===
                                "Warehouse & Office"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Warehouse & Office")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Commercial & Office"
                              value="Commercial & Office"
                              checked={
                                getpreferences?.propertyMeant ===
                                "Commercial & Office"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Commercial & Office")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Commercial & Residential"
                              value="Commercial & Residential"
                              checked={
                                getpreferences?.propertyMeant ===
                                "Commercial & Residential"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Commercial & Residential")}
                            </div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">{t("seller.revenue.Q2")}</h3>
                      <ul
                        className="property-select"
                        onChange={(e) => handleonChangeBuildingType(e)}
                      >
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Duplex"
                              value="Duplex"
                              checked={
                                getpreferences?.buildingType === "Duplex"
                              }
                            />
                            <div className="checkbox-lables">{t("Duplex")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Triplex"
                              value="Triplex"
                              checked={
                                getpreferences?.buildingType === "Triplex"
                              }
                            />
                            <div className="checkbox-lables">t{"Triplex"}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Quadruplex"
                              value="Quadruplex"
                              checked={
                                getpreferences?.buildingType === "Quadruplex"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Quadruplex")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Quintuplex"
                              value="Quintuplex"
                              checked={
                                getpreferences?.buildingType === "Quintuplex"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Quintuplex")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Other Plex"
                              value="Other Plex"
                              checked={
                                getpreferences?.buildingType === "Other Plex"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Other Plex")}
                            </div>
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
                            <div className="checkbox-lables">{t("Other")}</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">{t("seller.revenue.Q3")}</h3>
                      <div className="property-select">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="number"
                            placeholder={t("Add for Residential")}
                            value={getpreferences?.residentialUnit}
                            onChange={(e) => handleonChangeResidentialUnit(e)}
                          />
                          <input
                            className="form-control"
                            type="number"
                            placeholder={t("Add for Commercial")}
                            value={getpreferences?.commercialUnit}
                            onChange={(e) => handleonChangeCommercialUnit(e)}
                          />
                        </div>
                        <div className="total-units">
                          <strong>{calculateUnit()}</strong>
                          <h4>{t("Total Number Of Units")}</h4>
                          {/* <h4>Total Number Of Units {calculateUnit()}</h4> */}
                        </div>
                      </div>
                      <h3 className="h3">{t("seller.revenue.Q4")}</h3>
                      <div className="form-group mtbottom">
                        <input
                          className="form-control"
                          type="number"
                          placeholder={t("Avg Gross Revenue")}
                          value={getpreferences?.averageRevenue}
                          onChange={(e) => handleonChangeAverageRevenue(e)}
                        />
                      </div>
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

export default SellerRevenueProperty;
