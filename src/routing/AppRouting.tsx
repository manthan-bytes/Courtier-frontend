import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import NotFound from "../pages/NotFound";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";
import Login from "../pages/auth/Login";
import Home from "../pages/home";
import BuySellProperty from "../pages/buysellproperty";
import { ROUTES, SELLER } from "../core/constants/routes";
import SellerContactInfo from "../pages/seller/sellercontactinfo";
import SellerLocation from "../pages/seller/sellerlocation";
import SellerPropertyType from "../pages/seller/sellerpropertytype";
import SellerInquiryOption from "../pages/seller/sellerinquiryoption";
import SellerUploadImage from "../pages/seller/selleruploadimage";
import SellerCallFromAgent from "../pages/seller/sellercallfromagent";
import SellerSingleFamily from "../pages/seller/sellersinglefamily";

const AppRouting = () => {
  return (
    <Routes>
      {/* Private route start */}
      <Route path="/">
        <Route path={ROUTES.HOME} index element={<Home />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Route>

      <Route path="/" element={<PublicLayout />}>
        <Route path={ROUTES.LOGIN} index element={<Login />} />
      </Route>

      <Route path="/" element={<PrivateLayout />}>
        <Route path={ROUTES.BUYSELLPROPERTY} index element={<BuySellProperty />} />
        <Route path={ROUTES.SELLER}>
          <Route path={SELLER.CONTACT_INFO} index element={<SellerContactInfo />} />
          <Route path={SELLER.LOCATION} index element={<SellerLocation />} />

          <Route path={SELLER.PROPERTY_TYPE} index element={<SellerPropertyType />} />

          <Route path={SELLER.INQUIRY_OPTION} index element={<SellerInquiryOption />} />

          <Route path={SELLER.CALL_AGENT} index element={<SellerCallFromAgent />} />

          <Route path={SELLER.UPLOAD_IMAGE} index element={<SellerUploadImage />} />

          <Route path={SELLER.SINGLE_FAMILY} index element={<SellerSingleFamily />} />

        </Route>
      </Route>
      {/* <Route path="/home"> */}
      {/* </Route> */}

      {/* Private route end */}

      {/* Public route start */}
      {/* <Route path="/" element={<PublicLayout />}>
        <Route path="/" index element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route> */}
      {/* Public route end */}

      {/* Not found route start */}
      <Route path="*" element={<NotFound />} />
      {/* Not found route end */}
    </Routes>
  );
};

export default AppRouting;
