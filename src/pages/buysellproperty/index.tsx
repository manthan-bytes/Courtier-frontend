// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg_main from "../../assets/images/bg-main.jpg";
import { VolumeMute, VolumeOn, Buyericon, Sellericon } from "../../core/icons";
import "./buysellproperty.scss";
import { ROUTES, SELLER } from "../../core/constants/routes";

const BuySellProperty = () => {
  const navigate = useNavigate();
  const [leadObj, setLeadObj] = useState<any>();
  const [getType, setType] = useState<string>();

  const handleSubmitClick = async () => {
    const leadObj = {
      leadType: getType,
    };
    localStorage.setItem("leadObj", JSON.stringify(leadObj));
    navigate(SELLER.CONTACT_INFO);
  };

  const handleOnChange = async (leadType: string) => {
    setType(leadType);
    const getLeadObj = localStorage.getItem("leadObj");
    if (getLeadObj) {
      const leadObj = JSON.parse(getLeadObj);
      leadObj["leadType"] = leadType;
      setLeadObj(leadObj);
    } else {
      const leadObj = {
        leadType: getType,
      };
      setLeadObj(leadObj);
    }
  };
  useEffect(() => {
    const getLeadObj = localStorage.getItem("leadObj");
    if (getLeadObj) {
      setLeadObj(JSON.parse(getLeadObj));
      setType(JSON.parse(getLeadObj).leadType)
    }
  }, []);
  return (
    <>
      <section className="main-banner-sec buysellproperty-sec property-sec">
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
                  Are you looking to buy or sell property?
                </h2>
                <form>
                  <div className="form-inner-block">
                    <label className="custom-select">
                      <input
                        type="radio"
                        name="layout"
                        checked={leadObj?.leadType === "buyer"}
                        onChange={(e) => handleOnChange("buyer")}
                      />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Buyericon />
                        </span>
                        I’m Buyer
                      </div>
                    </label>
                    <label className="custom-select">
                      <input
                        type="radio"
                        name="layout"
                        checked={leadObj?.leadType === "seller"}
                        onChange={(e) => handleOnChange("seller")}
                      />
                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Sellericon />
                        </span>
                        I’m Seller
                      </div>
                    </label>
                  </div>
                  <div
                    onClick={handleSubmitClick}
                    className="theme_btn grdnt_btn"
                  >
                    Go To Contact Info
                  </div>
                </form>
              </div>
              <div className="volume-btn">
                <div className="volume volumeoff">
                  <VolumeMute />
                </div>
                <div className="volume volumeon">
                  <VolumeOn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuySellProperty;
