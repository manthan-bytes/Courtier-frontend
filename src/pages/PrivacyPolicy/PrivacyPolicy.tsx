// PrivacyPolicy.js

import React from 'react';
import './PrivacyPolicy.scss';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <header>
        <h1>Privacy Policy</h1>
        <p>Effective Date: Jan 01, 2023</p>
      </header>

      <section>
        <h2>Introduction</h2>
        <p>
          CourtierXpert.com is committed to safeguarding the privacy of our users. This Privacy Policy outlines the collection, use, and protection of personal information provided by users seeking a free home evaluation or curated property listings.
        </p>
      </section>

      <section>
        <h2>Information Collection</h2>
        <p>
          Through our application, we collect the following personal information:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Property preferences</li>
        </ul>
        <p>
          This information is essential for providing personalized services, including free home evaluations and a curated list of properties that align with your preferences.
        </p>
      </section>

      <section>
        <h2>Purposes of Collection</h2>
        <p>
          The information you provide is used solely for the purpose of delivering the requested services. This includes generating home evaluations, curating property listings, and communicating with you regarding your inquiries.
        </p>
      </section>

      <section>
        <h2>Means of Collection</h2>
        <p>
          Information is collected directly through our application when you enter your details to use our services.
        </p>
      </section>

      <section>
        <h2>Consent</h2>
        <p>
          By using our application, you consent to the collection and use of your personal information as described in this Privacy Policy. You may withdraw consent at any time by contacting us at <a href="mailto:info@courtierxpert.com">info@courtierxpert.com</a>.
        </p>
      </section>

      <section>
        <h2>Rights of Access and Rectification</h2>
        <p>
          You have the right to access your personal information and to request corrections to any inaccuracies. Please contact us at the email provided for assistance.
        </p>
      </section>

      <section>
        <h2>Disclosure to Third Parties</h2>
        <p>
          We do not disclose your personal information to third parties, except as required by law.
        </p>
      </section>

      <section>
        <h2>Data Storage and Security</h2>
        <p>
          Your personal information is securely stored in an AWS database, which employs robust security measures to prevent unauthorized access, disclosure, or misuse.
        </p>
      </section>

      <section>
        <h2>Use of Technology and Profiling</h2>
        <p>
          We use technology to profile your preferences, enabling us to provide personalized services. This involves analyzing your provided preferences to offer tailored home evaluations and property listings.
        </p>
      </section>

      <section>
        <h2>Publication of Policy</h2>
        <p>
          This Privacy Policy is available on our website and will be presented to users upon the collection of their personal information.
        </p>
      </section>

      <section>
        <h2>Policy Updates and Notification</h2>
        <p>
          Our Privacy Policy will be reviewed yearly. Users will be notified of any changes via email.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>
          For any questions or concerns regarding this policy or your personal information, please contact us at <a href="mailto:info@courtierxpert.com">info@courtierxpert.com</a>.
        </p>
      </section>

      <section>
        <h2>Legal Compliance</h2>
        <p>
          We adhere to the Act respecting personal information in the private sector in Quebec and other relevant laws.
        </p>
      </section>

      <section>
        <h2>By using the CourtierXpert.com application</h2>
        <p>
          You acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
