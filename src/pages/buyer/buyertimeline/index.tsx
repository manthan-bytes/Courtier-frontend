// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./buyertimeline.scss";
import bg_main from "../../../assets/images/bg-main.jpg";

const BuyerTimeLine = () => {

  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
  }, []);

  return (
    <>
      <section className={`main-banner-sec propertysold-sec ${ newClass ? "next-class" : "" }`}>
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
                Whats your timeline for this purchase?
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
                    to="/buyer/searchproperty"
                    className="theme_btn"
                  >
                    BACK
                  </Link>
                  <Link
                    to="/buyer/agent"
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

export default BuyerTimeLine;
