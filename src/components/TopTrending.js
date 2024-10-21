import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import "../assets/styles/style.css";
import trend from "../assets/images/techno.avif";

function TopTrending() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3300/user/first-five-courses');
        setCourses(response.data.data); 
      } catch (error) {
        console.error('Error fetching trending courses:', error);
      }
    };

    fetchCourses();
  }, []);

  
  const handleKnowMore = (courseId) => {
    navigate(`/demandsingle/${courseId}`);
  };

  return (
    <div className='Trend-main'>
      {courses.length > 0 ? (
        courses.map((course, index) => (
          <div key={index} className="max-w-[16rem] min-w-[14rem] rounded-lg overflow-hidden shadow-lg mx-auto bg-white mb-6">
            <img className="rounded-t-lg w-[12rem] mx-auto mt-3" src={course.mainImage || trend} alt={course.title} />

            <div className="p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">Trending Courses</p>
              <h2 className="font-bold text-sm text-blue-700 mb-2">{course.title}</h2>
              <button
                onClick={() => handleKnowMore(course.Id)} 
                className="inline-block bg-red-600 text-white font-bold py-1 px-4 rounded hover:bg-red-700 transition"
              >
                Know More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading courses...</p>
      )}
    </div>
  );
}

export default TopTrending;
