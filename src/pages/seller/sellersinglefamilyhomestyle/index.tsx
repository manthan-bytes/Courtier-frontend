// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../sellersinglefamilyhomestyle/sellersinglefamilyhomestyle.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import singlefamily from "../../../assets/images/single-family.jpg";
import { RightIcon } from "../../../core/icons";
import { updateLead } from "../../../service/lead.service";
import { SELLER } from "../../../core/constants/routes";
import { toast } from "react-toastify";

const SellerSingleFamilyHomestyle = () => {
  const navigate = useNavigate();
  const [leadObj, setLeadObj] = useState<any>();
  const [getpreferences, setpreferences] = useState<any>();
    // banner slide animation js
    const [newClass, setNewClass] = useState(false);

    const handleonChangeHomeStyle = async (e:any) => {
      
      const selectedDataObj = {...getpreferences};
      selectedDataObj['homeStyle'] = e.target.value
      console.log("🚀 ~ file: index.tsx:22 ~ handleonChangeHomeStyle ~ selectedDataObj:", selectedDataObj)
      setpreferences(selectedDataObj);

    }
    const handleonChangeBuildingType = async (e:any) => {
      const selectedDataObj = {...getpreferences};
      selectedDataObj['buildingType'] = e.target.value
      setpreferences(selectedDataObj);

    }
    const handleonChangeBuiltInYear = async (e:any) => {
      const selectedDataObj = {...getpreferences};
      selectedDataObj['builtInYear'] = e.target.value
      setpreferences(selectedDataObj);

    }

    const handleonChangeBedrooms = async (e:any) => {
      const selectedDataObj = {...getpreferences};
      selectedDataObj['bedrooms'] = e.target.value
      setpreferences(selectedDataObj);

    }

    const handleonChangeBathrooms = async (e:any) => {
      const selectedDataObj = {...getpreferences};
      selectedDataObj['bathrooms'] = e.target.value
      setpreferences(selectedDataObj);

    }

    const handleonChangeGarage = async (e:any) => {
      const selectedDataObj = {...getpreferences};
      selectedDataObj['isGarage'] = e.target.value
      setpreferences(selectedDataObj);

    }
    const handleonChangePool = async (e:any) => {
      const selectedDataObj = {...getpreferences};
      selectedDataObj['isPool'] = e.target.value
      setpreferences(selectedDataObj);

    }
    const handleonChangeIntegration = async (e:any) => {
      const selectedDataObj = {...getpreferences};
      selectedDataObj['isIntegration'] = e.target.value
      setpreferences(selectedDataObj);

    }

    const handleonChangeLandArea = async (e:any) => {
      const selectedDataObj = {...getpreferences};
      selectedDataObj['landArea'] = e.target.value
      console.log("🚀 ~ file: index.tsx:72 ~ handleonChangeLandArea ~ selectedDataObj:", selectedDataObj)
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
      <section className={`main-banner-sec commane-main singlefamilyhomestyle-sec ${ newClass ? "next-class" : "" }`}>
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
                    Share info about Single Family property
                  </h2>
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
                      <h3 className="h3">What's your homes' style?</h3>
                      <ul className="property-select" onChange={(e) => handleonChangeHomeStyle(e)}>
                        <li>
                          <label className="custom-checkbox-btn" >
                            <input type="radio" name="One Floor" value="One Floor" checked={getpreferences?.homeStyle === "One Floor"}/>
                            <div className="checkbox-lables">One Floor</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Many Floors" value="Many Floors" checked={getpreferences?.homeStyle === "Many Floors"}/>
                            <div className="checkbox-lables">Many Floors</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Multiple Platforms" value="Multiple Platforms" checked={getpreferences?.homeStyle === "Multiple Platforms"} />
                            <div className="checkbox-lables">
                              Multiple Platforms
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="One floor and a half" value="One floor and a half" checked={getpreferences?.homeStyle === "One floor and a half"}/>
                            <div className="checkbox-lables">
                              One floor and a half
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Mobile House" value="Mobile House" checked={getpreferences?.homeStyle === "Mobile House"}/>
                            <div className="checkbox-lables">Mobile House</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">
                        What's your building type preference?
                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeBuildingType(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Single Home"
                              value="Single Home"
                              checked={getpreferences?.buildingType === "Single Home"}
                            />
                            <div className="checkbox-lables">Single Home</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Paired"
                              value="Paired"
                              checked={getpreferences?.buildingType === "Paired"}
                            />
                            <div className="checkbox-lables">Paired</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="In a row"
                              value="In a row"
                              checked={getpreferences?.buildingType === "In a row"}

                            />
                            <div className="checkbox-lables">In a row</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Corner, in a row"
                              value="Corner, in a row"
                              checked={getpreferences?.buildingType === "Corner, in a row"}

                            />
                            <div className="checkbox-lables">
                              Corner, in a row
                            </div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">
                        Around what year was your home built in?
                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeBuiltInYear(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Before 1960"
                              value="Before 1960"
                              checked={getpreferences?.builtInYear === "Before 1960"}

                            />
                            <div className="checkbox-lables">Before 1960</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="1960-2000"
                              value="1960-2000"
                              checked={getpreferences?.builtInYear === "1960-2000"}

                            />
                            <div className="checkbox-lables">1960-2000</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="2000-now"
                              value="2000-now"
                              checked={getpreferences?.builtInYear === "2000-now"}

                            />
                            <div className="checkbox-lables">2000-now</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">How many bedrooms do you have?</h3>
                      <ul className="property-select" onChange={(e) => handleonChangeBedrooms(e)}>
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
                      <h3 className="h3">And, how many Bathrooms ?</h3>
                      <ul className="property-select" onChange={(e) => handleonChangeBathrooms(e)}>
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
                      <h3 className="h3">Do you have a Garage?</h3>
                      <ul className="property-select" onChange={(e) => handleonChangeGarage(e)}>
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="garage" value="yes" checked={getpreferences?.isGarage === "yes"} />
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>Yes</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="garage" value="no" checked={getpreferences?.isGarage === "no"}/>
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>No</span>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">Do you have a pool?</h3>
                      <ul className="property-select" onChange={(e) => handleonChangePool(e)}>
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="pool" value="yes" checked={getpreferences?.isPool === "yes"}/>
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>Yes</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="pool" value="no" checked={getpreferences?.isPool === "no"}/>
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>No</span>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">Is it an intergeneration home?</h3>
                      <ul className="property-select" onChange={(e) => handleonChangeIntegration(e)}>
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="inthome" value="yes" checked={getpreferences?.isIntegration === "yes"}/>
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>Yes</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="inthome" value="no" checked={getpreferences?.isIntegration === "no"}/>
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>No</span>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">What is the approximate land area ?</h3>
                      <ul className="property-select" onChange={(e) => handleonChangeLandArea(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="homeyear"
                              value="> 2,500 Square Feet"
                              checked={getpreferences?.landArea === "> 2,500 Square Feet"}
                            />
                            <div className="checkbox-lables"> 2,500 Square Feet</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="homeyear"
                              value="2,500 - 5,000 Square Feet"
                              checked={getpreferences?.landArea === "2,500 - 5,000 Square Feet"}
                            />
                            <div className="checkbox-lables">2,500 - 5,000 Square Feet</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="homeyear"
                              value="5,000 - 8,000 Square Feet"
                              checked={getpreferences?.landArea === "5,000 - 8,000 Square Feet"}
                            />
                            <div className="checkbox-lables">5,000 - 8,000 Square Feet</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="homeyear"
                              value="8,000+ Square Feet"
                              checked={getpreferences?.landArea === "8,000+ Square Feet"}
                            />
                            <div className="checkbox-lables">8,000+ Square Feet</div>
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

export default SellerSingleFamilyHomestyle;
