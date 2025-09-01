import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCogs, FaTools, FaUsers } from 'react-icons/fa';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use local data instead of API call
    setSkills(skillsData);
    setLoading(false);
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming & Frameworks':
        return <FaCode />;
      case 'Databases':
        return <FaDatabase />;
      case 'Core Concepts':
        return <FaCogs />;
      case 'Tools':
        return <FaTools />;
      case 'Soft Skills':
        return <FaUsers />;
      default:
        return <FaCode />;
    }
  };

  if (loading) {
    return (
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="loading">Loading skills...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <motion.div 
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3>
                {getCategoryIcon(category)}
                {category}
              </h3>
              <div className="skill-tags">
                {categorySkills.map((skill, skillIndex) => (
                  <span key={skill.id} className="skill-tag">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
