import React from 'react';
import './index.css';

const Strengths = () => {
  // Strengths data from resume
  const strengthsData = [
    { name: 'Time Management', icon: '⏰' },
    { name: 'Adaptability', icon: '🔄' },
    { name: 'Critical Thinking', icon: '🧠' },
    { name: 'Problem-Solving', icon: '💡' }
  ];

  return (
    <section className="strengths" id="strengths">
      <div className="container">
        <h2>Strengths</h2>
        <div className="strengths-grid">
          {strengthsData.map((strength, index) => (
            <div key={index} className="strength-card">
              <div className="strength-icon">{strength.icon}</div>
              <h3 className="strength-name">{strength.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
