// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../location/location.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import Select from "react-select";
import { CloseIconv1 } from "../../core/icons";

const Location = () => {
  const options = [
    { value: "Quebec", label: "Quebec" },
    { value: "Saguenay", label: "Saguenay" },
    { value: "Saint-Sauveur", label: "Saint-Sauveur" },
    { value: "Bonaventure", label: "Bonaventure" },
    { value: "Bois-des-Filion", label: "Bois-des-Filion" },
    { value: "Saint-Basile-le-Grand", label: "Saint-Basile-le-Grand" },
    { value: "Dollard-des-Ormeaux", label: "Dollard-des-Ormeaux" },
    {
      value: "Notre-Dame-de-l'Île-Perrot",
      label: "Notre-Dame-de-l'Île-Perrot",
    },
    {
      value: "Notre-Dame-de-l'Île-Perrot",
      label: "Notre-Dame-de-l'Île-Perrot",
    },
    { value: "Val-Morin", label: "Val-Morin" },
    { value: "Albanel", label: "Albanel" },
    { value: "Berthierville", label: "Berthierville" },
    { value: "Coteau-du-Lac", label: "Coteau-du-Lac" },
    { value: "Victoriaville", label: "Victoriaville" },
    { value: "Varennes", label: "Varennes" },
    { value: "Saint-Lin-Laurentides", label: "Saint-Lin-Laurentides" },
    { value: "Batiscan", label: "Batiscan" },
  ];

  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
  }, []);

  return (
    <>
      <section
        className={`main-banner-sec location-sec ${
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
                  📍What location is your property located in?
                </h2>
                <form>
                  <div className="form-inner-block">
                    <Select className="select-main-wrap" options={options} />
                    <Select className="select-main-wrap" options={options} />
                    <div className="addclose-icon" ><span className="text-add">+ADD</span></div>
                  </div>
                  <div className="form-inner-block">
                    <Select className="select-main-wrap" options={options} />
                    <Select className="select-main-wrap" options={options} />
                    <div className="addclose-icon"><span><CloseIconv1/></span></div>
                  </div>
                  <div className="frm-wrap">
                    <span className="error-msg">
                      Special Characters are not allowed
                    </span>
                  </div>
                  <Link to="/" className="theme_btn">
                    Back
                  </Link>
                  <Link
                    to="/seller/propertytype"
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

export default Location;
