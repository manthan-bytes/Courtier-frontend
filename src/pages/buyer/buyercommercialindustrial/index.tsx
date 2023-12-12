// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./buyercommercialindustrial.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import commercialindustrial from "../../../assets/images/industrial.jpg";
import { updateLead } from "../../../service/lead.service";
import { BUYER } from "../../../core/constants/routes";

const BuyerCommercialIndustrial = () => {
  const navigate = useNavigate();

  const [leadObj, setLeadObj] = useState<any>();
  const [getpreferences, setpreferences] = useState<any>();
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);

  const handleonChangeProjectType = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['projectType'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangePropertyUsed = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['propertyUsed'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangeDescribeBusiness = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['describeBusiness'] = e.target.value
    setpreferences(selectedDataObj);

  }

  const handleonChangeBudget = async (e:any) => {
    const selectedDataObj = {...getpreferences};
    selectedDataObj['budget'] = e.target.value
    setpreferences(selectedDataObj);

  }
  const handleSubmitClick = async (e: any) => {
    const leadDataObj = leadObj;
    const leadId = leadDataObj.id;
    leadDataObj['preferences'] = getpreferences;
    localStorage.setItem('leadObj', JSON.stringify(leadDataObj));
    const leadUpdate = await updateLead(leadId, leadDataObj);
    if (leadUpdate.statusCode === 200) {
      navigate(BUYER.TIME_LINE)
    }
  }
  useEffect(() => {
    setNewClass(true);
    const getLeadObj = localStorage.getItem("leadObj");
    if (getLeadObj) {
      const leadObj = JSON.parse(getLeadObj);
      setLeadObj(leadObj);
      const preferences = leadObj.preferences;
      if (preferences) {
        console.log("🚀 ~ file: index.tsx:97 ~ useEffect ~ preferences:", preferences)
        setpreferences(preferences)
      } else {
        setpreferences({})
      }
    }
  }, []);

  return (
    <>
      <section className={`main-banner-sec commane-main industrial-sec ${ newClass ? "next-class" : "" }`}>
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
                <div className="heading-top">
                  <h2 className="h2">
                    Share info about Commercial/Industrial property
                  </h2>
                  <div
                    onClick={handleSubmitClick}
                    className="theme_btn grdnt_btn"
                  >
                    Submit
                  </div>
                </div>

                <form>
                  <div className="form-inner-block">
                    <div className="form-left-content">
                      <h3 className="h3">
                        Ok great! Is it a commercial, industrial project or a
                        business you're looking to purchase?
                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeProjectType(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Commercial" value="Commercial" checked={getpreferences?.projectType === "Commercial"}/>
                            <div className="checkbox-lables">Commercial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Industrial" value="Industrial" checked={getpreferences?.projectType === "Industrial"}/>
                            <div className="checkbox-lables">Industrial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input type="radio" name="Business" value="Business" checked={getpreferences?.projectType === "Business"}/>
                            <div className="checkbox-lables">Business</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">What is the property used for?</h3>
                      <ul className="property-select" onChange={(e) => handleonChangePropertyUsed(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Commercial"
                              value="Commercial"
                              checked={getpreferences?.propertyUsed === "Commercial"}
                            />
                            <div className="checkbox-lables">Commercial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Office"
                              value="Office"
                              checked={getpreferences?.propertyUsed === "Office"}
                            />
                            <div className="checkbox-lables">Office</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Industrial"
                              value="Industrial"
                              checked={getpreferences?.propertyUsed === "Industrial"}
                            />
                            <div className="checkbox-lables">Industrial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Commercial & Office"
                              value="Commercial & Office"
                              checked={getpreferences?.propertyUsed === "Commercial & Office"}
                            />
                            <div className="checkbox-lables">Commercial & Office</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Commercial & Industrial"
                              value="Commercial & Industrial"
                              checked={getpreferences?.propertyUsed === "Commercial & Industrial"}
                            />
                            <div className="checkbox-lables">Commercial & Industrial</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Industrial & Office"
                              value="Industrial & Office"
                              checked={getpreferences?.propertyUsed === "Industrial & Office"}
                            />
                            <div className="checkbox-lables">Industrial & Office</div>
                          </label>
                        </li>
                      </ul>
                      <h3 className="h3">
                        Describe the business or businesses in the property
                      </h3>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Describe the business "
                          value={getpreferences?.describeBusiness}
                          onChange={(e) => handleonChangeDescribeBusiness(e)}
                        ></textarea>
                      </div>
                      <h3 className="h3">
                        What is your budget for your purchase - this will help
                        refine our search for you.
                      </h3>
                      <ul className="property-select" onChange={(e) => handleonChangeBudget(e)}>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="Prefer not to say"
                              value="Prefer not to say"
                              checked={getpreferences?.budget === "Prefer not to say"}
                            />
                            <div className="checkbox-lables">
                              {" "}
                              Prefer not to say
                            </div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="0-400k"
                              value="0-400k"
                              checked={getpreferences?.budget === "0-400k"}
                            />
                            <div className="checkbox-lables">0-400k</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="400k-800k"
                              value="400k-800k"
                              checked={getpreferences?.budget === "400k-800k"}
                            />
                            <div className="checkbox-lables">400k-800k</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="800k-1.2mil"
                              value="800k-1.2mil"
                              checked={getpreferences?.budget === "800k-1.2mil"}
                            />
                            <div className="checkbox-lables">800k-1.2mil</div>
                          </label>
                        </li>
                        <li>
                          <label className="custom-checkbox-btn">
                            <input
                              type="radio"
                              name="1.2mil+"
                              value="1.2mil+"
                              checked={getpreferences?.budget === "1.2mil+"}
                            />
                            <div className="checkbox-lables">1.2mil+</div>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="form-right-img">
                      <img
                        src={commercialindustrial}
                        alt="single family img"
                        width="845"
                        height="700"
                      />
                    </div>
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

export default BuyerCommercialIndustrial;
