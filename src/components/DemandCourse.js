import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/styles/style.css"

function DemandCourse() {
  const nav = useNavigate()
  const { courseId } = useParams();
  const [formData, setFormData] = useState({
    Id: "",
    mainImage: "",
    bannerImage: "",
    title: "",
    overview: "",
    why: "",
    whyList: "",
    courseObj: "",
    courseObjList: "",
    scope: "",
    scopeList: "",
    career: "",
    careerList: "",
    careerdesc: "",
    enrolltoday: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3300/user/add-demand",
        {
          ...formData,
          whyList: formData.whyList.split(","),
          courseObjList: formData.courseObjList.split(","),
          scopeList: formData.scopeList.split(","),
          careerList: formData.careerList.split(","),
          parentId: courseId,
        }
      );
      alert("Demand added successfully");
      nav("../")
    } catch (error) {
      console.error("Error adding demand", error.response.data);
      alert(error.response.data.message || "Error adding demand");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Demand Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">ID</label>
          <input
            type="text"
            name="Id"
            defaultValue={formData.Id}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Main Image</label>
          <input
            type="text"
            name="mainImage"
            value={formData.mainImage}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Banner Image</label>
          <input
            type="text"
            name="bannerImage"
            value={formData.bannerImage}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Overview</label>
          <textarea
            name="overview"
            value={formData.overview}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Why</label>
          <textarea
            name="why"
            value={formData.why}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Why List (comma-separated)</label>
          <input
            type="text"
            name="whyList"
            value={formData.whyList}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Course Objective</label>
          <input
            type="text"
            name="courseObj"
            value={formData.courseObj}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Course Objective List (comma-separated)
          </label>
          <input
            type="text"
            name="courseObjList"
            value={formData.courseObjList}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Scope</label>
          <input
            type="text"
            name="scope"
            value={formData.scope}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Scope List (comma-separated)</label>
          <input
            type="text"
            name="scopeList"
            value={formData.scopeList}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Career</label>
          <input
            type="text"
            name="career"
            value={formData.career}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Career List (comma-separated)</label>
          <input
            type="text"
            name="careerList"
            value={formData.careerList}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Career Description</label>
          <textarea
            name="careerdesc"
            value={formData.careerdesc}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Enroll Today</label>
          <input
            type="text"
            name="enrolltoday"
            value={formData.enrolltoday}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">parent_id</label>
          <input
            type="text"
            name="p_id"
            className="w-full p-2 border border-gray-300 rounded"
            required
            value={courseId}
            disabled
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DemandCourse;
