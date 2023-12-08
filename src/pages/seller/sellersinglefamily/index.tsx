// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../sellersinglefamily/sellersinglefamily.scss";
import bg_main from "../../../assets/images/bg-main.jpg";

const SellerSingleFamily = () => {

  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
  }, []);
      

  return (
    <>
      <section className={`main-banner-sec singlefamily-sec ${ newClass ? "next-class" : "" }`}>
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
                  Great 💫
                  <br />
                  We would like to know more about your Property!
                </h2>
                <form>
                  <Link
                    to="/seller/singlefamilyhomestyle"
                    className="theme_btn grdnt_btn"
                  >
                    LET’S CONTINUE
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

export default SellerSingleFamily;
