import React from 'react';
import './index.css';

const Skills = () => {
  // Skills data organized by categories
  const skillsData = {
    programmingLanguages: ['Python', 'SQL', 'Node.js'],
    technologies: ['HTML', 'CSS', 'React.js', 'JavaScript', 'Operating System'],
    tools: ['Github', 'Nxtwave playground IDP']
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-content">
          <div className="skills-category">
            <h3>Programming Languages</h3>
            <div className="skills-grid">
              {skillsData.programmingLanguages.map((skill, index) => (
                <div key={index} className="skill-card">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Technologies</h3>
            <div className="skills-grid">
              {skillsData.technologies.map((skill, index) => (
                <div key={index} className="skill-card">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Tools</h3>
            <div className="skills-grid">
              {skillsData.tools.map((skill, index) => (
                <div key={index} className="skill-card">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
