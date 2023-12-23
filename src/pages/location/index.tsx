// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../location/location.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import Select from "react-select";
import { CloseIconv1 } from "../../core/icons";
import { BUYER, SELLER } from "../../core/constants/routes";
import { BOROUGHS } from "../../core/constants/boroughs";
import { CITIES } from "../../core/constants/cities";
import { ToastContainer, toast } from "react-toastify";
import { LOCATION } from "../../core/constants/toast-message";
import { NEWCITIES } from "../../core/constants/listOfCities";
import { TEXT } from "../../core/constants/headingText";

const Location = () => {
  const boroughs: any = [];

  const options: any = CITIES;

  const navigate = useNavigate();
  const [getLocation, setLocation] = useState<any>();
  const [getBoroughs, setBoroughs] = useState<any>();
  const [options1, setOptions] = useState<any>({ label: "Quebec" });

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
    if (leadObj.leadType === "seller") {
      navigate(SELLER.CONTACT_INFO);
    }
    if (leadObj.leadType === "buyer") {
      navigate(BUYER.CONTACT_INFO);
    }
  };

  const handleSubmitClick = async () => {
    const element: any = document.getElementById("submit");
    if (element) {
      element.classList.add("loader-btn");
    }
    const getLeadObj = localStorage.getItem("leadObj");
    console.log("locationOptions", locationOptions);

    if (locationOptions.length > 0) {
      if (locationOptions.length === 1) {
        if (!locationOptions[0].city && !locationOptions[0].boroughs) {
          toast.error(LOCATION, {
            position: toast.POSITION.TOP_RIGHT,
          });
          element.classList.remove("loader-btn");
          return;
        }
      }
      if (getLeadObj) {
        leadObj["location"] = JSON.stringify(locationOptions);
        setLeadObj(leadObj);
      } else {
        const leadObj = {
          location: locationOptions,
        };
        setLeadObj(leadObj);
      }
      localStorage.setItem("leadObj", JSON.stringify(leadObj));
      element.classList.remove("loader-btn");
      if (leadObj.leadType === "seller") {
        navigate(SELLER.PROPERTY_TYPE);
      }
      if (leadObj.leadType === "buyer") {
        navigate(BUYER.PROPERTY_TYPE);
      }
    } else {
      toast.error(LOCATION, {
        position: toast.POSITION.TOP_RIGHT,
      });
      element.classList.remove("loader-btn");
    }
  };

  const handleOnChangeLocation = async (selectedValue: any, index: number) => {
    const data = [...locationOptions];
    data[index].city = selectedValue.value;
    const selectedCityDate: any = NEWCITIES.find(
      (o: any) => o.city.value === selectedValue.value
    );
    setBoroughs(selectedCityDate.boroughs);
    setLocationOption(data);
  };

  const handleOnChangeBoroughs = async (selectedValue: any, index: number) => {
    const data = [...locationOptions];
    data[index].boroughs = selectedValue.value;
    setLocationOption(data);
  };

  useEffect(() => {
    const element: any = document.getElementById("header");
    if (element) {
      element.classList.add("header-bk");
    }
    setNewClass(true);
    const getLeadObj = localStorage.getItem("leadObj");
    if (getLeadObj) {
      const leadObj = JSON.parse(getLeadObj);
      setLeadObj(leadObj);

      if (leadObj.location) {
        setLocationOption(JSON.parse(leadObj.location));
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
                <h2 className="h2">📍{TEXT.property_location}</h2>
                <form>
                  {locationOptions &&
                    locationOptions.length > 0 &&
                    locationOptions.map((location: any, index: number) => (
                      <div className="form-inner-block">
                        <Select
                          className="select-main-wrap"
                          name="location"
                          placeholder="Select a citi"
                          options={options}
                          onChange={(e) => handleOnChangeLocation(e, index)}
                        />
                        <Select
                          className="select-main-wrap"
                          name="boroughs"
                          placeholder="Select a borough"
                          options={getBoroughs}
                          onChange={(e) => handleOnChangeBoroughs(e, index)}
                        />
                        {locationOptions.length - 1 === index &&
                          leadObj.leadType !== "seller" && (
                            <div
                              onClick={handleAddDropdown}
                              className="addclose-icon"
                            >
                              <span className="text-add">{TEXT.add}</span>
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
                    {TEXT.back}
                  </div>
                  <div
                    onClick={handleSubmitClick}
                    className="theme_btn grdnt_btn"
                    id="submit"
                  >
                    <span>{TEXT.next_question}</span>
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
