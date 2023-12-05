// create dashboard page component
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sellercontactinfo/sellercontactinfo.scss";
import bg_main from "../../../assets/images/bg-main.jpg";
import { VolumeMute, VolumeOn } from "../../../core/icons";
import ContactInfo from "../../contactinfo";

const SellerContactInfo = () => {
  useEffect(() => {
    console.log("test");
  });
  return (
   <>
   <ContactInfo></ContactInfo>
   </>
  );
};

export default SellerContactInfo;
