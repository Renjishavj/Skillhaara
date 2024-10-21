import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ban from "../assets/images/banner.png";

function SingleIndemand() {
  const { demandId } = useParams();
  const { courseId } = useParams();

  const navigate = useNavigate();

 
  const [demandCourse, setDemandCourse] = useState(null);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchDemandCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:3300/user/view-demand/${demandId}`);
        setDemandCourse(response.data.data); 
      } catch (error) {
        setError('Error fetching course details.'); 
      }
    };

    fetchDemandCourse();
  }, [demandId]);

  const handleCourseSelect = () => {
    
    navigate(`/admin/add-indemand/edit-indemand/${demandId}`);
  };

  if (error) {
    return <p>{error}</p>; 
  }

  if (!demandCourse) {
    return <p className="load">Loading...</p>; 
  }
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3300/user/delete-demand/${demandId}`);
      if (response.status === 200) {
        alert("Course deleted successfully!");
       window.location.href = `/admin/addcourse/viewsingle/${courseId}`;
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete the course.");
    }
  };

  return (
    <div className="viewlist-main">
      <div>
        <h1 className="title-viewcourse">{demandCourse.title}</h1>
        <div className="view-image">
          <p>Banner Image</p>
          <img
            src={demandCourse.bannerImage || ban}
            alt="Banner"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      </div>

      <div className="view-image">
        <p>Main Image</p>
        <img
          src={demandCourse.mainImage || ban}
          alt="Main"
          style={{ width: "300px", height: "auto" }}
        />
      </div>

      <div>
        <h1 className="overview-main">Course Overview</h1>
        <p className="eda-desc">{demandCourse.overview}</p>
      </div>

      <div>
        <h1 className="overview-main">Why Python Development?</h1>
        <p className="eda-desc">{demandCourse.why}</p>
      </div>

      <div>
        <p className='demand-list'>Why List</p>
        <ul className="eda-desc" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {demandCourse.whyList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="overview-main">Course Objective</h1>
        <p className="eda-desc">{demandCourse.courseObj}</p>
        <p className='demand-list'>Course List</p>
        <ul className="eda-desc" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {demandCourse.courseObjList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="overview-main">Scope of Course</h1>
        <p className="eda-desc">{demandCourse.scope}</p>
        <p className='demand-list'>Scope List</p>
        <ul className="eda-desc" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {demandCourse.scopeList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="overview-main">Career opportunities</h1>
        <p className="eda-desc">{demandCourse.career}</p>
        
        <p className='demand-list'>Career List</p>
        <ul className="eda-desc" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {demandCourse.careerList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="overview-main">Career Description</h1>
        <p className="eda-desc">{demandCourse.careerdesc}</p>
      </div>

      <div>
        <h1 className="overview-main">Enroll Today</h1>
        <p className="eda-desc">{demandCourse.enrolltoday}</p>
      </div>

      <button className="delete-button" onClick={handleDelete}>
        Delete Course
      </button>

      <button className="edit-button" onClick={() => handleCourseSelect(demandId)}>
        Edit
      </button>
    </div>
  );
}

export default SingleIndemand;
