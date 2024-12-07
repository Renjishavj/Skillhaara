import React, { useEffect } from 'react';
import { useNavigate, Routes, Route } from "react-router-dom";
import AdminSidebar from './AdminSidebar';
import Courses from './Courses';
import AddCourse from './AddCourse';
import AdminCourseEnq from './AdminCourseEnq';
import AdminCustomer from './AdminCustomer';
import AdminCorporate from './AdminCorporate';
import AdminHire from './AdminHire';
import AdminFranchise from './AdminFranchise';
import AdminCertificate from './AdminCertificate';
import AddIndemand from './AddIndemand';
import "../assets/styles/style.css"

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/adminlogin'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  return (
    <div className='admin-main'>
      <div>
        <AdminSidebar />
      </div>
      <div className='scrolldiv'>
        <Routes>
          <Route path='courses' element={<Courses />} />
          <Route path='addcourse' element={<AddCourse />} />  {/* Removed '*' from path */}
          <Route path='add-indemand' element={<AddIndemand />} />  {/* Removed '*' from path */}
          <Route path='viewcourseenq' element={<AdminCourseEnq />} />
          <Route path='viewcustomer' element={<AdminCustomer />} />
          <Route path='viewcorporate' element={<AdminCorporate />} />
          <Route path='viewhire' element={<AdminHire />} />
          <Route path='viewfranchise' element={<AdminFranchise />} />
          <Route path='addcertificate' element={<AdminCertificate />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
