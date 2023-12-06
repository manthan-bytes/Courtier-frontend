// create dashboard page component
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sellersinglefamilyhomestyle/sellersinglefamilyhomestyle.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import singlefamily from "../../../assets/images/single-family.jpg";
import { RightIcon } from "../../../core/icons";

const SellerSingleFamilyHomestyle = () => {
  useEffect(() => {
    console.log("test");
  });
  return (
    <>
      <section className="main-banner-sec singlefamilyhomestyle-sec">
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
                      <h3 className="h3">What's your homes' style?</h3>
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
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="homes" value="homes" />
                            <div className="checkbox-lables">Mobile House</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">
                        What's your building type preference?
                      </h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="Hometype"
                            />
                            <div className="checkbox-lables">Single Home</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="Hometype"
                            />
                            <div className="checkbox-lables">Paired</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="Hometype"
                            />
                            <div className="checkbox-lables">In a row</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="Hometype"
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
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="homeyear"
                              value="homeyear"
                            />
                            <div className="checkbox-lables">Before 1960</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="homeyear"
                              value="homeyear"
                            />
                            <div className="checkbox-lables">1960-2000</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="homeyear"
                              value="homeyear"
                            />
                            <div className="checkbox-lables">2000-now</div>
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
                      <h3 className="h3">Is it an intergeneration home?</h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="inthome" value="inthome" />
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>Yes</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox">
                            <input type="radio" name="inthome" value="inthome" />
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>No</span>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">What is the approximate land area ?</h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="homeyear"
                              value="homeyear"
                            />
                            <div className="checkbox-lables"> 2,500 Square Feet</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="homeyear"
                              value="homeyear"
                            />
                            <div className="checkbox-lables">2,500 - 5,000 Square Feet</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="homeyear"
                              value="homeyear"
                            />
                            <div className="checkbox-lables">5,000 - 8,000 Square Feet</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="homeyear"
                              value="homeyear"
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
