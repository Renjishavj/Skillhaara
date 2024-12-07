import React from "react";
import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import four from "../assets/images/4.jpg";
import five from "../assets/images/5.jpg";
import six from "../assets/images/6.jpg";
import seven from "../assets/images/7.jpg";
import "../assets/styles/style.css"
function Why() {
  return (
    <div className="why-container">
      <div className="header">
        <h1 className="headerText">
          HERE, EVERY DREAM HAS THE POWER TO INSPIRE!
        </h1>
      </div>

      <div className="imageSection">
        <div className="overlayText">
          <h2 className="overlayHeading">Certifications & Awards</h2>
        </div>
      </div>
    <div className="carddd">
      <div className="cardSection">
        <div className="card">
          <div className="icon">
            <img
              src={one}
              alt="Convenient Study Time"
              className="cardIcon study"
            />
          </div>
        </div>

        <div className="card">
          <div className="icon ">
            <img src={two} alt="Placement Assistance" className="cardIcon" />
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <img src={three} alt="Hands-On Projects" className="cardIcon" />
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <img src={four} alt="Hands-On Projects" className="cardIcon" />
          </div>
        </div>
      {/* </div> */}
      {/* <div className="cardSection"> */}
        <div className="card">
          <div className="icon ">
            <img src={five} alt="Hands-On Projects" className="cardIcon" />
          </div>
        </div>

        <div className="card">
          <div className="icon ">
            <img src={six} alt="Hands-On Projects" className="cardIcon" />
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={seven} alt="Hands-On Projects" className="cardIcon" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Why;
