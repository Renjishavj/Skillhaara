import React, { useState } from 'react';
import work from "../assets/images/wor.webp";
import place from "../assets/images/woo.webp";
import learn from "../assets/images/lee.webp";

const SubBanner = () => {
  // Set 'development' as the default active section
  const [activeSection, setActiveSection] = useState('development');

  const handleToggle = (section) => {
    // Only set the active section if a different section is clicked
    if (activeSection !== section) {
      setActiveSection(section);
    }
  };

  return (
    <div className=" p-10 sub-banner">
      
      <div className="w-1/2 space-y-8">
        <div onClick={() => handleToggle('development')} className="cursor-pointer sub-ban-head">
          Develop In-Demand Skills
        </div>
        {activeSection === 'development' && (
          <p className="desc-subban">
            "Develop In-Demand Skills" focuses on equipping individuals with the knowledge and abilities that are currently sought after in the industry. It emphasizes practical training and hands-on experience to help learners stay competitive in the job market. By mastering these skills, individuals can increase their employability and career growth opportunities.
          </p>
        )}

        <div onClick={() => handleToggle('learning')} className="cursor-pointer sub-ban-headone">
          Comprehensive Learning Experience
        </div>
        {activeSection === 'learning' && (
          <p className="desc-subban">
            "Comprehensive Learning Experience" provides a blend of theory and hands-on practice for in-depth understanding. It uses interactive methods and real-world examples to enhance learning. This approach ensures readiness for real-life challenges in the field.
          </p>
        )}

        <div onClick={() => handleToggle('placement')} className="cursor-pointer sub-ban-headtwo">
          Assured Job Placement
        </div>
        {activeSection === 'placement' && (
          <p className="desc-subban">
            "Assured Job Placement" focuses on guiding learners toward successful employment in their chosen field. With dedicated placement support and industry connections, it maximizes job opportunities. This commitment helps students confidently transition from learning to a rewarding career.
          </p>
        )}
      </div>

     
      <div className="w-1/2 flex justify-center items-center">
        {activeSection === 'development' && (
          <img src={work} alt="Development" className="bannimg" />
        )}
        {activeSection === 'learning' && (
          <img src={learn} alt="Learning" className="bannimg" />
        )}
        {activeSection === 'placement' && (
          <img src={place} alt="Placement" className="bannimg" />
        )}
      </div>
    </div>
  );
};

export default SubBanner;
