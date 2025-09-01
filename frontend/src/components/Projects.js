import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaShoppingCart, FaCog } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use local data instead of API call
    setProjects(projectsData.results || projectsData);
    setLoading(false);
  }, []);

  const getProjectIcon = (title) => {
    if (title.includes('React')) {
      return <FaShoppingCart />;
    }
    return <FaCog />;
  };

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                {getProjectIcon(project.title)}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies && project.technologies.map((tech) => (
                    <span key={tech.id} className="tech-tag">
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github_url && (
                    <a href={project.github_url} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.live_url && (
                    <a href={project.live_url} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
