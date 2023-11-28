// create dashboard page component
import { Link } from 'react-router-dom';
import './index.scss'

const BuySellProperty = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Buy Sell Property</h1>
          <Link to="/seller/contactinfo">Go To Contact Info</Link>
        </div>
      </div>
    </div>
  );
};

export default BuySellProperty;