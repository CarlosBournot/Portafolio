import React from 'react';
import { motion } from 'framer-motion';
import img from '../../images/img.jpeg';

export default function AboutSection({ aboutImage }) {
  return (
    <section id="about" className="relative py-32" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-aurora-pink/50 uppercase tracking-widest">04</span>
            <span className="h-px flex-1 bg-aurora-pink/10" />
          </div>
          <h2 className="font-display font-bold text-white tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.03em' }}>
            Sobre mí<span className="text-aurora-pink">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden"
          >
            <img src={img} alt="About" className="w-full object-cover opacity-70 rounded-xl" style={{ aspectRatio: '4/3' }} />
            <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.9) 0%, transparent 60%)', border: '1px solid rgba(0,212,255,0.15)' }} />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-mono text-xs space-y-1" style={{ color: 'rgba(0,212,255,0.5)' }}>
                <p>location: Rosario, Argentina</p>
                <p>status: <span className="text-aurora-green">available_for_hire</span></p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-white/80 text-lg leading-relaxed mb-5">
             Durante mi proceso de aprendizaje, he desarrollado habilidades de trabajo en equipo, comunicación, liderazgo y resolución de problemas.
            </p>
            <p className="text-white/55 text-base leading-relaxed mb-10">
              Me apasiona la tecnología y la posibilidad de crear soluciones que aporten valor real a las personas y a las organizaciones
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8" style={{ borderTop: '1px solid rgba(0,212,255,0.1)' }}>
              {[
                { label: 'Proyectos', value: '3+' },
                { label: 'Tecnologías', value: '12+' },
                { label: 'Año inicio', value: '2024' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-3xl text-aurora-green">{s.value}</p>
                  <p className="font-mono text-xs text-white/30 mt-1 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}