// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../sellerinquiryoption/sellerinquiryoption.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { TEXT } from "../../../core/constants/headingText";
import { toast } from "react-toastify";
import { sendEmail } from "../../../service/login.service";
import { SELLER } from "../../../core/constants/routes";
const SellerInquiryOption = () => {
  const navigate = useNavigate();
  const [leadObj, setLeadObj] = useState<any>();
  const callFromAgent = async () => {
    const email = localStorage.getItem("email");
    const emailObj = {
      email: email,
      type: leadObj.leadType,
      leadId: leadObj.id,
    };
    const sendEmailResponse = await sendEmail(emailObj);
    if (sendEmailResponse.statusCode === 200) {
      toast.success(sendEmailResponse.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(sendEmailResponse.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    navigate(SELLER.CALL_AGENT)
  }

    // banner slide animation js
    const [newClass, setNewClass] = useState(false);
    useEffect(() => {
      const element: any = document.getElementById("header");
      if (element) {
        element.classList.add("header-bk");
      }
      const getLeadObj = localStorage.getItem("leadObj");
    if (getLeadObj) {
      const leadObj = JSON.parse(getLeadObj);
      setLeadObj(leadObj);
    }
      setNewClass(true);
    }, []);

  return (
    <>
      <section className={`main-banner-sec inquiryoption-sec ${ newClass ? "next-class" : "" }`}>
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
                  {TEXT.sell_inquiry_options}
                </h2>
                <form>
                  <div onClick={callFromAgent} className="theme_btn">
                    {TEXT.call_from_agent}
                  </div>
                  <Link
                    to="/seller/uploadimage"
                    className="theme_btn grdnt_btn"
                  >
                    {TEXT.digital_evaluation}
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerInquiryOption;
