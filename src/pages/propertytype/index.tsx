// create dashboard page component
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../propertytype/propertytype.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import {
  Familyicon,
  Condoicon,
  Propertyicon,
  Industrialicon,
  Landfieldicon,
} from "../../core/icons";

const PropertyType = () => {
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
  }, []);

  return (
    <>
      <section
        className={`main-banner-sec property-sec ${
          newClass ? "next-class" : ""
        }`}
      >
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
                <h2 className="h2">
                  What type of property are you wishing to sell?
                </h2>
                <form>
                  <div className="form-inner-block">
                    <label className="custom-select">
                      <input type="radio" name="layout" value="L" />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Familyicon />
                        </span>
                        Single Family
                      </div>
                    </label>
                    <label className="custom-select">
                      <input type="radio" name="layout" value="L" />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Condoicon />
                        </span>
                        Condo
                      </div>
                    </label>
                    <label className="custom-select">
                      <input type="radio" name="layout" value="L" />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Propertyicon />
                        </span>
                        Revenue Property
                      </div>
                    </label>
                    <label className="custom-select">
                      <input type="radio" name="layout" value="L" />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Industrialicon />
                        </span>
                        Commercial or Industrial
                      </div>
                    </label>
                    <label className="custom-select">
                      <input type="radio" name="layout" value="L" />
                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Landfieldicon />
                        </span>
                        Land / Field
                      </div>
                    </label>
                  </div>
                  <Link to="/" className="theme_btn">
                    Back
                  </Link>
                  <Link
                    to="/seller/inquiryoption"
                    className="theme_btn grdnt_btn"
                  >
                    Next Question
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyType;
