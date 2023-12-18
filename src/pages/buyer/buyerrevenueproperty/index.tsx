// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./buyerrevenueproperty.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import revenueproperty from "../../../assets/images/revenueproperty.jpg";
import { updateLead } from "../../../service/lead.service";
import { BUYER } from "../../../core/constants/routes";
import { toast } from "react-toastify";

const BuyerRevenueProperty = () => {
  const navigate = useNavigate();

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
    setpreferences(selectedDataObj);

  }
  const handleSubmitClick = async (e: any) => {
    const leadDataObj = leadObj;
    const leadId = leadDataObj.id;
    leadDataObj['preferences'] = getpreferences;
    localStorage.setItem('leadObj', JSON.stringify(leadDataObj));
    const leadUpdate = await updateLead(leadId, leadDataObj);
    if (leadUpdate.statusCode === 200) {
      toast.success(leadUpdate.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate(BUYER.TIME_LINE)
    } else {
      toast.error(leadUpdate.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
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
                    Share info about Revenue Property property
                  </h2>
                  <div onClick={handleSubmitClick}
                    className="theme_btn grdnt_btn"
                  >
                    Submit
                  </div>
                </div>

                <form>
                  <div className="form-inner-block">
                    <div className="form-left-content">
                      <h3 className="h3">
                        Ok great! What type of tenants would you prefer?
                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeTenantsType(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Any Type" value="Any Type" checked={getpreferences?.tenantsType === "Any Type"}/>
                            <div className="checkbox-lables">Any Type</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Residential" value="Residential" checked={getpreferences?.tenantsType === "Residential"}/>
                            <div className="checkbox-lables">Residential</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Commercial" value="Commercial" checked={getpreferences?.tenantsType === "Commercial"}/>
                            <div className="checkbox-lables">Commercial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Bureaux" value="Bureaux" checked={getpreferences?.tenantsType === "Bureaux"}/>
                            <div className="checkbox-lables">Bureaux</div>
                          </label>
                        </li>

                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Entrepot" value="Entrepot" checked={getpreferences?.tenantsType === "Entrepot"}/>
                            <div className="checkbox-lables">Entrepot</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Industrial" value="Industrial" checked={getpreferences?.tenantsType === "Industrial"}/>
                            <div className="checkbox-lables">Industrial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Commercial & Bureau" value="Commercial & Bureau" checked={getpreferences?.tenantsType === "Commercial & Bureau"}/>
                            <div className="checkbox-lables">
                              Commercial & Bureau
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Commercial & Residential" value="Commercial & Residential" checked={getpreferences?.tenantsType === "Commercial & Residential"}/>
                            <div className="checkbox-lables">
                              Commercial & Residential
                            </div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">
                        What type of building would you prefer? Please select
                        one.
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
                            <div className="checkbox-lables">Any Type</div>
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
                            <div className="checkbox-lables">Duplex</div>
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
                            <div className="checkbox-lables">Triplex</div>
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
                            <div className="checkbox-lables">Quadruplex</div>
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
                            <div className="checkbox-lables">Quintuplex</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Autre"
                              value="Autre"
                              checked={getpreferences?.buildingType === "Autre"}
                            />
                            <div className="checkbox-lables">Autre</div>
                          </label>
                        </li>
                        </ul>
                        <h3 className="h3">
                          What is your budget for your investment - this will
                          help refine our search for you.
                        </h3>
                        <ul className="property-select" onChange={(e) => handleonChangeInvestment(e)}>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="Prefer not to say"
                                value="Prefer not to say"
                                checked={getpreferences?.investment === "Prefer not to say"}
                              />
                              <div className="checkbox-lables">
                                {" "}
                                Prefer not to say
                              </div>
                            </label>
                          </li>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="0-400k"
                                value="0-400k"
                                checked={getpreferences?.investment === "0-400k"}
                              />
                              <div className="checkbox-lables">0-400k</div>
                            </label>
                          </li>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="400k-800k"
                                value="400k-800k"
                                checked={getpreferences?.investment === "400k-800k"}
                              />
                              <div className="checkbox-lables">400k-800k</div>
                            </label>
                          </li>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="800k-1.2mil"
                                value="800k-1.2mil"
                                checked={getpreferences?.investment === "800k-1.2mil"}
                              />
                              <div className="checkbox-lables">800k-1.2mil</div>
                            </label>
                          </li>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="1.2mil+"
                                value="1.2mil+"
                                checked={getpreferences?.investment === "1.2mil+"}
                              />
                              <div className="checkbox-lables">1.2mil+</div>
                            </label>
                          </li>
                        </ul>
                      <h3 className="h3">
                        What percentage do you plan on putting as a down
                        payment? This will help analyze Return on Investment
                        values for you.
                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeDownPayment(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Prefer not to say"
                              value="Prefer not to say"
                              checked={getpreferences?.downPayment === "Prefer not to say"}
                            />
                            <div className="checkbox-lables">
                              Prefer not to say
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
                            <div className="checkbox-lables">5%</div>
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
                            <div className="checkbox-lables">10%</div>
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
                            <div className="checkbox-lables">15%</div>
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
                            <div className="checkbox-lables">20%+</div>
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