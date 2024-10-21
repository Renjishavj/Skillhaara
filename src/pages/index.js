import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/style.css';
import Technologies from '../components/Technologies';
import Aboutus from '../components/Aboutus';
import Contactus from '../components/Contactus';
import Certificate from '../components/Certificate';
import ViewEach from '../components/ViewEach';
import EDA from '../components/EDA';
import AdminLogin from '../components/AdminLogin';
import Admin from '../components/Admin';
import DemandSingle from '../components/DemandSingle';

function HomePage() {
  return (
    <div>
      <Header />
     
      <div >
        <Routes>
          <Route path="/" exact element={<Technologies />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="contactus/*" element={<Contactus />} />
          <Route path="certificate" element={<Certificate />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="admin/*" element={<Admin />} />
          <Route path="eda" element={<EDA />} />
          <Route path="/vieweach/:techId" element={<ViewEach />} />
          <Route path="/demandsingle/:demandId" element={<DemandSingle />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
