import React, { useState } from 'react';
import './UserForm.scss';

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
    <div className="container">
      <div className='user-form'>
        <h1>User Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
              {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
            </label>
          </div>
          <div className="form-row">
            <label>
              Email ID:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </label>
            <label>
              Contact Number:
              <input
                type="number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
              {formErrors.contactNumber && <span className="error">{formErrors.contactNumber}</span>}
            </label>
          </div>
          <div className="form-row full-width">
            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                required
              ></textarea>
              {formErrors.description && <span className="error">{formErrors.description}</span>}
            </label>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
