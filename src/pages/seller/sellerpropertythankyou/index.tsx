// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sellerpropertythankyou.scss";
import bg_main from "../../../assets/images/bg-main.jpg";

const SellerPropertyThankyou = () => {

  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
  }, []);

  return (
    <>
      <section className={`main-banner-sec propertythankyou-sec ${ newClass ? "next-class" : "" }`}>
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
                  Alright, this was quick and easy, see you again soon!
                </h2>
                <form>
                  <Link to="" className="theme_btn">
                    Take Me to Home
                  </Link>
                  <Link
                    to=""
                    className="theme_btn grdnt_btn"
                  >
                    I need help TO BUY a property
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

export default SellerPropertyThankyou;
