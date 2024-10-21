import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DemandSingle() {
  const { demandId } = useParams();
  const [demandCourse, setDemandCourse] = useState(null);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("courseObj");

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

  if (error) {
    return <div>{error}</div>;
  }

  if (!demandCourse) {
    return <div className="loader"></div>;
  }

  return (
    <div>
      {/* Banner */}
      <div>
        <img
          src={demandCourse.bannerImage}
          alt="Banner"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* <div className='sing-cont'> */}
      <div>
        <h1 className="overview-main">Course overview</h1>
        <p className="eda-desc">{demandCourse.overview}</p>
      </div>

      <div className="why-div">
        <h1 className="overview-main1">Why {demandCourse.title}?</h1>
        <p className="eda-desc">{demandCourse.why}</p>
        <ul
          className="eda-desc"
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
        >
          {demandCourse.whyList?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="info-cards-container">
        {/* Course Objective Section */}
        <div className="info-card objective-card">
          <h1 className="card-title">Course Objective</h1>
          <p className="card-description">{demandCourse.courseObj}</p>
          <ul
            className="card-description"
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
          >
            {demandCourse.courseObjList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Scope of Course Section */}
        <div className="info-card scope-card">
          <h1 className="card-title">Scope of Course</h1>
          <p className="card-description">{demandCourse.scope}</p>
          <ul
            className="card-description"
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
          >
            {demandCourse.scopeList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Career Opportunities Section */}
        <div className="info-card career-card">
          <h1 className="card-title">Career Opportunities</h1>
          <p className="card-description">{demandCourse.career}</p>
          <ul
            className="card-description"
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
          >
            {demandCourse.careerList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="career-description">
        <p className="card-description">{demandCourse.careerdesc}</p>
      </div>

      <div className="enroll-now">
        <p className="card-description">{demandCourse.enrolltoday}</p>
      </div>
    </div>
  );
}

export default DemandSingle;
