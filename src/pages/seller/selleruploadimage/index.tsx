// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../selleruploadimage/selleruploadimage.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { ChooseIcon } from "../../../core/icons";

const SellerUploadImage = () => {
  
  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
  }, []);

  return (
    <>
      <section
        className={`main-banner-sec uploadimage-sec ${
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
                  The more pictures you upload, the more precise our free
                  evaluation will be!
                </h2>
                <form>
                  <div className="form-inner-block">
                    <div className="file-upload-wrap">
                      <label>
                        <div className="">
                          <ChooseIcon />
                          <p className="label">
                            Drag & Drop your files here or{" "}
                            <span>Choose files</span>
                          </p>
                          <p className="label-note">
                            Max you can upload 10 files. 2 MB each image
                          </p>
                        </div>

                        <input
                          id="file"
                          type="file"
                          name="file"
                          accept="image/jpg, image/png, image/jpeg"
                        />
                        <span className="error-msg">Please choose file</span>
                      </label>
                    </div>
                  </div>
                  <Link
                    to="/seller/singlefamily"
                    className="theme_btn grdnt_btn"
                  >
                    Continue
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
