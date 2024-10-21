import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SingleDemand from "./SingleDemand";

function ViewEach() {
  const { techId } = useParams(); 
  const [courseDetails, setCourseDetails] = useState(null);
  const [loading, setLoading] = useState(true); 
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

  useEffect(() => {
    if (techId) {
      axios
        .get(`http://localhost:3300/user/view-maincourse/${techId}`)
        .then((response) => {
          setCourseDetails(response.data.data);
          setLoading(false); 
        })
        .catch((error) => {
          console.error("Error fetching course details:", error);
          setLoading(false); 
        });
    }
  }, [techId]);

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
        const response = await axios.post('http://localhost:3300/user/course-enquiry', formData);
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
          setErrors({});
        }
      } catch (error) {
        setSubmissionMessage("Error occurred, can't submit Course Enquiry");
        console.error("There was an error!", error);
      }
    }
  };

  return (
    <div>
       {loading ? (
      <div className="loader"></div> 
    
      ) : (
        courseDetails && (
          <div>
            <img
          src={courseDetails.bannerImage}
          alt="Banner"
          style={{ width: "100%", height: "auto" }}
        />
            <h1 className="overview-main">Course Overview</h1>
            <p className="eda-desc">{courseDetails.overview}</p>

            <div className="eda-form-div">
              <div>
                <h2 className="eda-subhead">Technologies Covered:</h2>
                <p className="eda-desc-tech">{courseDetails.technologies}</p>
                <ul className="eda-ul" style={{ listStyle: "disc" }}>
                  {courseDetails.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>

              <div className="eda-form">
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
                    {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
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

                  {submissionMessage && <strong className="sub-msg">{submissionMessage}</strong>}
                </form>
              </div>
            </div>
          </div>
        )
      )}
       <SingleDemand/>
    </div>
   
  );
}

export default ViewEach;
