// create dashboard page component
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../selleruploadimage/selleruploadimage.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { VolumeMute, VolumeOn } from "../../../core/icons";

const SellerUploadImage = () => {
  useEffect(() => {
    console.log("test");
  });
  return (
    <>
      <section className="main-banner-sec uploadimage-sec">
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
                  The more pictures you upload, the more precise our free
                  evaluation will be!
                </h2>
                <form>
                  <div className="form-inner-block">
                    <div className="choose-file-block">Back</div>
                  </div>
                  <Link
                    to="/seller/inquiryoption"
                    className="theme_btn grdnt_btn"
                  >
                   Next Question
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

export default SellerUploadImage;
