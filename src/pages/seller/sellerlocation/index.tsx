// create dashboard page component
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sellerlocation/sellerlocation.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import Location from "../../location";

const SellerLocation = () => {
  useEffect(() => {
    console.log("test");
  });
  return (
    <>
      <Location />
    </>
  );
};

export default SellerLocation;
