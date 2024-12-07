import React from "react";
import time from "../assets/images/time.png";
import placement from "../assets/images/placement.jpg";
import interactive from "../assets/images/interactive.png";
import mentor from "../assets/images/mentor.png";
import projects from "../assets/images/projects.jpg";
import tools from "../assets/images/tools.png";
import "../assets/styles/style.css"
function Spec() {
  return (
    <div className="features-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 p-4">
    <div className="feature-item1 flex flex-col items-center">
      <img src={time} alt="Convenient Study Time" className="time w-28 h-28" />
      <p className="feature-label label-stdy text-center mt-2">Convenient Study Time</p>
    </div>
  
    <div className="feature-item2 flex flex-col items-center">
      <img src={placement} alt="Placement Assistance" className="placement w-28 h-28" />
      <p className="feature-label text-center mt-2">Placement Assistance</p>
    </div>
  
    <div className="feature-item3 flex flex-col items-center">
      <img src={interactive} alt="Practical & Interactive Participation" className="interactive w-28 h-28" />
      <p className="feature-label pract text-center mt-2">Practical Participation</p>
    </div>
  
    <div className="feature-item4 flex flex-col items-center">
      <img src={mentor} alt="Expert Trainers" className="mentor w-28 h-28" />
      <p className="feature-label trainer text-center mt-2">Expert Trainers</p>
    </div>
  
    <div className="feature-item5 flex flex-col items-center">
      <img src={projects} alt="Hands-On Projects" className="projects w-28 h-28" />
      <p className="feature-label lab-project text-center mt-2">Hands-On Projects</p>
    </div>
  
    <div className="feature-item6 flex flex-col items-center">
      <img src={tools} alt="Industry-Standard Tools" className="tools w-28 h-28" />
      <p className="feature-label text-center mt-2">Industry-Standard Tools</p>
    </div>
  </div>
  
  );
}

export default Spec;
