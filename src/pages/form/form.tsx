import React, { useState } from 'react';
import './UserForm.scss';
import { TEXT } from '../../core/constants/headingText';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../core/constants/routes';
import bg_main from "../../assets/images/bg-main.jpg";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    description: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFormErrors: any = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        newFormErrors[key] = 'This field is required';
      }
    });

    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
      return;
    }

    console.log('Form submitted with data:', formData);
  };

 

  return (
    // <div className="container">
    //   <div className='user-form'>
    //     <h1>User Form</h1>
    //     <form onSubmit={handleSubmit}>
    //       <div className="form-row">
    //         <label>
    //           First Name:
    //           <input
    //             type="text"
    //             name="firstName"
    //             value={formData.firstName}
    //             onChange={handleInputChange}
    //             required
    //           />
    //           {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
    //         </label>
    //         <label>
    //           Last Name:
    //           <input
    //             type="text"
    //             name="lastName"
    //             value={formData.lastName}
    //             onChange={handleInputChange}
    //             required
    //           />
    //           {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
    //         </label>
    //       </div>
    //       <div className="form-row">
    //         <label>
    //           Email ID:
    //           <input
    //             type="email"
    //             name="email"
    //             value={formData.email}
    //             onChange={handleInputChange}
    //             required
    //           />
    //           {formErrors.email && <span className="error">{formErrors.email}</span>}
    //         </label>
    //         <label>
    //           Contact Number:
    //           <input
    //             type="number"
    //             name="contactNumber"
    //             value={formData.contactNumber}
    //             onChange={handleInputChange}
    //             required
    //           />
    //           {formErrors.contactNumber && <span className="error">{formErrors.contactNumber}</span>}
    //         </label>
    //       </div>
    //       <div className="form-row full-width">
    //         <label>
    //           Description:
    //           <textarea
    //             name="description"
    //             value={formData.description}
    //             onChange={handleInputChange}
    //             rows={4}
    //             required
    //           ></textarea>
    //           {formErrors.description && <span className="error">{formErrors.description}</span>}
    //         </label>
    //       </div>
    //       <br />
    //       <button type="submit">Submit</button>
    //     </form>
    //   </div>
    // </div>

    <section
      className={`main-banner-sec contactform-sec`}
    >
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
              <h2 className="h2">{TEXT.provide_contact_info}</h2>
              <form>
                <div className="form-inner-block">
                  <div className="form-group-main">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Type Your Name"
                        name="Your Name"                       
                      />
                        <span className="error-msg">Name is required</span>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Type Your Name"
                        name="Your Name"                       
                      />
                        <span className="error-msg">Name is required</span>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Type Your Name"
                        name="Your Name"                       
                      />
                        <span className="error-msg">Name is required</span>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Type Your Name"
                        name="Your Name"                       
                      />
                        <span className="error-msg">Name is required</span>
                    </div>
                    <div className="form-group textarea-control">
                      <textarea
                        className="form-control"
                       
                        placeholder="Type Your Name"
                        name="Your Name"                       
                      ></textarea>
                        <span className="error-msg">Name is required</span>
                    </div>
                  </div>
                </div>
                
                <div
                  // onClick={handleSubmit}
                  className="theme_btn grdnt_btn"
                  id="submit"
                >
                  <span>{TEXT.next_question}</span>
                </div>
              </form>
            </div>
            {/* <div className="volume-btn">
              <div className="volume volumeoff">
                <VolumeMute />
              </div>
              <div className="volume volumeon">
                <VolumeOn />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserForm;
