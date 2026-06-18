import React from 'react';
import { motion } from 'framer-motion';

const COLUMNS = [
  {
    title: 'FRONTEND',
    color: '#FF6B9D',
    items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Angular', 'Vite'],
  },
  {
    title: 'BACKEND',
    color: '#00FF87',
    items: ['Node.js', 'Express.js', 'SQL', 'NoSQL', 'APIs', 'REST', 'JWT'],
  },
  {
    title: 'HERRAMIENTAS',
    color: '#00D4FF',
    items: ['Git', 'GitHub', 'Figma'],
  },
];

export default function StackSection() {
  return (
    <section id="stack" className="relative py-32 overflow-hidden" style={{ backgroundColor: '#0A1628' }}>
      {/* Subtle background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/10 font-mono text-xs select-none"
            style={{
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              content: '×',
            }}
          >
            {['×', '+', '·'][i % 3]}
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-white uppercase tracking-widest text-3xl md:text-4xl">
            Stack de Habilidades
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-1 h-1 rounded-full bg-white/30" />
            <p className="font-mono text-xs text-white/30 uppercase tracking-[0.25em]">Mi Especialidad</p>
            <div className="w-1 h-1 rounded-full bg-white/30" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {COLUMNS.map((col, colIdx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: colIdx * 0.12 }}
              className="rounded-xl p-6"
              style={{
                background: 'rgba(13, 27, 46, 0.7)',
                border: `1px solid ${col.color}40`,
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Column header */}
              <div className="flex items-center gap-2 mb-5 pb-4" style={{ borderBottom: `1px solid ${col.color}20` }}>
                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: col.color }} />
                <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest">
                  {col.title}
                </h3>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {col.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: colIdx * 0.1 + i * 0.05 }}
                    className="font-body text-white/80 text-sm hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}