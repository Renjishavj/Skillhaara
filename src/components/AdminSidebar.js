import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../assets/styles/style.css"
function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
     
      await axios.post('http://localhost:3300/user/logout');

     
      localStorage.removeItem('authToken'); 

     
      navigate('/adminlogin');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
    <div className="sidebar">
      
       <div>
        <button className='adm-btn'>ADMIN</button>
       </div>
       
        <div>
        <button>Dashboard</button>
        </div>
        <div>
        <Link to="addcourse">
        <button>Add Course</button>
        </Link>
        </div>
        
        <div>
       <Link to="viewcourseenq"> 
       <button>Course Enquiry</button>
       </Link>
        </div>
        <div>
        <Link to="viewcustomer">
        <button>Customer Support</button>
        </Link>
        </div>
       <div>
       <Link to="viewcorporate">
       <button>Corporate Trainings</button>
       </Link>
       </div>
       <div>
       <Link to="viewhire">
       <button> Hire From Us</button>
       </Link>
       </div>
       <div>
       <Link to="viewfranchise">
       <button>Franchise Enquiry</button>
       </Link>
       </div>
       <div>
       <Link to="addcertificate">
       <button>Certificate</button>
       </Link>
       </div>
       <div>
       <button onClick={handleLogout}>Logout</button>
       </div>
      
     
      
    </div>
  )
}

export default AdminSidebar
