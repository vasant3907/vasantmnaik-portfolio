import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span>VMN</span>
        </motion.div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" onClick={() => scrollToSection('skills')} className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" onClick={() => scrollToSection('experience')} className="nav-link">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
