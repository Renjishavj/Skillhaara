import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Why from "./Why";
import ReCAPTCHA from "react-google-recaptcha";
import "../assets/styles/style.css";

function DemandSingle() {
  const { demandId } = useParams();
  const [demandCourse, setDemandCourse] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const RECAPTCHA_SITE_KEY = process.env.REACT_APP_SITE_KEY;
  const [error, setError] = useState(null);
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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchDemandCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3300/user/view-demand/${demandId}`
        );
        setDemandCourse(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        setError("Error fetching course details.");
      }
    };
    fetchDemandCourse();
  }, [demandId]);

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
    if (!/^\d{10}$/.test(formData.mobileNumber))
      errors.mobileNumber = "Mobile Number should be 10 digits";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Invalid email format";
    if (!formData.state) errors.state = "State is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.center) errors.center = "Center is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3300/user/course-enquiry",
          { ...formData, captchaToken }
        );
        if (response.status === 201) {
          setSubmissionMessage("Form submitted successfully!");
          setShowModal(true);
          setFormData({
            fullName: "",
            mobileNumber: "",
            email: "",
            state: "",
            city: "",
            center: "",
            message: "",
          });
          setErrors({});
        }
      } catch (error) {
        setSubmissionMessage("Error occurred, can't submit Course Enquiry");
        setShowModal(true);
        console.error("There was an error!", error);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmissionMessage("");
  };

  if (error) return <div>{error}</div>;
  if (!demandCourse) return <div className="loader"></div>;

  return (
    <div className="cc">
      <div>
        <img src={demandCourse.bannerImage} alt="Banner" style={{ width: "100%", height: "auto" }} />
      </div>

      <div>
        <h1 className="overview-main">Course overview</h1>
        <p className="eda-desc-view">{demandCourse.overview}</p>
      </div>

      <div className="why-div">
        <h1 className="overview-main1">Why {demandCourse.title}?</h1>
        <p className="eda-desc">{demandCourse.why}</p>
        <ul className="eda-desc" style={{ listStyleType: "square", paddingLeft: "20px", fontWeight: "bold" }}>
          {demandCourse.whyList?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="info-cards-container">
        <div className="info-card objective-card">
          <h1 className="card-title-course">Course Objective</h1>
          <p className="card-description-obj">{demandCourse.courseObj}</p>
          <ul className="card-description-obj" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            {demandCourse.courseObjList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-card scope-card">
          <h1 className="card-title">Scope of Course</h1>
          <p className="card-description">{demandCourse.scope}</p>
          <ul className="card-description" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            {demandCourse.scopeList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-card career-card objective-card">
          <h1 className="card-title-career">Career Opportunities</h1>
          <p className="card-description-obj">{demandCourse.career}</p>
          <ul className="card-description-obj" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            {demandCourse.careerList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="career-fex">
        <div className="career-description-fex">
          <p className="card-description-enroll"><b>{demandCourse.careerdesc}</b></p>
          <div className="enroll-now">
            <p className="card-description-enroll"><b>{demandCourse.enrolltoday}</b></p>
          </div>
        </div>
        <div className="eda-form-divv">
          <form className="responsive-form-dem" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
              <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} required />
              {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              {errors.email && <p className="error">{errors.email}</p>}
              <select name="center" value={formData.center} onChange={handleChange} required>
                <option value="">Select Center</option>
                <option value="Kochi">Aluva (Kochi)</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              </select>
              {errors.center && <p className="error">{errors.center}</p>}
            </div>

            <div className="form-group">
              <select name="state" value={formData.state} onChange={handleChange} required>
                <option value="">Select State</option>
                <option value="Kerala">Kerala</option>
              </select>
              {errors.state && <p className="error">{errors.state}</p>}

              <select name="city" value={formData.city} onChange={handleChange} required>
                <option value="">Select City</option>
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
                {/* Add more city options as needed */}
              </select>
              {errors.city && <p className="error">{errors.city}</p>}
            </div>

            <div className="form-group">
              <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            
            <ReCAPTCHA
             sitekey="6LezOHEqAAAAAGocpY5W4qGBeaKwLAIYw9OfFc6m"
            onChange={handleCaptcha} />
            {errors.captcha && <p className="error">{errors.captcha}</p>}

            <button type="submit"  className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

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

export default DemandSingle;
