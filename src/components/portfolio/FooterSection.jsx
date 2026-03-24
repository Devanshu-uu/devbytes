import React from 'react';

export default function FooterSection() {
  const year = new Date().getFullYear();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="py-10 px-6 border-t border-white/5 bg-[#07070a]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-black text-lg tracking-widest">
            <span style={{ WebkitTextStroke: '1px #ef4444', color: 'transparent' }}>DEV</span>
            <span className="text-white">BYTES</span>
          </span>
          <p className="text-gray-600 text-xs mt-1">© {year} Devanshu. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          {['home', 'about', 'projects', 'socials'].map(id => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-xs text-gray-600 hover:text-red-400 transition-colors capitalize font-medium"
            >
              {id}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}