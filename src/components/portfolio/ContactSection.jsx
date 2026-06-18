import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const LINKS = [
  { label: 'carlosabournot@gmail.com', href: 'carlosabournot@gmail.com', icon: Mail, color: '#FF6B9D' },
  { label: 'github.com/CarlosBournot', href: 'https://github.com/CarlosBournot', icon: Github, color: '#00FF87' },
  { label: 'linkedin.com/in/carlosbournot', href: 'https://linkedin.com/in/carlosbournot', icon: Linkedin, color: '#00D4FF' },
];

export default function ContactSection() {
  const [showResults, setShowResults] = useState(false);
  const [cmdText, setCmdText] = useState('');
  const fullCmd = 'locate_contact --all';

  useEffect(() => {
    let i = 0;
    const t1 = setTimeout(() => {
      const iv = setInterval(() => {
        if (i < fullCmd.length) { setCmdText(fullCmd.substring(0, ++i)); }
        else { clearInterval(iv); setTimeout(() => setShowResults(true), 400); }
      }, 50);
      return () => clearInterval(iv);
    }, 600);
    return () => clearTimeout(t1);
  }, []);

  return (
    <section id="contact" className="relative py-32" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12 bg-aurora-green/20" />
            <span className="font-mono text-xs text-aurora-green/50 uppercase tracking-widest">06</span>
            <span className="h-px w-12 bg-aurora-green/20" />
          </div>
          <h2 className="font-display font-bold text-white tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.03em' }}>
            Contacto<span className="text-aurora-green">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(0,255,135,0.15)', background: 'rgba(13,27,46,0.8)', backdropFilter: 'blur(12px)' }}
        >
          {/* Terminal bar */}
          <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}>
            <div className="w-3 h-3 rounded-full bg-red-400/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
            <div className="w-3 h-3 rounded-full bg-aurora-green/60" />
            <span className="ml-3 font-mono text-xs text-white/25">terminal — carlos@bournot</span>
          </div>

          <div className="p-6 min-h-48">
            <div className="font-mono text-sm">
              <span className="text-aurora-green">carlos@bournot</span>
              <span className="text-white/30">:</span>
              <span className="text-white/50">~$</span>{' '}
              <span className="text-white">{cmdText}</span>
              {!showResults && <span className="terminal-cursor text-aurora-green">▊</span>}
            </div>

            {showResults && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 space-y-1">
                <p className="font-mono text-xs text-aurora-green/40 mb-4">// 3 resultados encontrados:</p>
                {LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12 }}
                    className="group flex items-center gap-4 py-3 px-3 rounded transition-all duration-300"
                    style={{ border: '1px solid transparent' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = link.color + '30'; e.currentTarget.style.background = link.color + '08'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    <link.icon size={15} style={{ color: link.color }} />
                    <span className="font-mono text-sm text-white/60 group-hover:text-white transition-colors">{link.label}</span>
                    <ArrowRight size={13} className="ml-auto opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" style={{ color: link.color }} />
                  </motion.a>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}