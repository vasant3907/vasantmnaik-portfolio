import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const personalInfo = {
    name: 'Vasant M Naik',
    title: 'Full Stack Developer',
    description: 'Passionate about creating end-to-end solutions with Python, Django, and React.js. Building scalable applications that solve real-world problems.',
    email: 'vasantnaik91369@gmail.com',
    linkedin_url: 'https://linkedin.com/in/vasant-naik-23738b297',
    github_url: 'https://github.com/vasant3907',
    leetcode_url: 'https://leetcode.com/u/vasanthnaik',
    about_text: "Hi, I'm Vasant M Naik, a passionate Full Stack Developer specializing in Python, Django, and React.js. I love creating end-to-end solutions — from powerful backends to engaging user interfaces — with a focus on clean, scalable, and efficient code. I have hands-on experience building e-commerce platforms, campaign tools, and project management systems, and I enjoy solving real-world problems with technology. My goal is to keep learning, improve continuously, and contribute to impactful projects.",
    years_experience: 3,
    projects_completed: 10,
    technologies_known: 5
  };

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
            <h3>{personalInfo.name}</h3>
            <h4>{personalInfo.title}</h4>
            <p>{personalInfo.about_text}</p>
            
            <div className="about-stats">
              <div className="stat">
                <FaBriefcase />
                <div>
                  <h4>{personalInfo.years_experience}+</h4>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="stat">
                <FaCode />
                <div>
                  <h4>{personalInfo.projects_completed}+</h4>
                  <p>Projects Completed</p>
                </div>
              </div>
              <div className="stat">
                <FaGraduationCap />
                <div>
                  <h4>{personalInfo.technologies_known}+</h4>
                  <p>Technologies</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-links"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <FaUser />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="contact-item">
                <FaCode />
                <a href={personalInfo.github_url} target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </div>
              <div className="contact-item">
                <FaBriefcase />
                <a href={personalInfo.linkedin_url} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
              <div className="contact-item">
                <FaGraduationCap />
                <a href={personalInfo.leetcode_url} target="_blank" rel="noopener noreferrer">
                  LeetCode Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
