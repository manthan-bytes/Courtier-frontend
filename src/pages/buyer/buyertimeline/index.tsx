// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./buyertimeline.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { updateLead } from "../../../service/lead.service";
import { BUYER } from "../../../core/constants/routes";
import { toast } from "react-toastify";

const BuyerTimeLine = () => {
  const navigate = useNavigate();
  const [leadObj, setLeadObj] = useState<any>();
  const [getpropertyPurchaseTime, setpropertyPurchaseTime] = useState<any>();
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  const handleOnChange = async (e:any) => {
    setpropertyPurchaseTime(e.target.value);
  }

  const handleSubmitClick = async (e: any) => {
    const leadDataObj = leadObj;
    const leadId = leadDataObj.id;
    leadDataObj['propertyPurchaseTime'] = getpropertyPurchaseTime;
    localStorage.setItem('leadObj', JSON.stringify(leadDataObj));
    const leadUpdate = await updateLead(leadId, leadDataObj);
    if (leadUpdate.statusCode === 200) {
      toast.success(leadUpdate.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate(BUYER.AGENT)
    } else {
      toast.error(leadUpdate.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
  const handleBackClick = async () => {
    navigate(BUYER.SINGLE_FAMILY)
  }

  useEffect(() => {
    setNewClass(true);
    const getLeadObj = localStorage.getItem("leadObj");
    if (getLeadObj) {
      const leadObj = JSON.parse(getLeadObj);
      setLeadObj(leadObj);
      const propertyPurchaseTime = leadObj.propertyPurchaseTime;
      if (propertyPurchaseTime) {
        setpropertyPurchaseTime(propertyPurchaseTime)
      } else {
        setpropertyPurchaseTime('')
      }
    }
  }, []);

  return (
    <>
      <section className={`main-banner-sec propertysold-sec ${ newClass ? "next-class" : "" }`}>
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
                Whats your timeline for this purchase?
                </h2>
                <form>
                  <ul className="property-select" onChange={(e) => handleOnChange(e)}>
                  <li>
                      <label className="custom-checkbox-btn">
                        <input type="radio" name="layout" value="ASAP" checked={getpropertyPurchaseTime === "ASAP"}/>

                        <div className="checkbox-lables">ASAP</div>
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox-btn">
                        <input type="radio" name="layout" value="1 - 2 Months" checked={getpropertyPurchaseTime === "1 - 2 Months"}/>

                        <div className="checkbox-lables">1 - 2 Months</div>
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox-btn">
                        <input type="radio" name="layout" value="2 - 6 Months" checked={getpropertyPurchaseTime === "2 - 6 Months"}/>

                        <div className="checkbox-lables">2 - 6 Months</div>
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox-btn">
                        <input type="radio" name="layout" value="6+ Months" checked={getpropertyPurchaseTime === "6+ Months"}/>

                        <div className="checkbox-lables">6+ Months</div>
                      </label>
                    </li>
                  </ul>
                  <div onClick={handleBackClick}
                    className="theme_btn"
                  > 
                    BACK
                  </div>
                  <div onClick={handleSubmitClick}
                    className="theme_btn grdnt_btn"
                  >
                   NEXT QUESTION
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

export default BuyerTimeLine;
