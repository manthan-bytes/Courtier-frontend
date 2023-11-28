// create dashboard page component
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Header</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;