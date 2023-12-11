// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../sellercondoproperty/sellercondoproperty.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import condoproperty from "../../../assets/images/condoproperty.jpg";
import { RightIcon } from "../../../core/icons";

const SellerCondoProperty = () => {

  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
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
                  <h2 className="h2">Share info about Condo Property</h2>
                  <Link
                    to="/seller/propertysold"
                    className="theme_btn grdnt_btn"
                  >
                    Submit
                  </Link>
                </div>

                <form>
                  <div className="form-inner-block">
                    <div className="form-left-content">
                      <h3 className="h3">What's the condo style</h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="homes" value="homes" />
                            <div className="checkbox-lables">One Floor</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="homes" value="homes" />
                            <div className="checkbox-lables">Many Floors</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="homes" value="homes" />
                            <div className="checkbox-lables">
                              Multiple Platforms
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="homes" value="homes" />
                            <div className="checkbox-lables">
                              One floor and a half
                            </div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">
                        How much space does your condo have?
                      </h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="Hometype"
                            />
                            <div className="checkbox-lables">300-600 sqft</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="Hometype"
                            />
                            <div className="checkbox-lables">600-900 sqft</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="Hometype"
                            />
                            <div className="checkbox-lables">900-1200 sqft</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="Hometype"
                            />
                            <div className="checkbox-lables">1200+ sqft</div>
                          </label>
                        </li>
                      </ul>

                      <h3 className="h3">How many bedrooms do you have?</h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bedrooms"
                              value="bedrooms"
                            />
                            <div className="checkbox-lables">1</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bedrooms"
                              value="bedrooms"
                            />
                            <div className="checkbox-lables">2</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bedrooms"
                              value="bedrooms"
                            />
                            <div className="checkbox-lables">3</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bedrooms"
                              value="bedrooms"
                            />
                            <div className="checkbox-lables">4</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bedrooms"
                              value="bedrooms"
                            />
                            <div className="checkbox-lables">5+</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">And, how many Bathrooms ?</h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bathrooms"
                              value="bathrooms"
                            />
                            <div className="checkbox-lables">1</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bathrooms"
                              value="bathrooms"
                            />
                            <div className="checkbox-lables">2</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bathrooms"
                              value="bathrooms"
                            />
                            <div className="checkbox-lables">3</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bathrooms"
                              value="bathrooms"
                            />
                            <div className="checkbox-lables">4</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="bathrooms"
                              value="bathrooms"
                            />
                            <div className="checkbox-lables">5+</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">Do you have a Garage?</h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="garage" value="garage" />
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>Yes</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="garage" value="garage" />
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>No</span>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">Do you have a pool?</h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="pool" value="pool" />
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>Yes</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="pool" value="pool" />
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
