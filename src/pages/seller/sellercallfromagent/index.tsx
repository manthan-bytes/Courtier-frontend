// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../sellercallfromagent/sellercallfromagent.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import greaticon from "../../../assets/images/greaticon.svg";
import { TEXT } from "../../../core/constants/headingText";
import { useTranslation } from "react-i18next";

const SellerCallFromAgent = () => {
  const { t } = useTranslation();
    // banner slide animation js
    const [newClass, setNewClass] = useState(false);
    useEffect(() => {
      const element: any = document.getElementById("header");
      if (element) {
        element.classList.add("header-bk");
      }
      setNewClass(true);
    }, []);

  return (
    <>
      <section className={`main-banner-sec callfromagent-sec ${ newClass ? "next-class" : "" }`}>
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
                  {t("agent_call")}
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
