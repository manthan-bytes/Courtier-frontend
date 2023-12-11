// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [leadObj, setLeadObj] = useState<any>();
  const [getPropertyType, setPropertyType] = useState<string>();
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  const handleSubmitClick = async () => {
    // to="/seller/inquiryoption"
    navigate("/seller/inquiryoption")
    console.log('handle',leadObj)
    // const getLeadObj = localStorage.getItem("leadObj");
    // if (getLeadObj) {
    //   console.log(
    //     "🚀 ~ file: index.tsx:21 ~ handleSubmitClick ~ getLeadObj:",
    //     JSON.parse(getLeadObj)
    //   );
    // }
    // const leadObj = {

    //   propertyType: getPropertyType,
    // };
    localStorage.setItem("leadObj", JSON.stringify(leadObj));
    // navigate(SELLER.CONTACT_INFO);
  };

  const handleOnChange = async (propertyType: string) => {
    setPropertyType(propertyType);
    const getLeadObj = localStorage.getItem("leadObj");
   
    if (getLeadObj) {
      leadObj["propertyType"] = propertyType;
      setLeadObj(leadObj);
    } else {
      const leadObj = {
        propertyType: getPropertyType,
      };
      setLeadObj(leadObj);
    }
  };

  useEffect(() => {
    setNewClass(true);
    const getLeadObj = localStorage.getItem("leadObj");
    console.log(
      "🚀 ~ file: index.tsx:45 ~ useEffect ~ getLeadObj:",
      getLeadObj
    );
    if (getLeadObj) {
      setLeadObj(JSON.parse(getLeadObj));
      setPropertyType(JSON.parse(getLeadObj)?.propertyType);
    }
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
                      <input
                        type="radio"
                        name="layout"
                        checked={leadObj?.propertyType === "single_family"}
                        onChange={(e) => handleOnChange("single_family")}
                      />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Familyicon />
                        </span>
                        Single Family
                      </div>
                    </label>
                    <label className="custom-select">
                      <input
                        type="radio"
                        name="layout"
                        checked={leadObj?.propertyType === "condo"}
                        onChange={(e) => handleOnChange("condo")}
                      />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Condoicon />
                        </span>
                        Condo
                      </div>
                    </label>
                    <label className="custom-select">
                      <input
                        type="radio"
                        name="layout"
                        checked={leadObj?.propertyType === "revenue_property"}
                        onChange={(e) => handleOnChange("revenue_property")}
                      />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Propertyicon />
                        </span>
                        Revenue Property
                      </div>
                    </label>
                    <label className="custom-select">
                      <input
                        type="radio"
                        name="layout"
                        checked={
                          leadObj?.propertyType === "commercial_or_industry"
                        }
                        onChange={(e) =>
                          handleOnChange("commercial_or_industry")
                        }
                      />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Industrialicon />
                        </span>
                        Commercial or Industrial
                      </div>
                    </label>
                    <label className="custom-select">
                      <input
                        type="radio"
                        name="layout"
                        checked={leadObj?.propertyType === "land"}
                        onChange={(e) => handleOnChange("land")}
                      />
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
                  <div
                  onClick={handleSubmitClick}
                    
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

export default PropertyType;
