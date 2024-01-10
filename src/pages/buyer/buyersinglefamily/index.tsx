// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./buyersinglefamily.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import singlefamily from "../../../assets/images/single-family.jpg";
import { RightIcon } from "../../../core/icons";
import { updateLead } from "../../../service/lead.service";
import { BUYER, SELLER } from "../../../core/constants/routes";
import { toast } from "react-toastify";
import { TEXT } from "../../../core/constants/headingText";
import { useTranslation } from "react-i18next";

const BuyerSingleFamily = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [leadObj, setLeadObj] = useState<any>();
  const [getpreferences, setpreferences] = useState<any>();
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);

  const handleonChangeHomeStyle = async (e: any) => {
    const selectedDataObj = { ...getpreferences };
    selectedDataObj["homeStyle"] = e.target.value;
    console.log(
      "🚀 ~ file: index.tsx:22 ~ handleonChangeHomeStyle ~ selectedDataObj:",
      selectedDataObj
    );
    setpreferences(selectedDataObj);
  };
  const handleonChangeBuildingType = async (e: any) => {
    const selectedDataObj = { ...getpreferences };
    selectedDataObj["buildingType"] = e.target.value;
    setpreferences(selectedDataObj);
  };

  const handleonChangeBedrooms = async (e: any) => {
    const selectedDataObj = { ...getpreferences };
    selectedDataObj["bedrooms"] = e.target.value;
    setpreferences(selectedDataObj);
  };

  const handleonChangeBathrooms = async (e: any) => {
    const selectedDataObj = { ...getpreferences };
    selectedDataObj["bathrooms"] = e.target.value;
    setpreferences(selectedDataObj);
  };

  const handleonChangeGarage = async (e: any) => {
    const selectedDataObj = { ...getpreferences };
    selectedDataObj["isGarage"] = e.target.value;
    setpreferences(selectedDataObj);
  };
  const handleonChangePool = async (e: any) => {
    const selectedDataObj = { ...getpreferences };
    selectedDataObj["isPool"] = e.target.value;
    setpreferences(selectedDataObj);
  };

  const handleonChangeBudget = async (e: any) => {
    const selectedDataObj = { ...getpreferences };
    selectedDataObj["budget"] = e.target.value;
    setpreferences(selectedDataObj);
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
      toast.success(leadUpdate.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      element.classList.remove("loader-btn");
      navigate(BUYER.TIME_LINE);
    } else {
      toast.error(leadUpdate.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      element.classList.remove("loader-btn");
    }
  };
  useEffect(() => {
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
        className={`main-banner-sec commane-main singlefamilyhomestyle-sec ${
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
                  <h2 className="h2">{t("buyer.single_family.title")}</h2>
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
                      <h3 className="h3">{t("buyer.single_family.Q1")}</h3>
                      <ul
                        className="property-select"
                        onChange={(e) => handleonChangeHomeStyle(e)}
                      >
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Don't Care home type"
                              value="Don't Care"
                              checked={
                                getpreferences?.homeStyle === "Don't Care"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Don't Care")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="One Floor"
                              value="One Floor"
                              checked={
                                getpreferences?.homeStyle === "One Floor"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("One Floor")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Many Floors"
                              value="Many Floors"
                              checked={
                                getpreferences?.homeStyle === "Many Floors"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Many Floors")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Multiple Platforms"
                              value="Multiple Platforms"
                              checked={
                                getpreferences?.homeStyle ===
                                "Multiple Platforms"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Multiple Platforms")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="One floor and a half"
                              value="One floor and a half"
                              checked={
                                getpreferences?.homeStyle ===
                                "One floor and a half"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("One floor and a half")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Mobile House"
                              value="Mobile House"
                              checked={
                                getpreferences?.homeStyle === "Mobile House"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Mobile House")}
                            </div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">{t("buyer.single_family.Q2")}</h3>
                      <ul
                        className="property-select"
                        onChange={(e) => handleonChangeBuildingType(e)}
                      >
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Don't Care"
                              value="Don't Care"
                              checked={
                                getpreferences?.buildingType === "Don't Care"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("Don't Care")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Detached Home"
                              value="Detached Home"
                              checked={
                                getpreferences?.buildingType === "Detached Home"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("detached_home")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Paired"
                              value="Paired"
                              checked={
                                getpreferences?.buildingType === "Paired"
                              }
                            />
                            <div className="checkbox-lables">{t("paired")}</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="In a row"
                              value="In a row"
                              checked={
                                getpreferences?.buildingType === "In a row"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("in_a_row")}
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Corner, in a row"
                              value="Corner, in a row"
                              checked={
                                getpreferences?.buildingType ===
                                "Corner, in a row"
                              }
                            />
                            <div className="checkbox-lables">
                              {t("corner_in_a_row")}
                            </div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">{t("buyer.single_family.Q3")}</h3>

                      <ul
                        className="property-select"
                        onChange={(e) => handleonChangeBedrooms(e)}
                      >
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bedrooms"
                              value="1"
                              checked={getpreferences?.bedrooms === "1"}
                            />
                            <div className="checkbox-lables">1</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bedrooms"
                              value="2"
                              checked={getpreferences?.bedrooms === "2"}
                            />
                            <div className="checkbox-lables">2</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bedrooms"
                              value="3"
                              checked={getpreferences?.bedrooms === "3"}
                            />
                            <div className="checkbox-lables">3</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bedrooms"
                              value="4"
                              checked={getpreferences?.bedrooms === "4"}
                            />
                            <div className="checkbox-lables">4</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bedrooms"
                              value="5+"
                              checked={getpreferences?.bedrooms === "5+"}
                            />
                            <div className="checkbox-lables">5+</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">{t("buyer.single_family.Q4")}</h3>
                      <ul
                        className="property-select"
                        onChange={(e) => handleonChangeBathrooms(e)}
                      >
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bathrooms"
                              value="1"
                              checked={getpreferences?.bathrooms === "1"}
                            />
                            <div className="checkbox-lables">1</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bathrooms"
                              value="2"
                              checked={getpreferences?.bathrooms === "2"}
                            />
                            <div className="checkbox-lables">2</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bathrooms"
                              value="3"
                              checked={getpreferences?.bathrooms === "3"}
                            />
                            <div className="checkbox-lables">3</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bathrooms"
                              value="4"
                              checked={getpreferences?.bathrooms === "4"}
                            />
                            <div className="checkbox-lables">4</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bathrooms"
                              value="5+"
                              checked={getpreferences?.bathrooms === "5+"}
                            />
                            <div className="checkbox-lables">5+</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">{t("buyer.single_family.Q5")}</h3>
                      <ul
                        className="property-select"
                        onChange={(e) => handleonChangeGarage(e)}
                      >
                        <li>
                          <label className="custom-checkbox">
                            <input
                              type="radio"
                              name="garage"
                              value="yes"
                              checked={getpreferences?.isGarage === "yes"}
                            />
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>{t("yes")}</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox">
                            <input
                              type="radio"
                              name="garage"
                              value="no"
                              checked={getpreferences?.isGarage === "no"}
                            />
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>{t("no")}</span>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">{t("buyer.single_family.Q6")}</h3>
                      <ul
                        className="property-select"
                        onChange={(e) => handleonChangePool(e)}
                      >
                        <li>
                          <label className="custom-checkbox">
                            <input
                              type="radio"
                              name="pool"
                              value="yes"
                              checked={getpreferences?.isPool === "yes"}
                            />
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>{t("yes")}</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox">
                            <input
                              type="radio"
                              name="pool"
                              value="no"
                              checked={getpreferences?.isPool === "no"}
                            />
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>{t("no")}</span>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">{t("buyer.single_family.Q7")}</h3>

                      <ul
                        className="property-select"
                        onChange={(e) => handleonChangeBudget(e)}
                      >
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Prefer not to say"
                              value="Prefer not to say"
                              checked={
                                getpreferences?.budget === "Prefer not to say"
                              }
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
                            <div className="checkbox-lables">
                              {t("400k-800k")}
                            </div>
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
                            <div className="checkbox-lables">
                              {t("800k-1.2mil")}
                            </div>
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
                            <div className="checkbox-lables">
                              {t("1.2mil+")}
                            </div>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="form-right-img">
                      <img
                        src={singlefamily}
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

export default BuyerSingleFamily;
