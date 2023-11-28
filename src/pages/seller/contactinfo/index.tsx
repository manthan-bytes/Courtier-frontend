// create dashboard page component
import React from 'react';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>ContactInfo</h1>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;