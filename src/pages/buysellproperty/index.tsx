// create dashboard page component
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bg_main from "../../assets/images/bg-main.jpg";
import { VolumeMute, VolumeOn, Buyericon, Sellericon, Familyicon, Condoicon, Propertyicon, Industrialicon, Landfieldicon } from "../../core/icons";
import "./buysellproperty.scss";

const BuySellProperty = () => {
  useEffect(() => {
    console.log("test");
  });
  return (
    <>
      <section className="main-banner-sec buysellproperty-sec property-sec">
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
                  Great 💫
                  <br />
                  Are you looking to buy or sell property?
                </h2>
                <form>
                  <div className="form-inner-block">
                    <label className="custom-select">
                      <input type="radio" name="layout" value="L" />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Buyericon />
                        </span>
                        I’m Buyer
                      </div>
                    </label>
                    <label className="custom-select">
                      <input type="radio" name="layout" value="L" />
                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Sellericon />
                        </span>
                        I’m Seller
                      </div>
                    </label>
                  </div>
                  <Link to="/seller/contactinfo" className="theme_btn blue_btn">
                    Go To Contact Info
                  </Link>
                </form>
              </div>
              <div className="volume-btn">
                <div className="volume volumeoff">
                  <VolumeMute />
                </div>
                <div className="volume volumeon">
                  <VolumeOn />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="banner-cantent-block">
          <div className="container">
            <div className="custom-row">
              <div className="form-step-contect">
                <h2 className="h2">
                What type of property are you wishing to sell?
                </h2>
                <form>
                  <div className="form-inner-block">
                    <label className="custom-select">
                      <input type="radio" name="layout" value="L" />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Familyicon />
                        </span>
                        Single Family
                      </div>
                    </label>
                    <label className="custom-select">
                      <input type="radio" name="layout" value="L" />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Condoicon />
                        </span>
                        Condo
                      </div>
                    </label>
                    <label className="custom-select">
                      <input type="radio" name="layout" value="L" />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Propertyicon />
                        </span>
                        Revenue Property
                      </div>
                    </label>
                    <label className="custom-select">
                      <input type="radio" name="layout" value="L" />

                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Industrialicon />
                        </span>
                        Commercial or Industrial
                      </div>
                    </label>
                    <label className="custom-select">
                      <input type="radio" name="layout" value="L" />
                      <div className="custom-lable">
                        <span className="svg-icon">
                          <Landfieldicon />
                        </span>
                        Land / Field
                      </div>
                    </label>
                  </div>
                  <Link to="/" className="theme_btn">
                  Back
                </Link>
                <Link to="/" className="theme_btn blue_btn">
                 Next Question
                </Link>
                </form>
              </div>
              <div className="volume-btn">
                <div className="volume volumeoff">
                  <VolumeMute />
                </div>
                <div className="volume volumeon">
                  <VolumeOn />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default BuySellProperty;
