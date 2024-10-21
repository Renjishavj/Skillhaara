import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Route, Routes } from "react-router-dom";
import Courses from './Courses';
import AddCourse from './AddCourse';
import AdminCourseEnq from './AdminCourseEnq';
import AdminCustomer from './AdminCustomer';
import AdminCorporate from './AdminCorporate';
import AdminHire from './AdminHire';
import AdminFranchise from './AdminFranchise';
import AdminCertificate from './AdminCertificate';
import AddIndemand from './AddIndemand';

function Admin() {
  return (
    <>
    <div className='admin-main'>
        <div><AdminSidebar/></div>
        <div className='scrolldiv'>
          <Routes>
            <Route path='courses' element={<Courses/>}/>
            <Route path='addcourse/*' element={<AddCourse/>}/>
            <Route path='add-indemand/*' element={<AddIndemand/>}></Route>
            <Route path='viewcourseenq' element={<AdminCourseEnq/>}/>
            <Route path='viewcustomer' element={<AdminCustomer/>}/>
            <Route path='viewcorporate' element={<AdminCorporate/>}/>
            <Route path='viewhire' element={<AdminHire/>}/>
            <Route path='viewfranchise' element={<AdminFranchise/>}/>
            <Route path='/addcertificate' element={<AdminCertificate/>} />
            
          </Routes>
        </div>
    </div>
    </>
  )
}

export default Admin
