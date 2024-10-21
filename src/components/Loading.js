import React, { useEffect, useState } from 'react';
import "../assets/styles/style.css";

const LoadingEffect = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period of 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container">
      {loading ? (
        <div className="loading-text">
          <span className="animated-text">SkillHaara</span>
        </div>
      ) : (
        <div className="loaded-content">Content Loaded!</div>
      )}
    </div>
  );
};

export default LoadingEffect;
