import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

function CourseList() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get("http://localhost:3300/user/view-maincourse")
      .then((response) => {
        setCourses(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  const handleCourseSelect = useCallback((course_id) => {
    navigate(`viewsingle/${course_id}`); 
  }, [navigate]);

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Course List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="max-w-[16rem] min-w-[14rem] rounded-lg overflow-hidden shadow-lg mx-auto bg-white"
            onClick={() => handleCourseSelect(course._id)} 
          >
            <img
              className="rounded-t-lg w-[12rem] mx-auto mt-3"
              src={course.mainImage || "defaultImage.jpg"}
              alt={course.title}
            />
            <div className="p-3 text-center">
              <h2 className="font-bold text-sm text-blue-700 mb-2">
                {course.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
