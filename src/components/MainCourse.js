import React, { useState } from 'react';
import axios from 'axios';
import "../assets/styles/style.css"
function MainCourse() {
  const [formData, setFormData] = useState({
    id:'',
    mainImage: '',
    bannerImage: '', 
    title: '',
    overview: '',
    technologies: '',
    courses: [],
    courseInput: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddCourse = () => {
    if (formData.courseInput) {
      setFormData((prevData) => ({
        ...prevData,
        courses: [...prevData.courses, formData.courseInput],
        courseInput: '',
      }));
    }
  };

 
  const handleDeleteCourse = (index) => {
    const updatedCourses = formData.courses.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      courses: updatedCourses,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3300/user/maincourse', {
        mainImage: formData.mainImage,
        bannerImage: formData.bannerImage, 
        title: formData.title,
        overview: formData.overview,
        technologies: formData.technologies,
        courses: formData.courses,
        inDemandCareers: [], 
      });
      
      console.log('Course details saved successfully', response.data);
      alert("Course details saved successfully");
      window.location.href = '/admin/addcourse';
      
    } catch (error) {
      console.error('Error saving course details', error);
    }
  };

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
          value={formData.mainImage}
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
          value={formData.bannerImage}
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
          value={formData.title}
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
          value={formData.overview}
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
          value={formData.technologies}
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
          value={formData.courseInput}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter course name"
        />
        <button
          type="button"
          onClick={handleAddCourse}
          className="bg-blue-500 text-white px-4 py-2 mt-2"
        >
          Add Course
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Course List:</label>
        <ul>
          {formData.courses.map((course, index) => (
            <li key={index} className="list-disc list-inside flex items-center justify-between">
              {course}
              <button
                type="button"
                onClick={() => handleDeleteCourse(index)}
                className="bg-red-500 text-white px-2 py-1 ml-4"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 w-full"
      >
        Submit
      </button>
    </form>
    
  );
}

export default MainCourse;
