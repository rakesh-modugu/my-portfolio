import React from 'react';
import './index.css';

const Projects = () => {
  // Projects data from resume
  const projectsData = [
    {
      title: 'JOBBY APP',
      description: 'Developed a comprehensive job search solution, Jobby App. Designed pages for Login, Home, Jobs, and item details with React components and form inputs. Implemented protected routes and persisted login state with React Router and local storage.',
      technologies: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token', 'Authorization', 'Authentication'],
      githubLink: '#', // Placeholder link as requested
      id: 1
    },
    {
      title: 'INSTA SHARE (INSTAGRAM CLONE)',
      description: 'Built a responsive Instagram-like streaming app where users can log in, view stories and posts, search by caption, like/dislike posts, and see user-specific posts. Implemented horizontal scrolling (In stories section) using React Third Party library called React Slick. Used Figma mockups to implement UI-rich and pixel-perfect React components. Implemented username and password authentication and persisted login state using client storage and protected routes.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Bootstrap', 'React Slick', 'Figma', 'Client Storage'],
      githubLink: '#', // Placeholder link as requested
      id: 2
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
