// create dashboard page component
import { Link } from 'react-router-dom';
import './index.scss'
import banner1 from '../../assets/images/banner1.jpg';

const BuySellProperty = () => {
  return (
   <section className='main-banner-sec'>
    <img className='banner-img' src={banner1} alt="banner img" width="1920" height="1080" />
      <div className='banner-typed'>
        <div className="container">
            <div className="banner-typed-content">
              <h1>Buy Sell Property</h1>
              <Link to="/seller/contactinfo">Go To Contact Info</Link>
            </div>
        </div> 
      </div>
   </section>
  );
};

export default BuySellProperty;