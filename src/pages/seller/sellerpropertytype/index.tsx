// create dashboard page component
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sellerpropertytype/sellerpropertytype.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import PropertyType from "../../propertytype";


const SellerPropertyType = () => {
  
  return (
   <>
   <PropertyType></PropertyType>
   </>
  );
};

export default SellerPropertyType;
