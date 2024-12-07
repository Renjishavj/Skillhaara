import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import "../assets/styles/style.css";

function CorporateTraining() {
  const [formData, setFormData] = useState({
    fullName: "",
    organizationTime: "",
    mobileNumber: "",
    email: "",
    rightTime: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.organizationTime.trim()) {
      errors.organizationTime = "Organization is required";
    }
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = "Mobile Number should be 10 digits";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.rightTime.trim()) {
      errors.rightTime = "Right Time to Contact is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    if (!captchaValue) {
      errors.captcha = "Please verify that you are not a robot";
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
          ...formData,
          captchaToken: captchaValue,
        });

        if (response.status === 201) {
          setSubmissionMessage("Form submitted successfully!");
          setFormData({
            fullName: "",
            organizationTime: "",
            mobileNumber: "",
            email: "",
            rightTime: "",
            message: "",
          });
          setCaptchaValue(null);
          setIsModalOpen(true); // Show modal on successful submission
        }
      } catch (error) {
        setSubmissionMessage("Couldn't submit the Corporate Training form.");
        if (error.response) {
          setErrors({ server: error.response.data.error || "Server error occurred" });
        }
      }
    }
  };

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Function to close modal
  };

  return (
    <div>
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
            name="organizationTime"
            placeholder="Organization"
            value={formData.organizationTime}
            onChange={handleChange}
            required
          />
          {errors.organizationTime && <p className="error">{errors.organizationTime}</p>}
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
          {errors.mobileNumber && <small className="error" style={{ color: "white" }}>{errors.mobileNumber}</small>}
          
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
            name="rightTime"
            placeholder="Right Time to Contact (in IST)"
            value={formData.rightTime}
            onChange={handleChange}
            required
          />
          {errors.rightTime && <p className="error">{errors.rightTime}</p>}
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
        
        <ReCAPTCHA
          sitekey="6LezOHEqAAAAAGocpY5W4qGBeaKwLAIYw9OfFc6m"
          onChange={onCaptchaChange}
        />
        {errors.captcha && <p className="error">{errors.captcha}</p>}
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {isModalOpen && (
         <div className="modal">
         <div className="modal-content">
         <button onClick={closeModal}>Close</button>
           <p>{submissionMessage}</p>
         </div>
       </div>
      )}
    </div>
  );
}

export default CorporateTraining;
