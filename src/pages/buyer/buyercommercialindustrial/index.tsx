// create dashboard page component
import React from "react";
import { Link } from "react-router-dom";
import "./buyercommercialindustrial.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import commercialindustrial from "../../../assets/images/industrial.jpg";

const BuyerCommercialIndustrial = () => {
  return (
    <>
      <section className="main-banner-sec commane-main industrial-sec">
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
                    Share info about Commercial/Industrial property
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
                        Ok great! Is it a commercial, industrial project or a
                        business you're looking to purchase?
                      </h3>
                      <ul className="property-select">
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
                            <div className="checkbox-lables">Business</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">What is the property used for?</h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
                            />
                            <div className="checkbox-lables">Commercial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
                            />
                            <div className="checkbox-lables">Office</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
                            />
                            <div className="checkbox-lables">Industrial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
                            />
                            <div className="checkbox-lables">
                              Commercial & Office
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
                            />
                            <div className="checkbox-lables">
                              Commercial & Industrial
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
                            />
                            <div className="checkbox-lables">
                              Industrial & Office
                            </div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">
                        Describe the business or businesses in the property
                      </h3>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Describe the business "
                        ></textarea>
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
                        src={commercialindustrial}
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

export default BuyerCommercialIndustrial;
