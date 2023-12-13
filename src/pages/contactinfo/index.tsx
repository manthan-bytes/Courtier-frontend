// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../contactinfo/contactinfo.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import { getUser, updateUser } from "../../service/login.service";
import { log } from "console";
import { BUYER, ROUTES, SELLER } from "../../core/constants/routes";
import { ToastContainer, toast } from 'react-toastify';
import { INVALID_DATA } from "../../core/constants/toast-message";

const ContactInfo = () => {
  const navigate = useNavigate();
// banner slide animation js
const [newClass, setNewClass] = useState(false);
  const email = localStorage.getItem('email');
  const [userData, setUserData] = useState<any>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [leadObj, setLeadObj] = useState<any>();

  // let isSubmitted = false;
  const getUserDetail = async() => {
    const userDetails =await getUser(email);
    setUserData(userDetails.data);
    
  }

  const handleSubmitEvent = async() => {
    setIsSubmitted(true)
    if( userData?.name && userData?.phone &&   userData?.phone.length > 0) {
      const user = await updateUser(userData.id, userData);
      if (user.statusCode === 200) {
        toast.success(user.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        if (leadObj.leadType === 'seller') {
          navigate(SELLER.LOCATION);
    
        } 
        if (leadObj.leadType === 'buyer') {
          navigate(BUYER.LOCATION);
    
        }
      } else {
        //TODO
      }
    } else {
      toast.error(INVALID_DATA, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return false;
    }

    
  }

  const handleBackEvent = async() => {
    navigate(ROUTES.BUYSELLPROPERTY);
  }

  useEffect(() => {
    setNewClass(true);
    getUserDetail()
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
              <h2 className="h2">Please provide your contact information.</h2>
              <p className="sub-tilte">
                Log-in to receive a <span>free home evalutation</span> within
                24hrs of completing your journey
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
                        onChange={(e) => setUserData({...userData , name: e.target.value})}
                      />
                       {!userData?.name && isSubmitted && ( <span className="error-msg">
                        Name is required
                      </span>)}
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter Your Contact No"
                        name="Contact No"
                        value={userData?.phone}
                        onChange={(e) => setUserData({...userData , phone: e.target.value})}
                      />
                      {!userData?.phone && isSubmitted && ( <span className="error-msg">
                        Contact Number is required
                      </span>)}
                      {userData?.phone && userData?.phone?.length != 10 && isSubmitted && ( <span className="error-msg">
                        Please enter valid contact no
                      </span>)}
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="My Email Id is"
                        name="Email"
                        disabled={true}
                        value={userData?.email}
                        onChange={(e) => setUserData({...userData , email: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
                <div onClick={handleBackEvent} className="theme_btn">
                  Back
                </div>
                <div onClick={handleSubmitEvent} className="theme_btn grdnt_btn">
                  Next Question
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
          <p>
            By entering your contact information, you are providing express
            written consent for Myte Group to contact you at the email and
            number you provided via telephone, mobile device, automated means
            like autodialing, text SMS/MMS and pre-recorded messages, even if
            you are registered on a corporate, state,or federal Do Not Call
            list. You are also acknowledging and agreeing to our terms of
            service and privacy policy. Consent is not required to use our
            services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
