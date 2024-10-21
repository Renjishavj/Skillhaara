import React, { useState } from 'react';
import axios from 'axios';

function CorporateTraining() {
  const [formData, setFormData] = useState({
    fullName: "",
    OrganizationTime: "",
    mobileNumber: "",
    email: "",
    RightTime: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.OrganizationTime.trim()) {
      errors.OrganizationTime = "Organization Time is required";
    }
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = "Mobile Number should be 10 digits";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.RightTime.trim()) {
      errors.RightTime = "Right Time to Contact is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post('http://localhost:3300/user/corporate-training', {
          fullName: formData.fullName,
          mobileNumber: formData.mobileNumber,
          email: formData.email,
          organizationTime: formData.OrganizationTime,
          rightTime: formData.RightTime,
          message: formData.message,
        });

        if (response.status === 201) {
          setSubmissionMessage("Form submitted successfully!");
        }
      } catch (error) {
        setSubmissionMessage("Error occured,can't submitt Corp-Training Enquiry");
        console.error("There was an error!", error);
      }
    }
  };

  return (
    <form className="responsive-form" onSubmit={handleSubmit}>
      <p className="description">"Transform Your Workforce – Discover Our Tailored Training Solutions!"</p>
      <div className="form-group">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
        <input
          type="text"
          name="OrganizationTime"
          placeholder="Organization"
          value={formData.OrganizationTime}
          onChange={handleChange}
          required
        />
        {errors.OrganizationTime && <p className="error">{errors.OrganizationTime}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
        {errors.mobileNumber &&  <small className="error" style={{color:"red"}}>{errors.mobileNumber}</small>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="RightTime"
          placeholder="Right Time to Contact (in IST)"
          value={formData.RightTime}
          onChange={handleChange}
          required
        />
        {errors.RightTime && <p className="error">{errors.RightTime}</p>}
      </div>
      <div className="form-group">
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
      </div>
      <button type="submit" className="submit-btn">Submit</button>
      {submissionMessage && <strong className='sub-msg'>{submissionMessage}</strong>}
    </form>
  );
}

export default CorporateTraining;
