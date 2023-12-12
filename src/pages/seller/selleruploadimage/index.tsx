// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../selleruploadimage/selleruploadimage.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { ChooseIcon } from "../../../core/icons";
import { createLead } from "../../../service/lead.service";
import { getUser } from "../../../service/login.service";
import { SELLER } from "../../../core/constants/routes";

const SellerUploadImage = () => {
  const navigate = useNavigate();
  const handleSubmitEvent = async () => {
    const leadObj = localStorage.getItem("leadObj");
    const userEmail = localStorage.getItem("email");

    const userDetails = await getUser(userEmail);

    if (leadObj && userDetails) {
      const dataObj = JSON.parse(leadObj);
      dataObj["userId"] = userDetails.data.id;
      const lead = await createLead(dataObj);
      if (lead.statusCode === 201) {
        dataObj["id"] = lead.data.id;
        localStorage.setItem("leadObj", JSON.stringify(dataObj));
        navigate(SELLER.SINGLE_FAMILY);
      }
    } else {
      //TODO: Something went wrong
    }
  };

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
                  <div
                    onClick={handleSubmitEvent}
                    className="theme_btn grdnt_btn"
                  >
                    Continue
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

export default SellerUploadImage;
