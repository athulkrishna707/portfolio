import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div 
          className={styles.skillsHeader}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Skills & Proficiency</h2>
          <p className={styles.subtitle}>My technical toolkit for data science and analysis.</p>
        </motion.div>

        <div className={styles.skillsGrid}>
          <SkillCategory title="Languages" items={skills.languages} />
          <SkillCategory title="Libraries" items={skills.libraries} />
          <SkillCategory title="Tools" items={skills.tools} />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, items }) => {
  return (
    <motion.div 
      className={styles.category}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.tagCloud}>
        {items.map((skill) => (
          <motion.div 
            key={skill.name} 
            className={styles.skillTag}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className={styles.skillName}>{skill.name}</span>
            {skill.level && <span className={styles.skillLevel}>{skill.level}</span>}
            {skill.proficiency && <span className={styles.skillLevel}>{skill.proficiency}</span>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
