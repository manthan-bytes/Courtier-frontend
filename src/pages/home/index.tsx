// create dashboard page component
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import volumeoff from '../../assets/images/volumeoff-icon.svg';
import volumeon from '../../assets/images/volumeon-icon.svg';
import btnloader from '../../assets/images/btn-loader.svg';
import { TEXT } from '../../core/constants/headingText';
import { VolumeMute } from '../../core/icons';

const Home = () => {
  return (
    <section className='main-banner'>
      <div className="homepage-banner-video-overlay"></div>
      <video className='connect-bg' src="https://media.giphy.com/media/klIaoXlnH9TMY/giphy.mp4" muted autoPlay loop playsInline ></video>
      <div className='banner-content-main'>
        <div className="container">
          <div className="custom-row">
            <div className="banner-content-block">
              <span>{TEXT.SIMPLIFIED_REAL_ESTATE} </span>
              <h1 className='h1'>{TEXT.HOME1} <br />{TEXT.HOME2}</h1>
              <Link to="/login" className='theme_btn blue_btn'>{TEXT.I_AM_READY}</Link>
              <div className='volume-btn'>
               
                <img className='volumeoff' src={volumeoff} alt="volume-off-icon" width="58" height="58" />
                <img className='volumeon' src={volumeoff} alt="volume-off-icon" width="58" height="58" />
              </div>
              <div className='get-started-btn'>
                <img src={btnloader} alt="btn-animation.svg" width="196" height="196" />
                <Link to="#">{TEXT.GET_STARTED}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;