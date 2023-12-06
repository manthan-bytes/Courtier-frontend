// create dashboard page component
import React from "react";
import { Link } from "react-router-dom";
import "../selleraboutlandfield/selleraboutlandfield.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import landfield from "../../../assets/images/landfield.jpg";

const SellerAboutLandField = () => {
  return (
    <>
      <section className="main-banner-sec aboutlandfield-sec">
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
                  <h2 className="h2">Share info about Land/Field</h2>
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
                      <h3 className="h3">
                        Is it Land with city services available or a Field with
                        no city services? (Electrical, Sewers, roads)
                      </h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="LandField" value="LandField" />
                            <div className="checkbox-lables">Land</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="LandField" value="LandField" />
                            <div className="checkbox-lables">Field</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">What is the city zonage you have?</h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="city"
                              value="city"
                            />
                            <div className="checkbox-lables">Residential</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="city"
                              value="city"
                            />
                            <div className="checkbox-lables">Commercial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="city"
                              value="city"
                            />
                            <div className="checkbox-lables">Industrial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="city"
                              value="city"
                            />
                            <div className="checkbox-lables">Agriculture</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="city"
                              value="city"
                            />
                            <div className="checkbox-lables">Forestry</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="city"
                              value="city"
                            />
                            <div className="checkbox-lables">Other</div>
                          </label>
                        </li>
                      </ul>

                      <h3 className="h3">What's the Surface area?</h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="area"
                              value="area"
                            />
                            <div className="checkbox-lables">
                              0 - 2000 sq ft.
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="area"
                              value="area"
                            />
                            <div className="checkbox-lables">
                              2000 - 5000 sq ft.
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="area"
                              value="area"
                            />
                            <div className="checkbox-lables">
                              5000 - 10000 sq ft.
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="area"
                              value="area"
                            />
                            <div className="checkbox-lables">
                              10000+ sq ft.{" "}
                            </div>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="form-right-img">
                      <img
                        src={landfield}
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

export default SellerAboutLandField;
