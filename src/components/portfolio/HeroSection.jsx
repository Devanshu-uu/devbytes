import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Download, ChevronDown } from 'lucide-react';

const ROLES = ['Data Analyst', 'Web Developer', 'AI Enthusiast', 'Content Creator'];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSocials = () => {
    document.getElementById('socials')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 pb-10"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d0d] to-[#1a0000] z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] z-0" />

      {/* Blueprint-style grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-[8.33%] w-px h-full bg-white/10 z-0" />
      <div className="absolute top-0 left-[91.67%] w-px h-full bg-white/10 z-0" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 z-0" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Profile image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-2 border-red-500/30 shadow-[0_0_60px_rgba(239,68,68,0.2)]">
            <img
              src="https://media.base44.com/images/public/69bdc87402b020b7249e66f1/fda48d160_hero.png"
              alt="Devanshu"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Pre-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-red-400 mb-6"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl md:text-8xl lg:text-[10rem] tracking-[0.15em] text-white leading-none mb-6"
        >
          DEVANSHU
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8 h-8"
        >
          <span className="font-mono text-lg md:text-xl text-red-400 font-medium">
            {displayText}
          </span>
          <span className="font-mono text-lg md:text-xl text-red-400 animate-pulse">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-10"
        >
          BSc Life Science @ Delhi University. Passionate about Web Development, Data Science & AI.
          Building cool things and sharing the journey on YouTube.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={scrollToSocials}
            className="group flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-mono text-xs tracking-wider uppercase hover:bg-red-500 transition-all duration-300 rounded-lg"
          >
            <Users size={14} />
            My Socials
          </button>

          <button
            onClick={scrollToContact}
            className="group flex items-center gap-2 px-6 py-3 border border-white/15 text-white font-mono text-xs tracking-wider uppercase hover:bg-white/5 transition-all duration-300 rounded-lg"
          >
            <Mail size={14} />
            Connect
          </button>

          <a
            href="/resume.pdf"
            className="group flex items-center gap-2 px-6 py-3 border border-white/15 text-white font-mono text-xs tracking-wider uppercase hover:bg-white/5 transition-all duration-300 rounded-lg"
          >
            <Download size={14} />
            Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={20} className="text-gray-500 hover:text-red-400 transition-colors" />
        </motion.div>
      </motion.button>

      {/* Corner text */}
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/25 hidden md:block z-10">
        <span>X: 0.00</span> <span className="ml-2">Y: 0.00</span>
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[10px] text-white/25 hidden md:block z-10">
        SEC: 01/08
      </div>
    </section>
  );
}
