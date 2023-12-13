// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../sellerrevenueproperty/sellerrevenueproperty.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import revenueproperty from "../../../assets/images/revenueproperty.jpg";
import { updateLead } from "../../../service/lead.service";
import { SELLER } from "../../../core/constants/routes";
import { toast } from "react-toastify";

const SellerRevenueProperty = () => {
  const navigate = useNavigate();

  const [leadObj, setLeadObj] = useState<any>();
  const [getpreferences, setpreferences] = useState<any>();
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);

  const handleonChangePropertyMeant = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['propertyMeant'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangeBuildingType = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['buildingType'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangeResidentialUnit = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['residentialUnit'] = e.target.value
    console.log("🚀 ~ file: index.tsx:35 ~ handleonChangeResidentialUnit ~ selectedDataObj:", selectedDataObj)
    setpreferences(selectedDataObj);

  }

  const handleonChangeCommercialUnit = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['commercialUnit'] = e.target.value
    console.log("🚀 ~ file: index.tsx:43 ~ handleonChangeCommercialUnit ~ selectedDataObj:", selectedDataObj)
    setpreferences(selectedDataObj);

  }

  const handleonChangeAverageRevenue = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['averageRevenue'] = e.target.value
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
      navigate(SELLER.PROPERTY_SOLD)
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
                  <h2 className="h2">Share info about Revenue Property</h2>
                  <div
                    onClick={handleSubmitClick}
                    className="theme_btn grdnt_btn"
                  >
                    Submit
                  </div>
                </div>

                <form>
                  <div className="form-inner-block">
                    <div className="form-left-content">
                      <h3 className="h3">What is your property meant for?</h3>
                      <ul className="property-select" onChange={(e) => handleonChangePropertyMeant(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Residential" value="Residential" checked={getpreferences?.propertyMeant === "Residential"}/>
                            <div className="checkbox-lables">Residential</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Commercial" value="Commercial" checked={getpreferences?.propertyMeant === "Commercial"}/>
                            <div className="checkbox-lables">Commercial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Office" value="Office" checked={getpreferences?.propertyMeant === "Office"}/>
                            <div className="checkbox-lables">Office</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Warehouse" value="Warehouse" checked={getpreferences?.propertyMeant === "Warehouse"}/>
                            <div className="checkbox-lables">Warehouse</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Industrial" value="Industrial" checked={getpreferences?.propertyMeant === "Industrial"}/>
                            <div className="checkbox-lables">Industrial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Warehouse & Office" value="Warehouse & Office" checked={getpreferences?.propertyMeant === "Warehouse & Office"}/>
                            <div className="checkbox-lables">
                              Warehouse & Office
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Commercial & Office" value="Commercial & Office" checked={getpreferences?.propertyMeant === "Commercial & Office"}/>
                            <div className="checkbox-lables">
                              Commercial & Office
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Commercial & Residential" value="Commercial & Residential" checked={getpreferences?.propertyMeant === "Commercial & Residential"}/>
                            <div className="checkbox-lables">
                              Commercial & Residential
                            </div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">What type of Building is it?</h3>
                      <ul className="property-select" onChange={(e) => handleonChangeBuildingType(e)}>
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
                              name="Other Plex"
                              value="Other Plex"
                              checked={getpreferences?.buildingType === "Other Plex"}
                            />
                            <div className="checkbox-lables">Other Plex</div>
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
                            <div className="checkbox-lables">Other</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">
                        How many units does your revenue property have?
                      </h3>
                      <div className="property-select">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Add for Residential"
                            value={getpreferences?.residentialUnit}

                            onChange={(e) => handleonChangeResidentialUnit(e)}
                          />
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Add for Commercial"
                            value={getpreferences?.commercialUnit}
                            onChange={(e) => handleonChangeCommercialUnit(e)}
                          />
                        </div>
                        <div className="total-units">
                          <strong>{getpreferences?.residentialUnit} + {getpreferences?.commercialUnit}</strong>
                          <h4>Total Number Of Units</h4>
                        </div>
                      </div>
                      <h3 className="h3">
                        What is the average annual gross revenue generated?
                      </h3>
                      <div className="form-group mtbottom">
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Avg Gross Revenue"
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
