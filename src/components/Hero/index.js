import React, { useState, useEffect } from 'react';
import './index.css';

const Hero = () => {
  // State for typing animation effect
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer';
  
  // Simple typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Rakesh Modugu</h1>
            <h3 className="hero-title">Aspiring {displayText}<span className="cursor">|</span></h3>
            <p className="hero-description">
              Final year B.Tech CSE student passionate about creating scalable 
              and responsive web applications
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">View Projects</a>
              <a href="#contact" className="btn secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
              <span>RM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
