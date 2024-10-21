import React from "react";
import MainCourse from "./MainCourse";
import CourseList from "./CourseList";
import { Link, Routes, Route } from "react-router-dom";
import ViewSingle from "./ViewSingle";
import EditCourse from "./EditCourse";
import DemandCourse from "./DemandCourse";
import SingleIndemand from "./SingleIndemand";
import DemandList from "./DemandList";
import EditDemand from "./EditDemand";

function AddCourse() {
  return (
    <div>
      <div className="new-course">
        <Link to="maincourse">
          <button className="btn-add">Add New Course</button>
        </Link>
      </div>
      <div className="course-listing">
        <Routes>
          <Route index element={<CourseList />} />

          <Route path="/mainCourse" element={<MainCourse />}></Route>
          <Route path="/viewsingle/:courseId" element={<ViewSingle />}>
          </Route>
          <Route path="/viewsingle/:courseId/editDemand/:demandId" element={<SingleIndemand/>}></Route>
            <Route path="/viewsingle/:courseId/demandcourse" element={<DemandCourse />} />
            <Route path="" element={<EditDemand />} />

          <Route path="/edit/:courseId" element={<EditCourse />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default AddCourse;
