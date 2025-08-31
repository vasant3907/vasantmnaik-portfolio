import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaProjectDiagram } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaUser />, number: "3+", label: "Years Experience" },
    { icon: <FaProjectDiagram />, number: "10+", label: "Projects Completed" },
    { icon: <FaCode />, number: "5+", label: "Technologies" }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Hi, I'm Vasant M Naik, a passionate Full Stack Developer specializing in Python, Django, and React.js.
              I love creating end-to-end solutions — from powerful backends to engaging user interfaces — with a focus on clean, scalable, and efficient code.
            </p>
            <p>
              I have hands-on experience building e-commerce platforms, campaign tools, and project management systems, and I enjoy solving real-world problems with technology. My goal is to keep learning, improve continuously, and contribute to impactful projects.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
