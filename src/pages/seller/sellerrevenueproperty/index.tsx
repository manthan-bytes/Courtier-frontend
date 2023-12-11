// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../sellerrevenueproperty/sellerrevenueproperty.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import revenueproperty from "../../../assets/images/revenueproperty.jpg";

const SellerRevenueProperty = () => {

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
                  <h2 className="h2">Share info about Revenue Property</h2>
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
                      <h3 className="h3">What is your property meant for?</h3>
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
                            <div className="checkbox-lables">Office</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
                            <div className="checkbox-lables">Warehouse</div>
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
                              Warehouse & Office
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="city" value="city" />
                            <div className="checkbox-lables">
                              Commercial & Office
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
                      <h3 className="h3">What type of Building is it?</h3>
                      <ul className="property-select">
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
                            <div className="checkbox-lables">Other Plex</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="building"
                              value="building"
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
                            type="text"
                            placeholder="Add for Residential"
                            name="Email"
                          />
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Add for Commercial"
                            name="Email"
                          />
                        </div>
                        <div className="total-units">
                          <strong>15</strong>
                          <h4>Total Number Of Units</h4>
                        </div>
                      </div>
                      <h3 className="h3">
                        What is the average annual gross revenue generated?
                      </h3>
                      <div className="form-group mtbottom">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Avg Gross Revenue"
                          name="Email"
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
