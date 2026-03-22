import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Users, Mail, ArrowDown } from 'lucide-react';

const HERO_IMG = 'https://media.base44.com/images/public/69bdc87402b020b7249e66f1/c7bc466e1_hero.png';

const roles = ['Data Analyst', 'Web Developer', 'Content Creator', 'AI Enthusiast'];

const titleFull = "HI, I'M DEVANSHU";
const hiPart = "HI, I'M ";

export default function HeroSection() {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [titleDone, setTitleDone] = useState(false);

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (displayedTitle.length < titleFull.length) {
      const t = setTimeout(() => {
        setDisplayedTitle(titleFull.slice(0, displayedTitle.length + 1));
      }, 100);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setTitleDone(true), 500);
      return () => clearTimeout(t);
    }
  }, [displayedTitle]);

  useEffect(() => {
    if (!titleDone) return;

    const current = roles[index];
    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 100);

      if (text === current) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, 50);

      if (text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, titleDone]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const namePart = displayedTitle.slice(hiPart.length);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d0d] to-[#1a0000] z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] z-0" />
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center"
        >
          <p className="text-red-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-2 tracking-tight">
            {displayedTitle.length <= hiPart.length ? (
              <>
                {displayedTitle}
                <span className="inline-block align-middle ml-1">
                  <span
                    className={`inline-block w-[3px] h-[0.95em] bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </span>
              </>
            ) : (
              <>
                <span className="text-white">{hiPart}</span>
                <span className="text-red-500">{namePart}</span>
                {!titleDone && (
                  <span className="inline-block align-middle ml-1">
                    <span
                      className={`inline-block w-[3px] h-[0.95em] bg-white ${
                        showCursor ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </span>
                )}
              </>
            )}
          </h1>

          <div className="h-10 flex items-center justify-center mt-2 mb-6">
            <span className="text-xl sm:text-2xl text-gray-300 font-light flex items-center">
              {text}
              <span className="inline-block align-middle ml-1">
                <span
                  className={`inline-block w-[3px] h-6 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-opacity duration-75 ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </span>
            </span>
          </div>

          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed mb-8 text-sm sm:text-base">
            BSc Life Science @ Delhi University. Passionate about Web Development, Data Science & AI.
            Building cool things and sharing the journey on YouTube.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => scrollTo('socials')}
              className="bg-red-600 hover:bg-red-500 text-white px-7 py-3 rounded-lg font-semibold transition-all hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center gap-2 text-sm"
            >
              <Users size={16} /> My Socials
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="border border-white/20 text-white hover:border-red-500/50 hover:text-red-300 px-7 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 text-sm"
            >
              <Mail size={16} /> Connect
            </button>

            <a
              href="resume.pdf"
              download
              className="border border-red-500/40 text-red-400 hover:bg-red-500/10 px-7 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 text-sm"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl" />
            <img
              src={HERO_IMG}
              alt="Devanshu"
              className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-red-500/30 shadow-[0_0_60px_rgba(239,68,68,0.2)]"
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-red-400 transition-colors animate-bounce"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}