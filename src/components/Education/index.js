import React from 'react';
import './index.css';

const Education = () => {
  // Education data from resume
  const educationData = [
    {
      degree: 'B.TECH IN (CSE)',
      institution: 'Sree Vahini Institute of Science and Technology, Tiruvuru',
      duration: '2021-2025',
      grade: 'CGPA: 6.7',
      id: 1
    },
    {
      degree: 'INTERMEDIATE (MPC)',
      institution: 'Sri Nidhi Junior College, Tiruvuru',
      duration: '2019-2021',
      grade: 'Percentage: 68.5',
      id: 2
    },
    {
      degree: 'CBSE (10th)',
      institution: 'ZPHS High School, Gamplaagudem',
      duration: '2018-2019',
      grade: 'Percentage: 8.5',
      id: 3
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-timeline">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-duration">{edu.duration}</p>
                <p className="education-grade">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
