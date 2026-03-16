import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.contactWrapper}>
          <motion.div 
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Let's Connect</h2>
            <p className={styles.description}>
              I'm currently looking for new opportunities in Data Science and Machine Learning. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className={styles.socials}>
              <a href="mailto:your.email@example.com" className={styles.socialLink}>
                <FaEnvelope className={styles.icon} />
                <span>your.email@example.com</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaLinkedin className={styles.icon} />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaGithub className={styles.icon} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.cardTitle}>Why me?</h3>
            <ul className={styles.features}>
              <li>Strong Python/SQL Proficiency</li>
              <li>Analytical Problem Solver</li>
              <li>Collaborative Team Player</li>
              <li>Continuous Learner</li>
            </ul>
            <div className={styles.availability}>
              <span className={styles.statusDot}></span>
              Available for Internships
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
