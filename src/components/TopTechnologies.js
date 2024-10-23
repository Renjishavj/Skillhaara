import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import "../App.css";
import "../assets/styles/style.css";
import { useNavigate } from 'react-router-dom';

function TopTechnologies() {
  const [technologies, setTechnologies] = useState([]);

  const navigate = useNavigate(); 

 
  useEffect(() => {
    axios
      .get("http://localhost:3300/user/view-maincourse")
      .then((response) => {
        setTechnologies(response.data.data);
        console.log(response.data.data); 
      })
      .catch((error) => {
        console.error("Error fetching technologies:", error);
      });
  }, []);

 
  const handleCourseSelect = useCallback((tech_id) => {
    navigate(`/vieweach/${tech_id}`);  
  }, [navigate]);

  return (
    <>
   <div className='top-section'>
    <hr className='top-hr'/>
   <h1 className="top-tech">Top Technologies Offered</h1>
   <hr className='top-hr'/>
   </div>
      <div className="flex justify-center mt-5 mx-10 sm:mx-8 lg:mx-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {technologies.map((tech) => (
            <div key={tech._id} className="col-span-1">
              <div
                className="custom-card bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <img className="rounded-t-lg" src={tech.mainImage || "defaultImage.jpg"} alt={tech.title} />
                <div className="p-5">
                 
                  <button
                    onClick={() => handleCourseSelect(tech._id)}  
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopTechnologies;
