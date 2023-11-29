// create dashboard page component
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import volumeoff from '../../assets/images/volumeoff-icon.svg';
import volumeon from '../../assets/images/volumeon-icon.svg';
import btnloader from '../../assets/images/btn-loader.svg';

const Home = () => {
  return (
   <section className='main-banner'>
     <div className="homepage-banner-video-overlay"></div>
      <video className='connect-bg' src="https://media.giphy.com/media/klIaoXlnH9TMY/giphy.mp4" muted autoPlay loop playsInline ></video>
      <div className='banner-content-main'>
      <div className="container">
        <div className="custom-row">
          <div className="banner-content-block">
            <span>Simplified Real Estate </span>
            <h1>A digital way to <br/>buying and selling property</h1>
            <Link to="/login" className='theme_btn blue_btn'>I’m Ready</Link>
            <div className='volume-btn'>
              <img className='volumeoff' src={volumeoff} alt="volume-off-icon" width="58" height="58" />
              <img className='volumeon' src={volumeoff} alt="volume-off-icon" width="58" height="58" />
              </div>
            <div className='get-started-btn'>
              <img src={btnloader} alt="btn-animation.svg" width="196" height="196" /> 
              <Link to="#">Get Started</Link>
              </div>
          </div>
        </div>
      </div>
      </div>
   </section>
  );
};

export default Home;