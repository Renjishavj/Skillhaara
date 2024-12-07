import React, { useState } from 'react';
import axios from 'axios';
import "../assets/styles/style.css";
import ReCAPTCHA from "react-google-recaptcha";

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

  const [captchaToken, setCaptchaToken] = useState(null);
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
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
    if (!captchaToken) {
      errors.captcha = "Please complete the CAPTCHA";
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
        const response = await axios.post('http://localhost:3300/user/course-enquiry', { ...formData, captchaToken });
        
        if (response.status === 201) {
          setSubmissionMessage("Form submitted successfully!");
          setFormData({
            fullName: "",
            mobileNumber: "",
            email: "",
            state: "",
            city: "",
            center: "",
            message: "",
          });
          setCaptchaToken(null);
          setShowModal(true); // Show the modal on success
        }
      } catch (error) {
        setSubmissionMessage("Error occurred, couldn't submit the form.");
        console.error("There was an error!", error);
        
        if (error.response) {
          setErrors({ server: error.response.data.error || "Server error occurred" });
        }
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmissionMessage("");
  };

  return (
    <>
      <form className="responsive-form" onSubmit={handleSubmit}>
        <p className="description">"Interested in Our Courses? We’re Excited to Hear From You!"</p>
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
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          {errors.mobileNumber && <small className="error" style={{ color: "white" }}>{errors.mobileNumber}</small>}
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
            <option value="Kochi">Aluva (Kochi)</option>
            <option value="Thrissur">Thrissur</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
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
            <option value="Kerala">Kerala</option>
          </select>
          {errors.state && <p className="error">{errors.state}</p>}
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select City</option>
            <option value="Alappuzha">Alappuzha</option>
            <option value="Ernakulam">Ernakulam</option>
            <option value="Idukki">Idukki</option>
            <option value="Kannur">Kannur</option>
            <option value="Kasaragod">Kasaragod</option>
            <option value="Kollam">Kollam</option>
            <option value="Kottayam">Kottayam</option>
            <option value="Kozhikode">Kozhikode</option>
            <option value="Malappuram">Malappuram</option>
            <option value="Palakkad">Palakkad</option>
            <option value="Pathanamthitta">Pathanamthitta</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Thrissur">Thrissur</option>
            <option value="Wayanad">Wayanad</option>
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

        <div className="captcha-container">
          <ReCAPTCHA
            sitekey="6LezOHEqAAAAAGocpY5W4qGBeaKwLAIYw9OfFc6m"
            onChange={handleCaptchaChange}
          />
          {errors.captcha && <p className="error">{errors.captcha}</p>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
        {/* {submissionMessage && <strong className="sub-msg">{submissionMessage}</strong>} */}
        {errors.server && <p className="error" style={{ color: "white" }}>{errors.server}</p>}
      </form>

      {/* Modal for submission message */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
          <button onClick={closeModal}>Close</button>
            <p>{submissionMessage}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseEnquiry;
