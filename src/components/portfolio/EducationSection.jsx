import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const education = [
  { title: 'Data Analytics ', institution: 'Coderhouse', year: 'En Curso', },
  { title: 'React JS Developer', institution: 'Educación IT', year: '2024', link: 'https://www.educacionit.com/perfil/Carlos-Bournot-906225/certificado/71417' },
  { title: 'Tecnico en Desarrollo de Software', institution: 'IESN7', year: '2021 - 2024', link: 'https://refe.educacion.gob.ar/v/402224qFJ_ENZLuc4Kq2AF' },
  
];

const ACCENT_COLORS = ['#00FF87', '#FF6B9D', '#00D4FF', '#BF5FFF'];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-32" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-aurora-purple/50 uppercase tracking-widest">05</span>
            <span className="h-px flex-1 bg-aurora-purple/10" />
          </div>
          <h2 className="font-display font-bold text-white tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.03em' }}>
            Educación<span style={{ color: '#BF5FFF' }}>.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center justify-between gap-4 p-5 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(13, 27, 46, 0.6)',
                border: `1px solid ${ACCENT_COLORS[i]}20`,
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT_COLORS[i] + '50'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ACCENT_COLORS[i] + '20'; }}
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT_COLORS[i] }} />
                <div>
                  <h3 className="font-heading font-semibold text-white text-base group-hover:text-aurora-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-white/40 mt-0.5">{item.institution}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="font-mono text-xs text-white/30">{item.year}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded flex items-center justify-center transition-all duration-300"
                  style={{ border: `1px solid ${ACCENT_COLORS[i]}30`, color: ACCENT_COLORS[i] }}
                >
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}