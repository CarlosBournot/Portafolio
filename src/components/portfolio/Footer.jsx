import React from 'react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,255,135,0.08)', backgroundColor: '#0A1628' }} className="py-7">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-white/25">
          © {new Date().getFullYear()} Carlos Bournot. Todos los derechos reservados.
        </p>
        <p className="font-mono text-xs text-white/20">
          // compiled_with: react + tailwind + passion
        </p>
      </div>
    </footer>
  );
}