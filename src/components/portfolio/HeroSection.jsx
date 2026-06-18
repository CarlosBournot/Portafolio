import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0A1628' }}>
      {/* Aurora background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.5) 60%, rgba(10,22,40,0.95) 100%)' }} />
      </div>

      {/* Starfield dots */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.6 + 0.2,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + 's',
            }}
          />
        ))}
      </div>

      {/* Hero card */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden p-8 md:p-12 max-w-4xl"
          style={{
            background: 'rgba(10, 22, 40, 0.55)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 212, 255, 0.25)',
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.08), inset 0 0 60px rgba(0,0,0,0.2)',
          }}
        >
          {/* Rotating diamond decoration (right side) */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rotate-45 border border-aurora-cyan/30 rounded-sm" />
              <div className="absolute inset-4 rotate-45 border border-aurora-cyan/15 rounded-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-aurora-cyan/60 text-4xl font-bold">{'{ }'}</span>
              </div>
            </div>
          </div>

          {/* Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-xs text-aurora-green/70 mb-5 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-aurora-green/50" />
            <span>v2.0.0 // fullstack.developer</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-display font-bold leading-none mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
          >
            <span className="text-white">Carlos<br /></span>
            <span style={{ color: '#00FF87' }}>Bournot<span style={{ color: '#FF6B9D' }}>.</span></span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/70 text-base md:text-lg leading-relaxed max-w-md mb-8"
          >
            Fullstack Developer apasionado por el desarrollo de software. 
            Fusiono diseño y tecnología en la creación de experiencias digitales cautivadoras.
          </motion.p>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-3 mb-8"
          >
            {[
              { icon: Github, href: 'https://github.com/CarlosBournot' },
              { icon: Linkedin, href: 'https://linkedin.com/in/carlos-bournot' },
              { icon: Instagram, href: 'https://www.instagram.com/charlybournot/' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#00FF87'; e.currentTarget.style.background = 'rgba(0,255,135,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              >
                <Icon size={18} className="text-white/80" />
              </a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded font-heading font-semibold text-sm uppercase tracking-widest transition-all duration-300"
            style={{ border: '1px solid #FF6B9D', color: '#FF6B9D' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FF6B9D'; e.currentTarget.style.color = '#0A1628'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#FF6B9D'; }}
          >
            Ver Proyectos <ArrowDown size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}