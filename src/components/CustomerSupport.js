import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import "../assets/styles/style.css";

function CustomerSupport() {
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    mobileNumber: "",
    email: "",
    state: "",
    city: "",
    center: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
    if (!formData.studentId.trim()) errors.studentId = "Student ID is required";
    if (!/^\d{10}$/.test(formData.mobileNumber)) errors.mobileNumber = "Mobile Number should be 10 digits";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email format";
    if (!formData.state) errors.state = "State is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.center) errors.center = "Center is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    if (!captchaToken) errors.captcha = "Please complete the CAPTCHA";
    return errors;
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post("http://localhost:3300/user/customer", {
          ...formData,
          captchaToken,
        });

        if (response.status === 200) {
          setSubmissionMessage("Your message has been sent successfully!");
          setShowModal(true);
          setFormData({
            fullName: "",
            studentId: "",
            mobileNumber: "",
            email: "",
            state: "",
            city: "",
            center: "",
            message: "",
          });
          setCaptchaToken(null);
          setErrors({});
        }
      } catch (error) {
        setSubmissionMessage("There was an error sending your message.");
        setShowModal(true);
        setErrors({ server: error.response?.data.error || "Server error occurred" });
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmissionMessage("");
  };

  return (
    <div className="customer-support-form">
      <form className="responsive-form" onSubmit={handleSubmit}>
        <p className="description">“Your Satisfaction Is Our Priority - Let Us Know How We Can Help!”</p>
        <div className="form-group">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
          <input type="text" name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} required />
          {errors.studentId && <p className="error">{errors.studentId}</p>}
        </div>
        <div className="form-group">
          <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} required />
          {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select State</option>
            <option value="Kerala">Kerala</option>
          </select>
          {errors.state && <p className="error">{errors.state}</p>}
          <select name="city" value={formData.city} onChange={handleChange} required>
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
          <select name="center" value={formData.center} onChange={handleChange} required>
          <option value="">Select Center</option>
                        <option value="Kochi">Aluva (Kochi)</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Thir">Thiruvananthapuram</option>
          </select>
          {errors.center && <p className="error">{errors.center}</p>}
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <div className="captcha-container">
          <ReCAPTCHA sitekey="6LezOHEqAAAAAGocpY5W4qGBeaKwLAIYw9OfFc6m" onChange={handleCaptchaChange} />
          {errors.captcha && <p className="error">{errors.captcha}</p>}
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {/* Modal */}
      {showModal && (
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

export default CustomerSupport;
