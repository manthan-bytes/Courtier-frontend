// create dashboard page component
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Home</h1>
          <Link to="/login">Go Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;