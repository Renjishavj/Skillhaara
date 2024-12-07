import React, { useState } from "react";
import Why from "./Why";
import "../assets/styles/style.css";
import scholor from "../assets/images/bann-sc.png";
import present from "../assets/images/sc.png";
import ReCAPTCHA from "react-google-recaptcha";

function SkillFest() {
  const [formData, setFormData] = useState({
    name: "",
    profile: "",
    mobile: "",
    email: "",
    scholarship: "",
    testCenter: "",
    city: "",
    year: "",
    department: "",
    college: "",
    organization: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [errors, setErrors] = useState({});

  // Define static scholarship and test center options
  const scholarshipOptions = [
    { value: "AI-Data Scientist", label: "AI-Data Scientist" },
    { value: "AI & ML Expert", label: "AI & ML Expert" },
    { value: "Full Stack Developer", label: "Full Stack Developer" },
    { value: "IT Infrastructure & Cyber Security", label: "IT Infrastructure & Cyber Security" },
    { value: "IT Software Developer", label: "IT Software Developer" },
    { value: "Graphics and Animation", label: "Graphics and Animation" },
    { value: "Fashion Design", label: "Fashion Design" },
    { value: "Building Information Modelling", label: "Building Information Modelling" },
    { value: "Interior Architecture and Design", label: "Interior Architecture and Design" },
  ];

  const testCenterOptions = [
    { value: "Thrissur", label: "Thrissur" },
    { value: "Aluva (Kochi)", label: "Aluva (Kochi)" },
    { value: "Thiruvananthapuram", label: "Thiruvananthapuram" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Client-side validation
    const validationErrors = {};

    if (!formData.name) validationErrors.name = "Please enter your name.";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) validationErrors.email = "Please enter a valid email address.";
    if (!formData.mobile || formData.mobile.length !== 10 || !/^\d+$/.test(formData.mobile)) validationErrors.mobile = "Please enter a valid 10-digit mobile number.";
    if (!formData.city) validationErrors.city = "Please select your city."; // Validation for city
    if (!captchaToken) validationErrors.captcha = "Please complete the CAPTCHA.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Log the form data for debugging
    console.log("Form Data:", formData);

    try {
      const response = await fetch(`http://localhost:3300/user/skillfest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }), // Include captchaToken in the request
      });

      if (response.ok) {
        setSuccess("Form submitted successfully!");
        setError(null);
        setFormData({
          name: "",
          profile: "",
          mobile: "",
          email: "",
          scholarship: "",
          testCenter: "",
          city: "",
          year: "",
          department: "",
          college: "",
          organization: "",
        });
        setSubmissionMessage("Your form has been successfully submitted!");
        setShowModal(true);
        setCaptchaToken(null);  // Reset CAPTCHA after successful submission
      } else {
        const result = await response.json();
        // Log the error response for debugging
        console.error("Backend Error:", result);
        setError(result.message || "Submission failed.");
      }
    } catch (err) {
      setError("An error occurred while submitting the form.");
      console.error("Error occurred:", err);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmissionMessage("");
  };

  return (
    <div>
      <div >
        <img src={scholor} alt="Scholarship Banner" />
      </div>

      <div className="main-container">
        <div className="equal-div1">
          
          <img src={present} alt="Presentation" className="pres-img" />
          
        </div>
        <div className="equal-div">
          <div className="form-container">
            <div className="form-card">
              <h2 className="form-title">Scholarship Application</h2>

              <form className="responsive-form1" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="profile">Profile</label>
                  <select
                    id="profile"
                    name="profile"
                    value={formData.profile}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Profile</option>
                    <option value="student">Student</option>
                    <option value="job-seeker">Job Seeker</option>
                    <option value="employed">Employed</option>
                  </select>
                </div>

                {/* Conditional Fields for Profiles */}
                {formData.profile === "student" && (
                  <>
                    <div className="form-group">
                      <label htmlFor="year">Year</label>
                      <input
                        type="text"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        placeholder="Enter your year"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="department">Department</label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="Enter your department"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="college">College</label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        placeholder="Enter your college"
                        required
                      />
                    </div>
                  </>
                )}

                {formData.profile === "job-seeker" && (
                  <>
                    <div className="form-group">
                      <label htmlFor="year">Year</label>
                      <input
                        type="text"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        placeholder="Enter your year"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="department">Department</label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="Enter your department"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="college">College</label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        placeholder="Enter your college"
                        required
                      />
                    </div>
                  </>
                )}

                {formData.profile === "employed" && (
                  <>
                    <div className="form-group">
                      <label htmlFor="organization">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Enter your organization"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="department">Department</label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="Enter your department"
                        required
                      />
                    </div>
                  </>
                )}

                <div className="form-group">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    required
                  />
                  {errors.mobile && <p className="error">{errors.mobile}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email ID</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="scholarship">Apply For</label>
                  <select
                    id="scholarship"
                    name="scholarship"
                    value={formData.scholarship}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Scholarship</option>
                    {scholarshipOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.scholarship && <p className="error">{errors.scholarship}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="testCenter">Center</label>
                  <select
                    id="testCenter"
                    name="testCenter"
                    value={formData.testCenter}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Test Center</option>
                    {testCenterOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.testCenter && <p className="error">{errors.testCenter}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    required
                  />
                  {errors.city && <p className="error">{errors.city}</p>}
                </div>

                <div className="form-group skill-capt">
                  <ReCAPTCHA
                    sitekey="6LezOHEqAAAAAGocpY5W4qGBeaKwLAIYw9OfFc6m" // Replace with your actual ReCAPTCHA site key
                    onChange={handleCaptchaChange}
                  />
                  {errors.captcha && <p className="error">{errors.captcha}</p>}
                </div>

                <div className="form-group">
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                </div>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
              </form>
            </div>
          </div>
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
      <Why/>
    </div>
  );
}

export default SkillFest;
