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
import { BUYER, SELLER } from "../../core/constants/routes";
import { getUser } from "../../service/login.service";
import { createLead } from "../../service/lead.service";
import { toast } from "react-toastify";
import { INVALID_DATA } from "../../core/constants/toast-message";
import { TEXT } from "../../core/constants/headingText";

const PropertyType = () => {
  const navigate = useNavigate();
  const [leadObj, setLeadObj] = useState<any>();
  const [getPropertyType, setPropertyType] = useState<string>();
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  const handleSubmitClick = async () => {
    // to="/seller/inquiryoption"
    // navigate("/seller/inquiryoption")
    // console.log('handle',leadObj)
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
    const element: any = document.getElementById("submit");
    if (element) {
      element.classList.add("loader-btn");
    }
    if (getPropertyType) {
      if (leadObj.leadType === "seller") {
        const userEmail = localStorage.getItem("email");
        const userDetails = await getUser(userEmail);

        if (leadObj && userDetails) {
          const dataObj = leadObj;
          dataObj["userId"] = userDetails.data.id;
          const lead = await createLead(dataObj);
          if (lead.statusCode === 201) {
            dataObj["id"] = lead.data.id;
            const leadObjData = JSON.stringify(dataObj);
            localStorage.setItem("leadObj", leadObjData);
            toast.success(lead.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
            element.classList.remove("loader-btn");
            navigate(SELLER.INQUIRY_OPTION);
          } else {
            toast.error(lead.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
            element.classList.remove("loader-btn");
          }
        } else {
          toast.error(INVALID_DATA, {
            position: toast.POSITION.TOP_RIGHT,
          });
          element.classList.remove("loader-btn");
        }
      }

      if (leadObj.leadType === "buyer") {
        const userEmail = localStorage.getItem("email");

        const userDetails = await getUser(userEmail);

        if (leadObj && userDetails) {
          const dataObj = leadObj;
          dataObj["userId"] = userDetails.data.id;
          const lead = await createLead(dataObj);
          if (lead.statusCode === 201) {
            dataObj["id"] = lead.data.id;
            const leadObjData = JSON.stringify(dataObj);
            localStorage.setItem("leadObj", leadObjData);
            toast.success(lead.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
            element.classList.remove("loader-btn");
            navigate(BUYER.INQUIRY_OPTION);
          } else {
            toast.error(lead.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
            element.classList.remove("loader-btn");
          }
        } else {
          toast.error(INVALID_DATA, {
            position: toast.POSITION.TOP_RIGHT,
          });
          element.classList.remove("loader-btn");
        }
      }
    } else {
      toast.error(INVALID_DATA, {
        position: toast.POSITION.TOP_RIGHT,
      });
      element.classList.remove("loader-btn");
    }
    // if (leadObj.leadType === "buyer") {
    //   const userEmail = localStorage.getItem("email");

    //   const userDetails = await getUser(userEmail);

    //   if (leadObj && userDetails) {
    //     const dataObj = leadObj;
    //     dataObj["userId"] = userDetails.data.id;
    //     const lead = await createLead(dataObj);
    //     if (lead.statusCode === 201) {
    //       dataObj["id"] = lead.data.id;
    //       const leadObjData = JSON.stringify(dataObj);
    //       localStorage.setItem("leadObj", leadObjData);
    //       navigate(BUYER.INQUIRY_OPTION);
    //     }
    //   } else {
    //     //TODO: Something went wrong
    //   }
    // }
    // navigate(SELLER.CONTACT_INFO);
  };

  const handleBackClick = () => {
    if (leadObj.leadType === "seller") {
      navigate(SELLER.LOCATION);
    }
    if (leadObj.leadType === "buyer") {
      navigate(BUYER.LOCATION);
    }
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
    const element:any = document.getElementById("header");
    if (element) {
      element.classList.add('header-bk')
    }
    setNewClass(true);
    const getLeadObj = localStorage.getItem("leadObj");
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
                 {TEXT.property_type}
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
                        {TEXT.condo}
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
                        {TEXT.revenue_property}
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
                        {TEXT.commercial_or_industrial}
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
                        {TEXT.land_field}
                      </div>
                    </label>
                  </div>
                  <div onClick={handleBackClick} className="theme_btn">
                    {TEXT.back}
                  </div>
                  <div
                    onClick={handleSubmitClick}
                    className="theme_btn grdnt_btn"
                    id="submit"
                  >
                    <span>
                   {TEXT.next_question}
                   </span>
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
