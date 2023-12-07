import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import NotFound from "../pages/NotFound";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";
import Login from "../pages/auth/Login";
import Home from "../pages/home";
import BuySellProperty from "../pages/buysellproperty";
import { ROUTES, SELLER, BUYER } from "../core/constants/routes";
import SellerContactInfo from "../pages/seller/sellercontactinfo";
import SellerLocation from "../pages/seller/sellerlocation";
import SellerPropertyType from "../pages/seller/sellerpropertytype";
import SellerInquiryOption from "../pages/seller/sellerinquiryoption";
import SellerUploadImage from "../pages/seller/selleruploadimage";
import SellerCallFromAgent from "../pages/seller/sellercallfromagent";
import SellerSingleFamily from "../pages/seller/sellersinglefamily";
import SellerPropertySold from "../pages/seller/sellerpropertysold";
import SellerPropertyConformation from "../pages/seller/sellerpropertyconformation";
import SellerPropertyThankyou from "../pages/seller/sellerpropertythankyou";
import SellerSingleFamilyHomestyle from "../pages/seller/sellersinglefamilyhomestyle";
import SellerCondoProperty from "../pages/seller/sellercondoproperty";
import SellerAboutLandField from "../pages/seller/selleraboutlandfield";
import SellerRevenueProperty from "../pages/seller/sellerrevenueproperty";
import SellerCommercialIndustrial from "../pages/seller/sellercommercialindustrial";

import BuyerInquiryOption from "../pages/buyer/buyerinquiryoption";
import BuyerSingleFamily from "../pages/buyer/buyersinglefamily";
import BuyerCondoProperty from "../pages/buyer/buyercondoproperty";
import BuyerAboutLandField from "../pages/buyer/buyeraboutlandfield";
import BuyerRevenueProperty from "../pages/buyer/buyerrevenueproperty";
import BuyerCommercialIndustrial from "../pages/buyer/buyercommercialindustrial";
import BuyerSearchProperty from "../pages/buyer/buyersearchproperty";
import BuyerTimeLine from "../pages/buyer/buyertimeline";
import BuyerAgent from "../pages/buyer/buyeragent";




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
          <Route path={SELLER.PROPERTY_SOLD} index element={<SellerPropertySold/>} />
          <Route path={SELLER.PROPERTY_CONFORMATION} index element={<SellerPropertyConformation />} />
          <Route path={SELLER.PROPERTY_THANKYOU} index element={<SellerPropertyThankyou />} />
          <Route path={SELLER.SINGLE_FAMILY_HOME_STYLE} index element={<SellerSingleFamilyHomestyle />} />
          <Route path={SELLER.CONDO_PROPERTY} index element={<SellerCondoProperty />} />
          <Route path={SELLER.ABOUT_LAND_FIELD} index element={<SellerAboutLandField />} />
          <Route path={SELLER.REVENUE_PROPERTY} index element={<SellerRevenueProperty/>} />
          <Route path={SELLER.COMMERCIAL_INDUSTRIAL} index element={<SellerCommercialIndustrial/>} />
        </Route>

        <Route path={ROUTES.BUYER}>
          <Route path={BUYER.INQUIRY_OPTION} index element={<BuyerInquiryOption />} />
          <Route path={BUYER.SINGLE_FAMILY} index element={<BuyerSingleFamily />} />
          <Route path={BUYER.CONDO_PROPERTY} index element={<BuyerCondoProperty />} />
          <Route path={BUYER.ABOUT_LAND_FIELD} index element={<BuyerAboutLandField />} />
          <Route path={BUYER.REVENUE_PROPERTY} index element={<BuyerRevenueProperty/>} />
          <Route path={BUYER.COMMERCIAL_INDUSTRIAL} index element={<BuyerCommercialIndustrial/>} />
          <Route path={BUYER.SEARCH_PROPERTY} index element={<BuyerSearchProperty />} />
          <Route path={BUYER.TIME_LINE} index element={<BuyerTimeLine/>} />
          <Route path={BUYER.AGENT} index element={<BuyerAgent/>} />
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
