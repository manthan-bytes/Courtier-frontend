// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../location/location.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import Select from "react-select";
import { CloseIconv1 } from "../../core/icons";
import { BUYER, SELLER } from "../../core/constants/routes";

const Location = () => {
  const options: any = [
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

  const navigate = useNavigate();
  const [getLocation, setLocation] = useState<any>();
  const [getBoroughs, setBoroughs] = useState<any>();
  const [options1, setOptions] = useState<any>({  label: "Quebec" });


  const [leadObj, setLeadObj] = useState<any>();
  const [locationOptions, setLocationOption] = useState<any>([]);

  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  const handleAddDropdown = () => {
    setLocationOption([...locationOptions, { city: "", boroughs: "" }]);
  };

  const handleDeleteDropdown = () => {
    if (locationOptions.length > 0) {
      const newDropdowns = [...locationOptions];
      newDropdowns.pop();
      setLocationOption(newDropdowns);
    }
  };

  const handleBackClick = () => {
    if (leadObj.leadType === 'seller') {
      navigate(SELLER.CONTACT_INFO);

    } 
    if (leadObj.leadType === 'buyer') {
      navigate(BUYER.CONTACT_INFO);

    }
  }

  const handleSubmitClick = async () => {
    console.log("🚀 ~ file: index.tsx:77 ~ handleOnChange ~ locationOptions:", locationOptions)
    const getLeadObj = localStorage.getItem("leadObj");
   
    if (getLeadObj) {
      leadObj["location"] = locationOptions;
      setLeadObj(leadObj);
    } else {
      const leadObj = {
        location: locationOptions,
      };
      setLeadObj(leadObj);
    }
    localStorage.setItem("leadObj", JSON.stringify(leadObj));
    
    if (leadObj.leadType === 'seller') {
      navigate(SELLER.PROPERTY_TYPE);

    } 
    if (leadObj.leadType === 'buyer') {
      navigate(BUYER.PROPERTY_TYPE);

    }
  };

  const handleOnChangeLocation = async (selectedValue: any, index: number) => {
  const data = [...locationOptions]
  data[index].city = selectedValue.value;
  setLocationOption(data)
  };

  const handleOnChangeBoroughs = async (selectedValue: any, index: number) => {
      const data = [...locationOptions]
      data[index].boroughs = selectedValue.value;
      setLocationOption(data)
    };

  useEffect(() => {
    setNewClass(true);
    const getLeadObj = localStorage.getItem("leadObj");
    console.log("🚀 ~ file: index.tsx:129 ~ useEffect ~ getLeadObj:", getLeadObj)
    if (getLeadObj) {
      const leadObj = JSON.parse(getLeadObj);
      setLeadObj(leadObj);

      if (leadObj.location) {
        setLocationOption(leadObj.location);
      } else {
        setLocationOption([...locationOptions, { city: "", boroughs: "" }]);
      }
    }

  }, []);

  return (
    <>
      <section
        className={`main-banner-sec location-sec ${
          newClass ? "next-class" : ""
        } `}
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
                  {locationOptions && locationOptions.length > 0 && locationOptions.map((location: any, index: number) => (
                    <div className="form-inner-block">
                     

                      <Select className="select-main-wrap" name="location" value={{label: location.city}} options={options} onChange={(e) => handleOnChangeLocation(e, index)}/>
                      <Select className="select-main-wrap" name="boroughs" value={{label: location.boroughs}} options={options} onChange={(e) => handleOnChangeBoroughs(e, index)}/>
                      {locationOptions.length - 1 === index && (
                        <div
                          onClick={handleAddDropdown}
                          className="addclose-icon"
                        >
                          <span className="text-add">+ADD</span>
                        </div>
                      )}
                      {locationOptions.length > 1 && (
                        <div
                          onClick={handleDeleteDropdown}
                          className="addclose-icon"
                        >
                          <span>
                            <CloseIconv1 />
                          </span>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* <div className="form-inner-block">
                    <Select className="select-main-wrap" options={options} />
                    <Select className="select-main-wrap" options={options} />
                    <div className="addclose-icon">
                      <span>
                        <CloseIconv1 />
                      </span>
                    </div>
                  </div> */}
                  <div className="frm-wrap">
                    <span className="error-msg">
                      Special Characters are not allowed
                    </span>
                  </div>
                  <div onClick={handleBackClick} className="theme_btn">
                    Back
                  </div>
                  <div onClick={handleSubmitClick}
                    
                    className="theme_btn grdnt_btn"
                  >
                    Next Question
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

export default Location;
