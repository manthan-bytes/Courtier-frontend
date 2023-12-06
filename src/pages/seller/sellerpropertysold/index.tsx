// create dashboard page component
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sellerpropertysold/sellerpropertysold.scss";
import bg_main from "../../../assets/images/bg-main.jpg";

const SellerPropertySold = () => {
  useEffect(() => {
    console.log("test");
  });
  return (
    <>
      <section className="main-banner-sec propertysold-sec">
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
                  When do you hope to get this property sold?
                </h2>
                <form>
                  <ul className="property-select">
                    <li>
                      <label className="custom-checkbox-btn">
                        <input type="radio" name="layout" value="L" />

                        <div className="checkbox-lables">ASAP</div>
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox-btn">
                        <input type="radio" name="layout" value="L" />

                        <div className="checkbox-lables">1 - 2 Months</div>
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox-btn">
                        <input type="radio" name="layout" value="L" />

                        <div className="checkbox-lables">2 - 6 Months</div>
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox-btn">
                        <input type="radio" name="layout" value="L" />

                        <div className="checkbox-lables">6+ Months</div>
                      </label>
                    </li>
                  </ul>
                  <Link
                    to="/seller/singlefamilyhomestyle"
                    className="theme_btn"
                  >
                    BACK
                  </Link>
                  <Link
                    to="/seller/propertyconformation"
                    className="theme_btn grdnt_btn"
                  >
                    NEXT QUESTION
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

export default SellerPropertySold;
