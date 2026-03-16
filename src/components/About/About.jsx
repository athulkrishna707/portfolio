import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div 
          className={styles.aboutContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.textSide}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.bio}>
              I'm an aspiring Data Scientist with a passion for uncovering stories hidden in complex datasets. 
              With a strong foundation in mathematics and computer science, I bridge the gap between 
              technical execution and business strategy.
            </p>
            <p className={styles.bio}>
              My journey in data science began with a curiosity about how algorithms shape our world. 
              Since then, I've worked on diverse projects ranging from sales optimization to deep learning-based 
              forecasting. I'm constantly learning and expanding my toolkit to stay at the forefront of 
              technological innovation.
            </p>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Education</span>
                <span className={styles.value}>B.Tech in Computer Science</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Location</span>
                <span className={styles.value}>Ready to Relocate</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Goal</span>
                <span className={styles.value}>Internship / Entry-level DS</span>
              </div>
            </div>
          </div>
          
          <div className={styles.imageSide}>
            <div className={styles.imageFrame}>
              <img src="https://via.placeholder.com/400x400/16213e/ffffff?text=Professional+Photo" alt="Athul Krishna" />
              <div className={styles.overlay}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
