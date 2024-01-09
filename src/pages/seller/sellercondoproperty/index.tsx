// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../sellercondoproperty/sellercondoproperty.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import condoproperty from "../../../assets/images/condoproperty.jpg";
import { RightIcon } from "../../../core/icons";
import { updateLead } from "../../../service/lead.service";
import { SELLER } from "../../../core/constants/routes";
import { toast } from "react-toastify";
import { TEXT } from "../../../core/constants/headingText";

const SellerCondoProperty = () => {
  const navigate = useNavigate();

  const [leadObj, setLeadObj] = useState<any>();
  const [getpreferences, setpreferences] = useState<any>();
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);

  const handleonChangeCondoStyle = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['condoStyle'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangeCondoSpace = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['condoSpace'] = e.target.value
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
    selectedDataObj['isParking'] = e.target.value
    setpreferences(selectedDataObj);

  }
  const handleonChangePool = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['isPool'] = e.target.value
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
                  <h2 className="h2">What are some characteristics of the Condo property you're looking to sell? </h2>
                  <div onClick={handleSubmitClick}
                    className="theme_btn grdnt_btn"
                    id="submit"
                  >
                    <span>
                      {TEXT.submit}
                    </span>
                  </div>
                </div>

                <form>
                  <div className="form-inner-block">
                    <div className="form-left-content">
                      <h3 className="h3">What's the condo style</h3>
                      <ul className="property-select" onChange={(e) => handleonChangeCondoStyle(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="homes" value="One Floor" checked={getpreferences?.condoStyle === "One Floor"}/>
                            <div className="checkbox-lables">One Floor</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="homes" value="Many Floors" checked={getpreferences?.condoStyle === "Many Floors"}/>
                            <div className="checkbox-lables">Many Floors</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="homes" value="Multiple Platforms" checked={getpreferences?.condoStyle === "Multiple Platforms"}/>
                            <div className="checkbox-lables">
                              Multiple Platforms
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="homes" value="One floor and a half" checked={getpreferences?.condoStyle === "One floor and a half"}/>
                            <div className="checkbox-lables">
                              One floor and a half
                            </div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">
                        How much space does your condo have?
                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeCondoSpace(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="300-600 sqft"
                              checked={getpreferences?.condoSpace === "300-600 sqft"}
                            />
                            <div className="checkbox-lables">300-600 sqft</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="600-900 sqft"
                              checked={getpreferences?.condoSpace === "600-900 sqft"}
                            />
                            <div className="checkbox-lables">600-900 sqft</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="900-1200 sqft"
                              checked={getpreferences?.condoSpace === "900-1200 sqft"}
                            />
                            <div className="checkbox-lables">900-1200 sqft</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="1200+ sqft"
                              checked={getpreferences?.condoSpace === "1200+ sqft"}
                            />
                            <div className="checkbox-lables">1200+ sqft</div>
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
                      <h3 className="h3">Do you have a dedicated Parking Space?</h3>
                      <ul className="property-select" onChange={(e) => handleonChangeGarage(e)}>
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="parking" value="yes" checked={getpreferences?.isParking === "yes"} />
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>Yes</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="parking" value="no" checked={getpreferences?.isParking === "no"}/>
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
                    </div>
                    <div className="form-right-img">
                      <img
                        src={condoproperty}
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

export default SellerCondoProperty;
