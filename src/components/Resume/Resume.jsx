import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <section className="section" id="resume">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Resume</h2>
          <p className={styles.subtitle}>View or download my professional credentials.</p>
        </motion.div>

        <motion.div 
          className={styles.resumeContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.previewBox}>
            <div className={styles.placeholderIframe}>
              <div className={styles.iframeText}>
                <h3>Interactive Resume Preview</h3>
                <p>The PDF preview will be available here when the resume is uploaded to /public/resume.pdf</p>
              </div>
            </div>
          </div>
          
          <div className={styles.downloadBox}>
            <a href="/resume.pdf" download className={styles.downloadBtn}>
              <FaDownload /> Download PDF
            </a>
            <p className={styles.note}>Last Updated: March 2026</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
