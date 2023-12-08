// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./buyersinglefamily.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import singlefamily from "../../../assets/images/single-family.jpg";
import { RightIcon } from "../../../core/icons";

const BuyerSingleFamily = () => {

    // banner slide animation js
    const [newClass, setNewClass] = useState(false);
    useEffect(() => {
      setNewClass(true);
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
                        Ok great! What's your home-type preference?
                      </h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="homes" value="homes" />
                            <div className="checkbox-lables">Don't Care</div>
                          </label>
                        </li>
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
                        What is your building type preference?
                      </h3>
                      <ul className="property-select">
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="Hometype"
                            />
                            <div className="checkbox-lables">Don't Care</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Hometype"
                              value="Hometype"
                            />
                            <div className="checkbox-lables">Detached Home</div>
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
                        How many bedrooms do you wish for? If you need an
                        office, please count it as a bedroom.
                      </h3>

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
                      <h3 className="h3">
                        How many bathrooms would you wish for?
                      </h3>
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
                      <h3 className="h3">Do you want a garage?</h3>
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
                      <h3 className="h3">Do you want a pool?</h3>
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
                      <h3 className="h3">
                        What is your budget for the family home - this will help
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

export default BuyerSingleFamily;
