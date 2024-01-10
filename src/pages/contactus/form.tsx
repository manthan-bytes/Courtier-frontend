import { useState } from "react";
import "./UserForm.scss";
import { TEXT } from "../../core/constants/headingText";
import bg_main from "../../assets/images/bg-main.jpg";
import { toast } from "react-toastify";
import { contactInfo } from "../../service/login.service";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../core/constants/routes";
import { useTranslation } from "react-i18next";

const UserForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isEmailInValid, setIsEmialInValid] = useState(false);
  const [isPhoneInValid, setIsPhoneInValid] = useState(false);

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleSubmitEvent = async () => {
    setIsSubmitted(true);
    if (
      userData?.firstName &&
      userData?.firstName.length > 0 &&
      userData?.lastName &&
      userData?.lastName.length > 0 &&
      userData?.phoneNumber &&
      userData?.phoneNumber.length > 0 &&
      userData?.email &&
      userData?.email.length > 0 &&
      userData?.description &&
      userData?.description.length > 0
    ) {
      const element: any = document.getElementById("submit");
      if (element) {
        element.classList.add("loader-btn");
      }
      const sendEmailResponse = await contactInfo(userData);
      if (sendEmailResponse.statusCode === 200) {
        toast.success(sendEmailResponse.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(sendEmailResponse.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      navigate(ROUTES.HOME);
    }
  };
  const handleChange = (event: any, type: string) => {
    console.log(type);
    if (type == "email") {
      if (!isValidEmail(event.target.value)) {
        setIsEmialInValid(true);
      } else {
        setIsEmialInValid(false);
      }
    } else {
      const isValidPhoneNumber = /^[0-9]{10}$/.test(event.target.value);
      if (!isValidPhoneNumber) {
        setIsPhoneInValid(true);
      } else {
        setIsPhoneInValid(false);
      }
    }
  };

  return (
    <section className={`main-banner-sec contactform-sec`}>
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
              <h2 className="h2">{t("contact_us_info")}</h2>
              <form>
                <div className="form-inner-block">
                  <div className="form-group-main">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder={t("firstName")}
                        name="firstName"
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            firstName: e.target.value,
                          })
                        }
                      />
                      {!userData?.firstName && isSubmitted && (
                        <span className="error-msg">
                          {t("firstName_required")}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder={t("lastName")}
                        name="lastName"
                        value={userData.lastName}
                        onChange={(e) =>
                          setUserData({ ...userData, lastName: e.target.value })
                        }
                      />
                      {!userData?.lastName && isSubmitted && (
                        <span className="error-msg">
                          {t("lastName_required")}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="number"
                        placeholder={t("phoneNumber")}
                        name="phoneNumber"
                        value={userData.phoneNumber}
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            phoneNumber: e.target.value,
                          });
                          handleChange(e, "phoneNumber"); // Fix: Use semicolon here
                        }}
                      />

                      {!userData?.phoneNumber && isSubmitted && (
                        <span className="error-msg">
                          {t("phone_required")}
                        </span>
                      )}
                      {isPhoneInValid && userData?.phoneNumber && (
                        <span className="error-msg">
                          {t("phone_invalid")}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder={t("email")}
                        name="email"
                        value={userData.email}
                        onChange={(e) => {
                          setUserData({ ...userData, email: e.target.value });
                          handleChange(e, "email");
                        }}
                      />
                      {!userData?.email && isSubmitted && (
                        <span className="error-msg">{t("email_required")}</span>
                      )}
                      {isEmailInValid && userData?.email && (
                        <span className="error-msg">{t("email_invalid")}</span>
                      )}
                    </div>
                    <div className="form-group textarea-control">
                      <textarea
                        className="form-control"
                        placeholder={t("description")}
                        name="description"
                        value={userData.description}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            description: e.target.value,
                          })
                        }
                      ></textarea>
                      {!userData?.description && isSubmitted && (
                        <span className="error-msg">
                          {t("description_required")}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleSubmitEvent}
                  className="theme_btn grdnt_btn"
                  id="submit"
                >
                  <span>{t("submit")}</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserForm;
