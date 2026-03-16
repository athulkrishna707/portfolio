import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className={styles.cardContainer} onClick={handleFlip}>
      <motion.div 
        className={styles.cardInner}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className={styles.cardFront}>
          <div className={styles.imageWrapper}>
            <img src={project.imageUrl} alt={project.title} />
            <div className={styles.techBadges}>
              {project.techStack.map(tech => (
                <span key={tech} className={styles.badge}>{tech}</span>
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.footer}>
              <span className={styles.flipLabel}>Click to see details</span>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className={styles.cardBack}>
          <h3 className={styles.backTitle}>{project.title}</h3>
          
          <div className={styles.detailsSection}>
            <h4 className={styles.sectionHeading}>Business Problem</h4>
            <p className={styles.detailsText}>{project.businessProblem}</p>
          </div>

          <div className={styles.detailsSection}>
            <h4 className={styles.sectionHeading}>Key Results</h4>
            <ul className={styles.resultsList}>
              {project.keyResults.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
          </div>

          <div className={styles.links}>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} onClick={e => e.stopPropagation()}>
              <FaGithub /> GitHub
            </a>
            {project.liveDemoUrl && (
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} onClick={e => e.stopPropagation()}>
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
          
          <button className={styles.backBtn}>Back</button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
