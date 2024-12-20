import React, { useState } from 'react';
import axios from 'axios';
import "../assets/styles/style.css"; // Import your CSS file for styling
import ReCAPTCHA from 'react-google-recaptcha';

function HireFromUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    mobileNumber: "",
    email: "",
    positions: "",
    designation: "",
    experienced: "",
    location: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token); // Update CAPTCHA token when CAPTCHA is solved
  };

  const validate = () => {
    let validationErrors = {};

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Full Name is required";
    }
    if (!formData.companyName.trim()) {
      validationErrors.companyName = "Company Name is required";
    }
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      validationErrors.mobileNumber = "Mobile Number should be 10 digits";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }
    if (!formData.positions.trim()) {
      validationErrors.positions = "Number of Positions is required";
    }
    if (!formData.designation.trim()) {
      validationErrors.designation = "Designation is required";
    }
    if (!formData.experienced.trim()) {
      validationErrors.experienced = "Experience information (Fresher/Experienced) is required";
    }
    if (!formData.location.trim()) {
      validationErrors.location = "Job Location is required";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }
    if (!captchaToken) {
      validationErrors.captcha = "CAPTCHA is required";
    }

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post("http://localhost:3300/user/hire", {
          fullName: formData.fullName,
          companyName: formData.companyName,
          mobileNumber: formData.mobileNumber,
          email: formData.email,
          numberOfPositions: formData.positions,
          designation: formData.designation,
          fresher: formData.experienced,
          jobLocation: formData.location,
          message: formData.message,
          captchaToken, // Send CAPTCHA token to backend
        });

        if (response.status === 201) {
          setSubmissionMessage("Form submitted successfully!");
          setFormData({
            fullName: "",
            companyName: "",
            mobileNumber: "",
            email: "",
            positions: "",
            designation: "",
            experienced: "",
            location: "",
            message: "",
          });
          setErrors({});
          setCaptchaToken(null); // Reset CAPTCHA
          setIsModalOpen(true); // Open modal on success
        }
      } catch (error) {
        console.error("Error while submitting the hire enquiry:", error);
        setSubmissionMessage("An error occurred while submitting the enquiry.");
      }
    }
  };

  return (
    <div>
      <form className="responsive-form" onSubmit={handleSubmit}>
        <p className="description">
          "Build Your Dream Team – Hire Our Certified Professionals!"
        </p>
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
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          {errors.companyName && <p className="error">{errors.companyName}</p>}
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
          {errors.mobileNumber && <small style={{ color: "white" }} className="error">{errors.mobileNumber}</small>}
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
            name="positions"
            placeholder="No. of Positions"
            value={formData.positions}
            onChange={handleChange}
            required
          />
          {errors.positions && <p className="error">{errors.positions}</p>}
          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
          {errors.designation && <p className="error">{errors.designation}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="experienced"
            placeholder="Fresher/Experienced"
            value={formData.experienced}
            onChange={handleChange}
            required
          />
          {errors.experienced && <p className="error">{errors.experienced}</p>}
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          {errors.location && <p className="error">{errors.location}</p>}
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

        {/* Add CAPTCHA field here */}
        <ReCAPTCHA
          sitekey="6LezOHEqAAAAAGocpY5W4qGBeaKwLAIYw9OfFc6m"
          onChange={handleCaptchaChange}
        />
        {errors.captcha && <p className="error">{errors.captcha}</p>}

        <button type="submit" className="submit-btn">
          Submit
        </button>
        {/* {submissionMessage && <strong className="sub-msg">{submissionMessage}</strong>} */}
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Form Submitted Successfully</h2>
           
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HireFromUs;
