// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../contactinfo/contactinfo.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import { createUser, getUser, updateUser } from "../../service/login.service";
import { log } from "console";
import { BUYER, ROUTES, SELLER } from "../../core/constants/routes";
import { ToastContainer, toast } from "react-toastify";
import { INVALID_DATA, TERMS_CONDITIONS } from "../../core/constants/toast-message";
import { TEXT } from "../../core/constants/headingText";
import { useTranslation } from "react-i18next";
import { RightIcon } from "../../core/icons";

const ContactInfo = () => {
  const navigate = useNavigate();
  // banner slide animation js
  const { t } = useTranslation();

  const [newClass, setNewClass] = useState(false);
  const email = localStorage.getItem("email");
  const [userData, setUserData] = useState<any>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [leadObj, setLeadObj] = useState<any>();
  const [isEmailInValid, setIsEmialInValid] = useState(false);

  // let isSubmitted = false;
  const getUserDetail = async () => {
    const userDetails = await getUser(email);
    setUserData(userDetails.data);
  };

  const handleSubmitEvent = async () => {        
    const element: any = document.getElementById("submit");
    if (element) {
      element.classList.add("loader-btn");
    }
    setIsSubmitted(true);
    if (userData?.name && userData?.phone && userData?.phone.length === 10 && userData?.isUserAgree && isEmailInValid == false) {
      const user = localStorage.getItem('loginasGuest')? await createUser(userData) : await updateUser(userData.id, userData);
      if (user.statusCode === 200 || user.statusCode === 201 || user.statusCode === 400) {
        localStorage.setItem('email', userData.email)
        toast.success(t("USER_CREATED_SUCCESS"), {
          position: toast.POSITION.TOP_RIGHT,
        });
        element.classList.remove("loader-btn");
        if (leadObj.leadType === "seller") {
          navigate(SELLER.LOCATION);
        }

        if (leadObj.leadType === "buyer") {
          navigate(BUYER.LOCATION);
        }
      } else {
        toast.error(user.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        element.classList.remove("loader-btn");
        //TODO
      }
    }
    else if(!userData?.isUserAgree){
      toast.error(t('TERMS_CONDITIONS'), {
        position: toast.POSITION.TOP_RIGHT,
      });
      element.classList.remove("loader-btn");
    }
     else {
      toast.error(t('INVALID_DATA'), {
        position: toast.POSITION.TOP_RIGHT,
      });
      element.classList.remove("loader-btn");

      return false;
    }
  };

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: any) => {
      if (!isValidEmail(event.target.value)) {
        setIsEmialInValid(true);
      } else {
        setIsEmialInValid(false);
      }
  };


  const handleBackEvent = async () => {
    navigate(ROUTES.BUYSELLPROPERTY);
  };

  useEffect(() => {
    const element: any = document.getElementById("header");
    if (element) {
      element.classList.add("header-bk");
    }
    setNewClass(true);
    getUserDetail();
    const getLeadObj = localStorage.getItem("leadObj");
    if (getLeadObj) {
      setLeadObj(JSON.parse(getLeadObj));
    }
  }, []);
  return (
    <section
      className={`main-banner-sec contactinfo-sec ${
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
              <h2 className="h2">{t('provide_contact_info')}</h2>
              {leadObj && leadObj.leadType === "seller" && (
                <p className="sub-tilte">
                  {t('contact_info_1')} <span>{t('contact_info_2')} </span>
                  {t('contact_info_3')}
                </p>
              )}

              {leadObj && leadObj.leadType === "buyer" && (
                <p className="sub-tilte">
                  {t('contact_info_1')} <span>{t('contact_info_4')} </span>
                  {t('contact_info_3')}
                </p>
              )}

              <form>
                <div className="form-inner-block">
                  <div className="form-group-main">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder={t('type_name')}
                        name="Your Name"
                        value={userData?.name}
                        onChange={(e) =>
                          setUserData({ ...userData, name: e.target.value })
                        }
                      />
                      {!userData?.name && isSubmitted && (
                        <span className="error-msg">{t('name_required')}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="number"
                        placeholder={t('phoneNumber')}
                        name="Contact No"
                        value={userData?.phone}
                        maxLength={10}
                        onChange={(e) =>
                          setUserData({ ...userData, phone: e.target.value })
                        }
                      />
                      {!userData?.phone && isSubmitted && (
                        <span className="error-msg">
                          {t('phone_required')}
                        </span>
                      )}
                       {userData?.phone?.length < 10 && isSubmitted && (
                        <span className="error-msg">
                          {t('phone_valid')}
                        </span>
                      )}
                      
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder={t('email')}
                        name="Email"
                        disabled={localStorage.getItem("loginasGuest") ? false : true}
                        value={userData?.email}
                        onChange={(e) =>{
                          setUserData({ ...userData, email: e.target.value });
                          handleChange(e);
                        }}
                      />
                      {!userData?.email && isSubmitted && (
                        <span className="error-msg">
                          {t('email_required')}
                        </span>
                      )}
                      {isEmailInValid && userData?.email && (
                        <span className="error-msg">
                          {t('email_invalid')}
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex" }} className="form-group">

                    <label className="custom-checkbox">
                            <input
                              type="checkbox"
                              name="Terms and Conditions"
                        value={userData?.isUserAgree}
                        onChange={(e) =>
                          setUserData({ ...userData, isUserAgree: e.target.checked })
                        }
                            />
                            <div className="checkbox-lable">
                              <RightIcon />
                            </div>
                            <span>
                      {t('T&C_1')}
                      <Link to={{ pathname: ROUTES.TERMS_CONDITIONS}}> {t('T&C_2')} </Link>
                       {t('T&C_3')}
                      <Link to={{ pathname: ROUTES.PRIVATE_POLICY}}> {t('T&C_4')}</Link>
                      </span>                          </label>
                      {/* <input
                        className="form-control-checkbox"
                        type="checkbox"
                        name="Terms and Conditions"
                        value={userData?.isUserAgree}
                        onChange={(e) =>
                          setUserData({ ...userData, isUserAgree: e.target.checked })
                        }
                      /> */}
                     
                    </div>
                  </div>
                </div>
                <div onClick={handleBackEvent} className="theme_btn">
                  {t('back')}
                </div>
                <div
                  onClick={handleSubmitEvent}
                  className="theme_btn grdnt_btn"
                  id="submit"
                >
                  <span>{t('next_question')}</span>
                </div>
              </form>
            </div>
            {/* <div className="volume-btn">
              <div className="volume volumeoff">
                <VolumeMute />
              </div>
              <div className="volume volumeon">
                <VolumeOn />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
