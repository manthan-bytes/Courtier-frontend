// create dashboard page component
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./buyerlocation.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import Location from "../../location";

const BuyerLocation = () => {

  return (
    <>
      <Location />
    </>
  );
};

export default BuyerLocation;
