import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const [text, setText] = useState('');
  const [fullText, setFullText] = useState('Data Scientist');
  const [index, setIndex] = useState(0);
  const roles = ['Data Scientist', 'Python Developer', 'Problem Solver', 'ML Enthusiast'];

  useEffect(() => {
    let currentText = roles[index];
    let j = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentRole = roles[index];
      if (isDeleting) {
        setText(currentRole.substring(0, j - 1));
        j--;
      } else {
        setText(currentRole.substring(0, j + 1));
        j++;
      }

      if (!isDeleting && j === currentRole.length) {
        setTimeout(() => { isDeleting = true; }, 2000);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        setIndex((prev) => (prev + 1) % roles.length);
      }

      const timeout = isDeleting ? 50 : 100;
      setTimeout(type, timeout);
    };

    const initialTimeout = setTimeout(type, 500);
    return () => clearTimeout(initialTimeout);
    // Note: This is an oversimplified manual implementation for stability.
    // In a real app we might use a more robust hook, but let's keep it simple for now.
  }, [index]);

  return (
    <section className={styles.hero} id="hero">
      <ParticleBackground />
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h4 
            className={styles.intro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, my name is
          </motion.h4>
          <motion.h1 
            className={styles.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Athul Krishna
          </motion.h1>
          <div className={styles.typingContainer}>
            <span className={styles.iAm}>I am a </span>
            <span className={styles.typingText}>{text}</span>
          </div>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I specialize in turning data into actionable insights and building 
            predictive models that solve real-world problems. Currently exploring 
            the intersection of machine learning and business strategy.
          </motion.p>
          
          <motion.div 
            className={styles.cta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a href="#projects" className={styles.primaryBtn}>View My Work</a>
            <a href="#contact" className={styles.secondaryBtn}>Get In Touch</a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className={styles.mouse}></div>
      </motion.div>
    </section>
  );
};

export default Hero;
