import React, { useState } from 'react';
import axios from 'axios';
import "../assets/styles/style.css";

function CourseEnquiry() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    state: "",
    city: "",
    center: "",
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
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = "Mobile Number should be 10 digits";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.state) {
      errors.state = "State is required";
    }
    if (!formData.city) {
      errors.city = "City is required";
    }
    if (!formData.center) {
      errors.center = "Center is required";
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
        const response = await axios.post('http://localhost:3300/user/customer', formData);
        if (response.status === 201) {
          setSubmissionMessage("Form submitted successfully!...");
        }
      } catch (error) {
        setSubmissionMessage("Error occured,can't submitt Course Enquiry");
        console.error("There was an error!", error);
      }
    }
  };

  return (
    <form className="responsive-form" onSubmit={handleSubmit}>
      <p className="description">"Your Satisfaction is Our Priotity-Let Us Know How We Can Help!"</p>
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
          name="studentId"
          placeholder="Student ID"
          value={formData.studentId}
          onChange={handleChange}
          required
        />
        {errors.studentId && <p className="error">{errors.studentId}</p>}
        </div>
       <div className='form-group'>
       <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
        {errors.mobileNumber && <small className="error" style={{color:"red"}}>{errors.mobileNumber}</small>}
       </div>
      
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {errors.email && <p className="error">{errors.email}</p>}
        
        <select
          name="center"
          value={formData.center}
          onChange={handleChange}
          required
        >
          <option value="">Select Center</option>
          <option value="Kochi">Kochi</option>
          <option value="Thrissur">Thrissur</option>
          
        </select>
        {errors.center && <p className="error">{errors.center}</p>}
      </div>
      <div className="form-group">
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">Select State</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Kerala">Kerala</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Bangalore">Bangalore</option>
         
        </select>
        {errors.state && <p className="error">{errors.state}</p>}
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        >
          <option value="">Select City</option>
          <option value="Kochi">Kochi</option>
          <option value="Trivandrum">Trivandrum</option>
          <option value="Thrissur">Thrissur</option>
         
        </select>
        {errors.city && <p className="error">{errors.city}</p>}
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
      <button type="submit" className="submit-btn">
        Submit
      </button>
      {submissionMessage && <strong className='sub-msg'>{submissionMessage}</strong>}
    </form>
  );
}

export default CourseEnquiry;