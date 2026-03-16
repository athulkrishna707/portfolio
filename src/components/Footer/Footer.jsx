import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Athul Krishna. All Rights Reserved.</p>
          <p className={styles.credit}>Built with React, Vite & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
