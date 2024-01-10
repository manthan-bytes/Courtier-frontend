// create dashboard page component
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import btnloader from "../../assets/images/btn-loader.svg";
import { TEXT } from "../../core/constants/headingText";
import { ChatbotIcon } from "../../core/icons";
import Chatbot from "../../components/Chatbot/Chatbot";
import { useTranslation } from "react-i18next";

const Home = () => {

  const [newClass, setNewClass] = useState(false);
  // const [activeClass, setActiveClass]=useState('');
  const [chatbotClass, setChatbotClass] = useState<boolean>(false);

  const handleChatBotButton = () => {
    setChatbotClass(true);
    
  }
  useEffect(() => {
    const element: any = document.getElementById("header");
    if (element) {
      element.classList.remove('header-bk')
    }
    setNewClass(true);
  }, []);
  const { t } = useTranslation();
  return (
    <section className="main-banner">
      <div className="homepage-banner-video-overlay"></div>
      <video
        className="connect-bg"
        src="https://s3.amazonaws.com/courtierxpert.com/NewBackGroundVideo.mp4"
        muted
        autoPlay
        loop
        playsInline 
      ></video>
      <div className="banner-content-main">
        <div className="container">
          <div className="custom-row">
            <div className="banner-content-block">
              <span>{t('SIMPLIFIED_REAL_ESTATE')} </span>
              <h1 className="h1">
                {t('HOME1')} <br />
                {t('HOME2')}
              </h1>
              <div className="get-started-btn">
                <img
                  src={btnloader}
                  alt="btn-animation.svg"
                  width="196"
                  height="196"
                />
                <Link to="/login" className="theme_btn grdnt_btn">
              {t('I_AM_READY')}
              </Link>
              </div>
              <div className="volume-btn" onClick={handleChatBotButton}>
                <div className="volume">
                  <ChatbotIcon />
                </div>
              </div>
              {/* <div className="get-started-btn">
                <img
                  src={btnloader}
                  alt="btn-animation.svg"
                  width="196"
                  height="196"
                />
                <Link to="/login" className="theme_btn grdnt_btn">
                {TEXT.I_AM_READY}
              </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div id="chatbot"  className={`user-chatbot ${
          chatbotClass ? 'active' : ''
        }`}>
        <Chatbot chatbotClass={chatbotClass} setChatbotClass={setChatbotClass} />
      </div>       
    </section>
  );
};

export default Home;
