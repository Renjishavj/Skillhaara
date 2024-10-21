import React, { useState } from 'react';
import Baner from "../components/ContactBanner";
import FranchiseEnquiry from './FranchiseEnquiry';
import CorporateTraining from './CorporateTraining';
import CustomerSupport from "./CustomerSupport"
import HireFromUs from './HireFromUs';
import CourseEnquiry from "./CourseEnquiry"
import { Route, Routes,Link } from "react-router-dom";

function Contactus() {

  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className="Contact-baner-container">
        <Baner />
      </div>
      <div className="Contact-container">
        <div className="button-container">
          <Link to="customer">
          <button className={activeButton === 'customerSupport' ? 'btn-active' :""}
            onClick={() => handleClick('customerSupport')}>
            Customer Support
          </button>
          </Link>
          <Link to="course">
          <button className={activeButton === 'Course Enquiry' ? 'btn-active' : ''}
            onClick={() => handleClick('Course Enquiry')}>
            Course Enquiry
          </button>
          </Link>
         <Link to="franchise">
         <button className={activeButton === 'Franchise Enquiry' ? 'btn-active' : ''}
            onClick={() => handleClick('Franchise Enquiry')}>
            Franchise Enquiry
          </button>
         </Link>
         <Link to="corporate">
         <button  className={activeButton === 'Corporate Trainings' ? 'btn-active' : ''}
            onClick={() => handleClick('Corporate Trainings')}>
            Corporate Trainings
          </button>
         </Link>
          <Link to="hire">
          <button className={activeButton === 'Hire From Us' ? 'btn-active' : ''}
            onClick={() => handleClick('Hire From Us')}>
            Hire From Us
          </button>
          </Link>
        </div>
        
      </div>
      <hr className='cont-hr'/>
      <div>
          <Routes>
            <Route path="customer" exact element={<CustomerSupport/>}/>
            <Route path="course" element={<CourseEnquiry/>}/>
            <Route path="franchise" element={<FranchiseEnquiry/>}/>
            <Route path="corporate" element={<CorporateTraining/>}/>
            <Route path="hire" element={<HireFromUs/>}/>
            <Route path="*" element={<CustomerSupport />} /> 
          </Routes>
      </div>
    </div>
  );
}

export default Contactus;
