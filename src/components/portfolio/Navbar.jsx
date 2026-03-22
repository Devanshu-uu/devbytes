import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const scrollLinks = ['Home', 'About', 'Skills', 'Certificates', 'Projects', 'YouTube', 'Socials', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleScrollLink = (name) => {
    setOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    } else {
      document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 shadow-[0_4px_30px_rgba(0,0,0,0.6)] h-14'
            : 'bg-black/70 backdrop-blur-md h-[70px]'
        } border-b border-white/5`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <button onClick={() => handleScrollLink('home')} className="font-black text-xl tracking-widest">
            <span style={{ WebkitTextStroke: '1px #ef4444', color: 'transparent' }}>DEV</span>
            <span className="text-white">BYTES</span>
          </button>

          <ul className="hidden md:flex items-center gap-6">
            {scrollLinks.map((l) => (
              <li key={l}>
                <button
                  onClick={() => handleScrollLink(l)}
                  className="text-sm text-gray-300 hover:text-red-400 transition-colors font-medium"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={18} className="text-white" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={18} className="text-white" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 h-full w-72 flex flex-col"
              style={{
                background: 'linear-gradient(135deg, rgba(20,20,20,0.85) 0%, rgba(10,10,10,0.9) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '-20px 0 60px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex justify-center pt-5 pb-2">
                <div className="w-10 h-1 rounded-full bg-white/20" />
              </div>

              <div className="px-6 py-4 border-b border-white/5">
                <span className="font-black text-lg tracking-widest">
                  <span style={{ WebkitTextStroke: '1px #ef4444', color: 'transparent' }}>DEV</span>
                  <span className="text-white">BYTES</span>
                </span>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <div className="space-y-1">
                  {scrollLinks.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      <button
                        onClick={() => handleScrollLink(item)}
                        className="w-full text-left px-4 py-3 rounded-xl text-gray-200 hover:text-white hover:bg-white/8 active:bg-white/12 transition-all text-base font-medium flex items-center justify-between group"
                      >
                        {item}
                        <span className="text-gray-600 group-hover:text-red-400 transition-colors text-xs">→</span>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </nav>

              <div className="h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none absolute bottom-0 left-0 right-0" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}