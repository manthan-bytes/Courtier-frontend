// create dashboard page component
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sellercallfromagent/sellercallfromagent.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import greaticon from "../../../assets/images/greaticon.svg";

const SellerCallFromAgent = () => {
  useEffect(() => {
    console.log("test");
  });
  return (
    <>
      <section className="main-banner-sec callfromagent-sec">
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
                <img className="greaticon" src={greaticon} alt="greaticon" width="181" height="181" />
                <h2 className="h2">
                  Great! An agent will call you shortly, see you soon!🙋‍♂️
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerCallFromAgent;
