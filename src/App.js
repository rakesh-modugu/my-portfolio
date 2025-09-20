import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Strengths from './components/Strengths';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* Main portfolio sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
      <Strengths />
      <Contact />
    </div>
  );
}

export default App;
