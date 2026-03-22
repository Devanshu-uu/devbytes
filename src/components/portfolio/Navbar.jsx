import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';

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

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 shadow-[0_4px_30px_rgba(0,0,0,0.6)] h-14' : 'bg-black/70 backdrop-blur-md h-[70px]'} border-b border-white/5`}>
        
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => handleScrollLink('home')} className="font-black text-xl tracking-widest">
            <span style={{ WebkitTextStroke: '1px #ef4444', color: 'transparent' }}>DEV</span>
            <span className="text-white">BYTES</span>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-6">
            {scrollLinks.map(l => (
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

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
          >
            {open ? <X size={18} className="text-white" /> : <Menu size={18} className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
            />

            <div className="absolute right-0 top-0 h-full w-64 bg-black p-6 space-y-4">
              
              {scrollLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollLink(item)}
                  className="block text-gray-300 hover:text-red-400"
                >
                  {item}
                </button>
              ))}

              

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}