// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./buyerrevenueproperty.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import revenueproperty from "../../../assets/images/revenueproperty.jpg";

const BuyerRevenueProperty = () => {

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
                  <h2 className="h2">
                    Share info about Revenue Property property
                  </h2>
                  <Link
                    to="/buyer/searchproperty"
                    className="theme_btn grdnt_btn"
                  >
                    Submit
                  </Link>
                </div>

                <form>
                  <div className="form-inner-block">
                    <div className="form-left-content">
                      <h3 className="h3">
                        Ok great! What type of tenants would you prefer?
                      </h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
                            <div className="checkbox-lables">Any Type</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
                            <div className="checkbox-lables">Residential</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
                            <div className="checkbox-lables">Commercial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
                            <div className="checkbox-lables">Bureaux</div>
                          </label>
                        </li>

                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
                            <div className="checkbox-lables">Entrepot</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
                            <div className="checkbox-lables">Industrial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
                            <div className="checkbox-lables">
                              Commercial & Bureau
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
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
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
                            />
                            <div className="checkbox-lables">Any Type</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
                            />
                            <div className="checkbox-lables">Duplex</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
                            />
                            <div className="checkbox-lables">Triplex</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
                            />
                            <div className="checkbox-lables">Quadruplex</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
                            />
                            <div className="checkbox-lables">Quintuplex</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
                            />
                            <div className="checkbox-lables">Autre</div>
                          </label>
                        </li>
                        <h3 className="h3">
                          What is your budget for your investment - this will
                          help refine our search for you.
                        </h3>
                        <ul className="property-select">
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="homeyear"
                                value="homeyear"
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
                                name="homeyear"
                                value="homeyear"
                              />
                              <div className="checkbox-lables">0-400k</div>
                            </label>
                          </li>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="homeyear"
                                value="homeyear"
                              />
                              <div className="checkbox-lables">400k-800k</div>
                            </label>
                          </li>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="homeyear"
                                value="homeyear"
                              />
                              <div className="checkbox-lables">800k-1.2mil</div>
                            </label>
                          </li>
                          <li>
                            <label className="custom-checkbox-btn">
                              <input
                                type="radio"
                                name="homeyear"
                                value="homeyear"
                              />
                              <div className="checkbox-lables">1.2mil+</div>
                            </label>
                          </li>
                        </ul>
                      </ul>
                      <h3 className="h3">
                        What percentage do you plan on putting as a down
                        payment? This will help analyze Return on Investment
                        values for you.
                      </h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="investment"
                              value="investment"
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
                              name="investment"
                              value="investment"
                            />
                            <div className="checkbox-lables">5%</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="investment"
                              value="investment"
                            />
                            <div className="checkbox-lables">10%</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="investment"
                              value="investment"
                            />
                            <div className="checkbox-lables">15%</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="investment"
                              value="investment"
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
