import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const [hovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative rounded-xl overflow-hidden"
      style={{
        background: 'rgba(13, 27, 46, 0.7)',
        border: '1px solid rgba(0, 212, 255, 0.15)',
        backdropFilter: 'blur(8px)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'scale-110 opacity-20 grayscale' : 'scale-100 opacity-75'
          }`}
        />
        {/* X-ray overlay */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <p className="font-mono text-aurora-green text-xs mb-3 font-semibold">// stack_trace</p>
          {project.stackDetails.map((s, i) => (
            <p key={i} className="font-mono text-xs text-white/60">
              <span className="text-aurora-cyan/60">├──</span> {s}
            </p>
          ))}
        </div>

        {/* Gradient bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-card to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs text-aurora-cyan/50 mb-1">{project.id} // {project.tech}</p>
            <h3 className="font-heading font-bold text-white text-lg group-hover:text-aurora-green transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-white/50 text-sm mt-1 leading-relaxed">{project.description}</p>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-all duration-300 hover:bg-aurora-green/10"
              style={{ border: '1px solid rgba(0,255,135,0.25)', color: '#00FF87' }}
            >
              <Github size={13} /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-all duration-300 hover:bg-aurora-cyan/10"
              style={{ border: '1px solid rgba(0,212,255,0.25)', color: '#00D4FF' }}
            >
              <ArrowUpRight size={13} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}