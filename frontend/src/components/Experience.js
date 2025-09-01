import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { experiencesData } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use local data instead of API call
    setExperiences(experiencesData.results || experiencesData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience & Education</h2>
          <div className="loading">Loading experience...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((experience, index) => (
            <motion.div 
              key={experience.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>
                <p>{experience.description}</p>
                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="timeline-tech">
                    {experience.technologies.map((tech) => (
                      <span key={tech.id} className="tech-tag">
                        {tech.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
