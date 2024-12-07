import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles/style.css"

function EditCourse() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (courseId) {
      axios
        .get(`http://localhost:3300/user/view-maincourse/${courseId}`)
        .then((response) => {
          setCourse(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching course details:", error);
        });
    }
  }, [courseId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3300/user/edit-maincourse/${courseId}`, course)
      .then((response) => {
        console.log("Course updated successfully:", response.data);
        alert("updated")
        window.location.href = '/admin/addcourse';
      })
      .catch((error) => {
        console.error("Error updating course:", error);
      });
  };

  if (!course) return <div className="load">Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto pt-0 pl-32 pb-32">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="mainImage">
          Main Image URL
        </label>
        <input
          type="text"
          id="mainImage"
          name="mainImage"
          value={course.mainImage || ""}
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
          value={course.bannerImage || ""}
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
          value={course.title || ""}
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
          value={course.overview || ""}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter overview"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="technologies">
          Technologies
        </label>
        <textarea
          id="technologies"
          name="technologies"
          value={course.technologies || ""}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter technologies used"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="courseInput">
          Add Course
        </label>
        <input
          type="text"
          id="courseInput"
          name="courseInput"
          className="border p-2 w-full"
          placeholder="Enter course name"
        />
        <button type="button" className="bg-blue-500 text-white px-4 py-2 mt-2">
          Add Course
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Course List:</label>
        <ul>
          {course.courses?.map((courseItem, index) => (
            <li key={index} className="list-disc list-inside">
              {courseItem}
            </li>
          ))}
        </ul>
      </div>

      <button type="submit" className="bg-green-500 text-white px-4 py-2 w-full">
        Submit
      </button>
    </form>
  );
}

export default EditCourse;
