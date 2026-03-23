import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    label: 'Featured Project',
    title: 'Frontend & Web Development',
    desc: 'Modern, responsive web apps built with React, Tailwind and JavaScript. Clean animations, great UX and production-ready code.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    flip: false,
  },
  {
    label: 'Featured Project',
    title: 'Data Science & Analysis',
    desc: 'Real-world dataset analysis and visualization using the Python ecosystem — Pandas, NumPy, Seaborn — to extract meaningful insights.',
    tags: ['Python', 'Pandas', 'NumPy', 'Seaborn'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    flip: true,
  },
  {
    label: 'Featured Project',
    title: 'AI & Automation Projects',
    desc: 'Building intelligent tools and automations powered by AI APIs, machine learning models and smart workflows.',
    tags: ['Python', 'AI', 'Automation'],
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    flip: false,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#07070a]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-6"
      >
        <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">What I Build</p>
        <h2 className="text-4xl font-black text-white">My <span className="text-red-500">Projects</span></h2>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 space-y-24">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`flex flex-col ${p.flip ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="rounded-2xl overflow-hidden border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <img src={p.img} alt={p.title} className="w-full h-56 md:h-72 object-cover" />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-3">{p.label}</p>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">{p.title}</h3>
              <div className="bg-[#111] border border-white/5 rounded-xl p-5 mb-5">
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[11px] px-3 py-1 bg-white/5 rounded-full text-gray-400 font-medium border border-white/5">{tag}</span>
                ))}
              </div>
              <Link to="/projects" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-red-400 transition-colors text-sm">
                <Globe size={14} /> View all projects
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}