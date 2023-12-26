// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../contactinfo/contactinfo.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import { getUser, updateUser } from "../../service/login.service";
import { log } from "console";
import { BUYER, ROUTES, SELLER } from "../../core/constants/routes";
import { ToastContainer, toast } from "react-toastify";
import { INVALID_DATA } from "../../core/constants/toast-message";
import { TEXT } from "../../core/constants/headingText";

const ContactInfo = () => {
  const navigate = useNavigate();
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  const email = localStorage.getItem("email");
  const [userData, setUserData] = useState<any>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [leadObj, setLeadObj] = useState<any>();

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
    if (userData?.name && userData?.phone && userData?.phone.length > 0) {
      const user = await updateUser(userData.id, userData);
      if (user.statusCode === 200) {
        toast.success(user.message, {
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
    } else {
      toast.error(INVALID_DATA, {
        position: toast.POSITION.TOP_RIGHT,
      });
      element.classList.remove("loader-btn");

      return false;
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
              <h2 className="h2">{TEXT.provide_contact_info}</h2>
              <p className="sub-tilte">
                Log-in to receive a <span>curated list of Porperties </span>
                24hrs after completing your journey
              </p>
              <form>
                <div className="form-inner-block">
                  <div className="form-group-main">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Type Your Name"
                        name="Your Name"
                        value={userData?.name}
                        onChange={(e) =>
                          setUserData({ ...userData, name: e.target.value })
                        }
                      />
                      {!userData?.name && isSubmitted && (
                        <span className="error-msg">Name is required</span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter Your Contact No"
                        name="Contact No"
                        value={userData?.phone}
                        onChange={(e) =>
                          setUserData({ ...userData, phone: e.target.value })
                        }
                      />
                      {!userData?.phone && isSubmitted && (
                        <span className="error-msg">
                          Contact Number is required
                        </span>
                      )}
                      {userData?.phone &&
                        userData?.phone?.length != 10 &&
                        isSubmitted && (
                          <span className="error-msg">
                            Please enter valid contact no
                          </span>
                        )}
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="My Email Id is"
                        name="Email"
                        disabled={true}
                        value={userData?.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div onClick={handleBackEvent} className="theme_btn">
                  {TEXT.back}
                </div>
                <div
                  onClick={handleSubmitEvent}
                  className="theme_btn grdnt_btn"
                  id="submit"
                >
                  <span>
                  {TEXT.next_question}
                  </span>
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
        <div className="bottom-content-footer">
          <p>{TEXT.login_description_text}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
