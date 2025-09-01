import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate form submission (since we're using GitHub Pages)
      console.log('Contact form submission:', formData);
      
      // You can add email service integration here later
      // For now, just show success message
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect!</h3>
            <p>I'm open to collaborations, internships, and opportunities where I can learn, grow, and contribute to impactful projects.</p>
            
            <div className="contact-items">
              <div className="contact-item">
                <FaEnvelope />
                <a href="mailto:vasantnaik91369@gmail.com">vasantnaik91369@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaLinkedin />
                <a href="https://linkedin.com/in/vasant-naik-23738b297" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/vasant-naik-23738b297
                </a>
              </div>
              <div className="contact-item">
                <FaGithub />
                <a href="https://github.com/vasant3907" target="_blank" rel="noopener noreferrer">
                  github.com/vasant3907
                </a>
              </div>
              <div className="contact-item">
                <FaCode />
                <a href="https://leetcode.com/u/vasanthnaik" target="_blank" rel="noopener noreferrer">
                  leetcode.com/u/vasanthnaik
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {success ? (
              <div className="success-message">
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you soon!</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setSuccess(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                {error && <div className="error-message">{error}</div>}
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
