import React from 'react';
import './index.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I am an aspiring full-stack developer with a strong foundation in web 
              technologies and programming. Currently pursuing my final year of 
              B.Tech in Computer Science Engineering from Sree Vahini Institute of 
              Science and Technology.
            </p>
            <p className="about-description">
              I am interested in contributing to building scalable and responsive 
              applications while growing in a challenging and collaborative environment. 
              My passion lies in creating user-friendly interfaces and solving complex 
              problems through code.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <h4>Education</h4>
                <p>B.Tech CSE (2025)</p>
              </div>
              <div className="highlight-item">
                <h4>Experience</h4>
                <p>2+ Projects</p>
              </div>
              <div className="highlight-item">
                <h4>Focus</h4>
                <p>Full Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
