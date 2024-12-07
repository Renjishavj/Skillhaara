import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../assets/styles/style.css"
function EditDemand() {
  const { demandId } = useParams(); 
  const [demand, setDemand] = useState(null); 
  const { courseId } = useParams();
 
  useEffect(() => {
    if (demandId) {
      axios
        .get(`http://localhost:3300/user/view-demand/${demandId}`)
        .then((response) => {
          setDemand(response.data.data); 
        })
        .catch((error) => {
          console.error('Error fetching demand details:', error);
        });
    }
  }, [demandId]);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDemand((prevDemand) => ({
      ...prevDemand,
      [name]: value,
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3300/user/edit-demand/${demandId}`, demand)
      .then((response) => {
        alert('In-demand course updated successfully!');
        window.location.href = `/admin/addcourse`;
      })
      .catch((error) => {
        console.error('Error updating demand course:', error);
        alert('Failed to update the demand course');
      });
  };

  
  if (!demand) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto pt-0 pl-32 pb-32">
      
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="demandId">
          ID
        </label>
        <input
          type="text"
          id="demandId"
          name="demandId"
          value={demand.demandId || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter demand ID"
        />
      </div>

     
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="mainImage">
          Main Image URL
        </label>
        <input
          type="text"
          id="mainImage"
          name="mainImage"
          value={demand.mainImage || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter main image URL"
        />
      </div>

     
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="bannerImage">
          Banner Image URL
        </label>
        <input
          type="text"
          id="bannerImage"
          name="bannerImage"
          value={demand.bannerImage || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter banner image URL"
        />
      </div>

     
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={demand.title || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter title"
        />
      </div>

     
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="overview">
          Overview
        </label>
        <textarea
          id="overview"
          name="overview"
          value={demand.overview || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter overview"
        />
      </div>

      
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="why">
          Why
        </label>
        <textarea
          id="why"
          name="why"
          value={demand.why || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter reasons why"
        />
      </div>

      
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="whyList">
          Why List (comma-separated)
        </label>
        <input
          type="text"
          id="whyList"
          name="whyList"
          value={demand.whyList || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter why list"
        />
      </div>

     
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="courseObj">
          Course Objectives
        </label>
        <textarea
          id="courseObj"
          name="courseObj"
          value={demand.courseObj || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter course objectives"
        />
      </div>

     
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="courseObjList">
          Course Objectives List (comma-separated)
        </label>
        <input
          type="text"
          id="courseObjList"
          name="courseObjList"
          value={demand.courseObjList || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter course objectives list"
        />
      </div>

      
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="scope">
          Scope
        </label>
        <textarea
          id="scope"
          name="scope"
          value={demand.scope || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter scope"
        />
      </div>

      
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="scopeList">
          Scope List (comma-separated)
        </label>
        <input
          type="text"
          id="scopeList"
          name="scopeList"
          value={demand.scopeList || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter scope list"
        />
      </div>

     
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="career">
          Career
        </label>
        <textarea
          id="career"
          name="career"
          value={demand.career || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter career opportunities"
        />
      </div>

     
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="careerList">
          Career List (comma-separated)
        </label>
        <input
          type="text"
          id="careerList"
          name="careerList"
          value={demand.careerList || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter career opportunities list"
        />
      </div>

     
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="careerdesc">
          Career Description
        </label>
        <textarea
          id="careerdesc"
          name="careerdesc"
          value={demand.careerdesc || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter career description"
        />
      </div>

     
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="enrolltoday">
          Enroll Today
        </label>
        <textarea
          id="enrolltoday"
          name="enrolltoday"
          value={demand.enrolltoday || ''}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter enroll today message"
        />
      </div>

     
      <button
        type="submit"
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Update In-Demand Course
      </button>
    </form>
  );
}

export default EditDemand;
