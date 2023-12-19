// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../selleruploadimage/selleruploadimage.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { ChooseIcon } from "../../../core/icons";
import { createLead } from "../../../service/lead.service";
import { getUser } from "../../../service/login.service";
import { SELLER } from "../../../core/constants/routes";
import { TEXT } from "../../../core/constants/headingText";
const SellerUploadImage = () => {
  const navigate = useNavigate();
  const [leadObj, setLeadObj] = useState<any>();
  const [getFiles, setFiles] = useState<[]>();

  const handleSubmitEvent = async () => {
    navigate(SELLER.SINGLE_FAMILY);
    // const leadObj = localStorage.getItem("leadObj");
    // const userEmail = localStorage.getItem("email");

    // const userDetails = await getUser(userEmail);

    // if (leadObj && userDetails) {
    //   const dataObj = JSON.parse(leadObj);
    //   dataObj["userId"] = userDetails.data.id;
    //   const lead = await createLead(dataObj);
    //   if (lead.statusCode === 201) {
    //     dataObj["id"] = lead.data.id;
    //     localStorage.setItem("leadObj", JSON.stringify(dataObj));
    //     navigate(SELLER.SINGLE_FAMILY);
    //   }
    // } else {
    //   //TODO: Something went wrong
    // }
  };

  const handleOnChange = async (e:any) => {
    console.log("🚀 ~ file: index.tsx:38 ~ handleOnChange ~ image:", e.target.files[0])

    // const files:any = getFiles;
    const selectedImages:any = [];
    // e.target.files.forEach((image:any) => {
      selectedImages.push(e.target.files[0])
    // })
    console.log("🚀 ~ file: index.tsx:41 ~ handleOnChange ~ files:", selectedImages)

    setFiles(selectedImages);
  };
  const handleSubmit = async (e:any) => { 
    
  }

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
                  {TEXT.sell_upload_tital}
                </h2>
                <form>
                  <div className="form-inner-block">
                    <div className="file-upload-wrap">
                      <label>
                        <div className="">
                          <ChooseIcon />
                          <p className="label">
                            Drag & Drop your files here or{" "}
                            <span>{TEXT.choose_file}</span>
                          </p>
                          <p className="label-note">
                            {TEXT.image_file_validation}
                          </p>
                        </div>

                        <input
                          id="file"
                          type="file"
                          name="file"
                          accept="image/jpg, image/png, image/jpeg"
                          onChange={(e) => handleOnChange(e)}
                        />
                        <span className="error-msg">{TEXT.please_choose_file}</span>
                      </label>
                    </div>
                  </div>
                  <div
                    onClick={handleSubmitEvent}
                    className="theme_btn grdnt_btn"
                  >
                    {TEXT.continue}
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
