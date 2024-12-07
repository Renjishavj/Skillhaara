import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Technologies from '../components/Technologies';
import Aboutus from '../components/Aboutus';
import Contactus from '../components/Contactus';
import Certificate from '../components/Certificate';
import ViewEach from '../components/ViewEach';
import EDA from '../components/EDA';
import AdminLogin from '../components/AdminLogin';
import Admin from '../components/Admin';
import DemandSingle from '../components/DemandSingle';
import Programs from '../components/Programs';
import SkillFest from '../components/SkillFest';

function HomePage() {
  return (
    <div className="homepage-container">
      <Header />
      <main className="homepage-content">
        <Routes>
          <Route path="/" element={<Technologies />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="contactus/*" element={<Contactus />} />
          <Route path="certificate" element={<Certificate />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="admin/*" element={<Admin />} />
          <Route path="eda" element={<EDA />} />
          <Route path="programs" element={<Programs />} />
          <Route path="/vieweach/:techId" element={<ViewEach />} />
          <Route path="/demandsingle/:demandId" element={<DemandSingle />} />
          <Route path="skillfest2025" element={<SkillFest />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
