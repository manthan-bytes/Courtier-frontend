// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./buyeraboutlandfield.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import aboutlandfield from "../../../assets/images/aboutlandfield.jpg";

const BuyerAboutLandField = () => {

  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
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
                  <h2 className="h2">Share info about Land/field</h2>
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
                        Are you looking for Land with city services available
                        ready to be developed, or a field with no city services?
                      </h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="LandField"
                              value="LandField"
                            />
                            <div className="checkbox-lables">Land</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="LandField"
                              value="LandField"
                            />
                            <div className="checkbox-lables">Field</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">What city zonage do you hope for?</h3>
                      <ul className="property-select">
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
                            <div className="checkbox-lables">Industrial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
                            <div className="checkbox-lables">Agriculture</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
                            <div className="checkbox-lables">Forestry</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
                            <div className="checkbox-lables">Other</div>
                          </label>
                        </li>
                      </ul>

                      <h3 className="h3">What's the surface area that you need or hope for?</h3>
                     
                      <div className="form-group mtbottom property-select">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Avg Gross Revenue"
                          name="Email"
                        />
                      </div>
                      <h3 className="h3">
                        What is your budget for your purchase - this will help
                        refine our search for you.
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
