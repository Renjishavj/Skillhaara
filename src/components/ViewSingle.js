import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

function ViewSingle() {
  const { courseId } = useParams();
  
  const [course, setCourse] = useState(null);
  const [demands, setDemands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (courseId) {
      axios
        .get(`http://localhost:3300/user/view-maincourse/${courseId}`)
        .then((response) => {
          setCourse(response.data.data);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching course details:", error);
        });
    }
  }, [courseId]);

  useEffect(() => {
    axios
      .get(`http://localhost:3300/user/view-course-demands/${courseId}`)
      .then((response) => {
        setDemands(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching demands:", error);
      });
  }, []);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3300/user/delete-maincourse/${courseId}`)
      .then(() => {
        alert("Course deleted successfully.");
        navigate("/admin/addcourse");
      })
      .catch((error) => {
        console.error("Error deleting course:", error);
        alert("Failed to delete the course.");
      });
  };

  const handleCourseSelect = () => {
    navigate(`/admin/addcourse/edit/${courseId}`);
  };

  const handleSelect = (demandId) => {
    navigate(`/admin/addcourse/viewsingle/${courseId}/editDemand/${demandId}`);
  };
  
  if (!course) {
    return <div className="load">Loading...</div>;
  }

  return (
    <div className="viewlist-main">
      <h1 className="title-viewcourse">{course.title}</h1>
      <div className="view-image">
        <p>Baner Image</p>
        <img
          src={course.bannerImage}
          alt="Banner"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
      <div className="view-image">
        <p>MainImage</p>
        <img
          src={course.mainImage}
          alt="main"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
      <div>
        <h1 className="overview-main">Course overview</h1>
        <p className="eda-desc">
          {course.overview || "No overview available for this course."}
        </p>
      </div>
      <div className="eda-form-div">
        <div>
          <h2 className="eda-subhead">Technologies Covered:</h2>
          <p className="eda-desc">{course.technologies}</p>

          <ul className="eda-ul" style={{ listStyle: "disc" }}>
            {course.courses.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button onClick={handleDelete} className="delete-button">
          Delete Course
        </button>

        <button
          className="edit-button"
          onClick={() => handleCourseSelect(course._id)}
        >
          Edit
        </button>
      </div>
      <div className="dem-head">
        <h1 className="top-tech-dem">In-Demand careers</h1>
      </div>
      <div className="ind-btn">
        <Link to="demandcourse">
          <button className="btn-add">Add Indemand</button>
        </Link>
      </div>
      <div className="Trend-main">
        {demands.length > 0 ? (
          demands.map((demand) => (
            <div
              key={demand.Id}
              className="max-w-[16rem] min-w-[14rem] rounded-lg overflow-hidden shadow-lg mx-auto bg-white"
              onClick={() => handleSelect(demand.Id)}
            >
              <img
                className="rounded-t-lg w-[12rem] mx-auto mt-3"
                src={demand.mainImage}
                alt={demand.title}
              />

              <div className="p-3 text-center">
                <p className="text-xs text-gray-500 mb-1">Trending Courses</p>
                <h2 className="font-bold text-sm text-blue-700 mb-2">
                  {demand.title}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <p className="load">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ViewSingle;
