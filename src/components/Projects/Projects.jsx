import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  // Extract all unique tech tags for filtering
  const allTech = ['All', ...new Set(projects.flatMap(p => p.techStack))];
  
  // Simplification for filter: just core ones or all? 
  // Let's stick to the PRD: "All", "Python", "SQL", "ML"
  const categories = ['All', 'Python', 'ML', 'Data Analysis'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.techStack.some(tech => tech.includes(filter) || (filter === 'ML' && (tech === 'Scikit-learn' || tech === 'TensorFlow')) || (filter === 'Data Analysis' && tech === 'Pandas')));

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.filters}>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
