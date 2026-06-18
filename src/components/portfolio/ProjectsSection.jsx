import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="relative py-32" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-aurora-cyan/50 uppercase tracking-widest">02</span>
            <span className="h-px flex-1 bg-aurora-cyan/10" />
          </div>
          <h2 className="font-display font-bold text-white tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.03em' }}>
            Proyectos<span className="text-aurora-green">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}