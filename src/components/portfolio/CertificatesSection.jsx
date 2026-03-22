import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';

const certs = [
  { src: 'https://media.base44.com/images/public/69bdc87402b020b7249e66f1/e3658b534_1111.jpg', title: 'GeoGebra Training - IIT Bombay' },
  { src: 'https://media.base44.com/images/public/69bdc87402b020b7249e66f1/fd390b929_11112.jpg', title: 'Arduino Training - IIT Bombay' },
  { src: 'https://media.base44.com/images/public/69bdc87402b020b7249e66f1/b761f22b4_LUEJAVAAUG1254001_page-0001.jpg', title: 'Java Bootcamp - LetsUpgrade' },
  { src: 'https://media.base44.com/images/public/69bdc87402b020b7249e66f1/300216592_python_page-0001.jpg', title: 'Python Bootcamp - LetsUpgrade' },
];

const allCerts = [...certs, ...certs, ...certs];

export default function CertificatesSection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="certificates" className="py-24 bg-[#0a0a0a] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14 px-6"
      >
        <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Achievements</p>
        <h2 className="text-4xl font-black">My <span className="text-red-500">Certificates</span></h2>
      </motion.div>

      <div className="relative">
        <div className="flex gap-6 w-max" style={{ animation: 'scrollLeft 25s linear infinite' }}>
          {allCerts.map((c, i) => (
            <div
              key={i}
              onClick={() => setLightbox(c.src)}
              className="w-[360px] flex-shrink-0 rounded-2xl overflow-hidden border border-white/5 cursor-pointer hover:border-red-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] bg-[#111]"
            >
              <img src={c.src} alt={c.title} className="w-full h-52 object-cover" />
              <div className="p-3 flex items-center gap-2">
                <Award size={14} className="text-red-400 flex-shrink-0" />
                <span className="text-xs text-gray-400">{c.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10" />
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-black/97 z-[9999] flex items-center justify-center p-6"
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-8 text-white hover:text-red-400 transition-colors z-10">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox}
              className="max-w-[90vw] max-h-[85vh] rounded-xl border-2 border-red-500/40 object-contain"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }`}</style>
    </section>
  );
}