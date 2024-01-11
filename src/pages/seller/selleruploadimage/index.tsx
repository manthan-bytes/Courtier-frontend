// create dashboard page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../selleruploadimage/selleruploadimage.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { ChooseIcon, Closeicon } from "../../../core/icons";
import {
  createLead,
  updateImage,
  updateLead,
} from "../../../service/lead.service";
import { getUser } from "../../../service/login.service";
import { SELLER } from "../../../core/constants/routes";
import { TEXT } from "../../../core/constants/headingText";
import { toast } from "react-toastify";
import {
  IMAGE_LIMIT,
  IMAGE_SIZE_LIMIT,
} from "../../../core/constants/toast-message";
import { useTranslation } from "react-i18next";
const SellerUploadImage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [leadObj, setLeadObj] = useState<any>();
  const [getFiles, setFiles] = useState<any>();
  const [getImagePath, setImagePath] = useState<any>();
  const [getpropertyImage, setpropertyImage] = useState<any>();
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

  const handleOnChange = (e: any) => {
    console.log("🚀 ~ file: index.tsx:45 ~ handleOnChange ~ e:", e);
    let selectedImages: any = [];
    let selectedImagePath: any = [];

    if (e.target?.files[0]?.size >= 10485760) {
      toast.info(IMAGE_SIZE_LIMIT, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    if (getFiles && getFiles.length === 5) {
      toast.info(IMAGE_LIMIT, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    if (getFiles && getFiles.length > 0) {
      selectedImages = [...getFiles];
    }

    if (getImagePath && getImagePath.length > 0) {
      selectedImagePath = [...getImagePath];
    }

    if (e.target.files && e.target.files[0]) {
      selectedImages.push(e.target.files[0]);
      selectedImagePath.push(URL.createObjectURL(e.target.files[0]));
    }

    setImagePath(selectedImagePath);
    setFiles(selectedImages);
  };
  const handleSubmit = async (e: any) => {
    const element: any = document.getElementById("submit");
    if (element) {
      element.classList.add("loader-btn");
    }
    if (getFiles && getFiles.length > 0) {
      const leadDataObj = leadObj;
      const leadId = leadDataObj.id;
      let formData = new FormData();
      if (getFiles) {
        for (let i = 0; i < getFiles.length; i++) {
          formData.append("files", getFiles[i]);
        } // localStorage.setItem('leadObj', JSON.stringify(data));
      }
      const leadUpdate = await updateImage(leadId, formData);
      if (leadUpdate.statusCode === 200) {
        toast.success(leadUpdate.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        element.classList.remove("loader-btn");
        navigate(SELLER.SINGLE_FAMILY);
      } else {
        toast.error(leadUpdate.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        element.classList.remove("loader-btn");
      }
    } else {
      element.classList.remove("loader-btn");
      navigate(SELLER.SINGLE_FAMILY);
    }
  };

  const handleRemoveImage = (index: number) => {
    if (getFiles && getFiles.length > 0) {
      const images = [...getFiles];

      images.splice(index, 0);

      setFiles(images);
    }
  };

  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    const element: any = document.getElementById("header");
    if (element) {
      element.classList.add("header-bk");
    }
    const getLeadObj = localStorage.getItem("leadObj");
    if (getLeadObj) {
      setLeadObj(JSON.parse(getLeadObj));
      setpropertyImage(JSON.parse(getLeadObj)?.propertyImage);
    }
    setNewClass(true);
  }, []);

  return (
    <>
      <div></div>
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
                <h2 className="h2">{t("title_upload_images")}</h2>
                <form>
                  <div className="form-inner-block">
                    <div className="file-upload-wrap">
                      <label>
                        <div className="file-upload-img">
                          {getImagePath &&
                            getImagePath.length > 0 &&
                            getImagePath.map(
                              (imagePath: any, index: number) => {
                                return (
                                  <span className="close_icon_main">
                                    {/* <div
                                      className="close_icon"
                                      onClick={(e) => handleRemoveImage(index)}
                                    >
                                      <Closeicon />
                                    </div> */}
                                    <img
                                      key={index}
                                      alt="preview image"
                                      width={100}
                                      height={100}
                                      src={imagePath}
                                    />
                                  </span>
                                );
                              }
                            )}
                          {!getImagePath && (
                            <>
                              <ChooseIcon />
                            </>
                          )}

                          <p className="label">
                            {/* Drag & Drop your files here or{" "} */}
                            <span> {t("please_choose_file")}</span>
                            <input
                              id="file"
                              type="file"
                              name="file"
                              accept="image/jpg, image/png, image/jpeg"
                              onChange={(e) => handleOnChange(e)}
                            />
                          </p>

                          {/* <p className="label">
                            Drag & Drop your files here or{" "}
                            <span>{TEXT.choose_file}</span>
                          </p>
                          <p className="label-note">
                            {TEXT.image_file_validation}
                          </p> */}
                        </div>

                        <span className="error-msg">
                          {t("please_choose_file")}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div
                    onClick={handleSubmit}
                    className="theme_btn grdnt_btn"
                    id="submit"
                  >
                    <span> {t("continue")}</span>
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
