import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DemandList() {
  const [demands, setDemands] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
   
    axios
      .get('http://localhost:3300/user/view-demand')
      .then((response) => {
        setDemands(response.data.data); 
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching demands:', error);
      });
  }, []);

  const handleCourseSelect = useCallback((demandId) => {
    navigate(`Singleindemand/${demandId}`); 
  }, [navigate]);

  return (
    <div className='Trend-main'>
      {demands.length > 0 ? (
        demands.map((demand) => (
          <div
            key={demand.Id} 
            className="max-w-[16rem] min-w-[14rem] rounded-lg overflow-hidden shadow-lg mx-auto bg-white"
            onClick={() => handleCourseSelect(demand.Id)}
          >
            <img
              className="rounded-t-lg w-[12rem] mx-auto mt-3"
              src={demand.mainImage} 
              alt={demand.title}
            />

            <div className="p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">Trending Courses</p>
              <h2 className="font-bold text-sm text-blue-700 mb-2">{demand.title}</h2>
            </div>
          </div>
        ))
      ) : (
        <p className="load">Loading...</p> 
      )}
    </div>
  );
}

export default DemandList;
