import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BarChart2, PieChart, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    icon: Globe,
    title: 'Frontend Development',
    desc: 'Modern, responsive UI designs using HTML, CSS, and JavaScript with clean animations and great UX.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-blue-500/20 to-cyan-500/5',
    borderColor: 'hover:border-blue-500/40',
  },
  {
    icon: BarChart2,
    title: 'Data Science Projects',
    desc: 'Real-world dataset analysis and visualization using the Python ecosystem — Pandas, NumPy, Seaborn.',
    tags: ['Python', 'Pandas', 'NumPy'],
    color: 'from-green-500/20 to-emerald-500/5',
    borderColor: 'hover:border-green-500/40',
  },
  {
    icon: PieChart,
    title: 'Data Visualization',
    desc: 'Insightful charts and graphs using Matplotlib and Seaborn to reveal patterns in complex datasets.',
    tags: ['Matplotlib', 'Seaborn', 'Jupyter'],
    color: 'from-red-500/20 to-orange-500/5',
    borderColor: 'hover:border-red-500/40',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#07070a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">What I Build</p>
          <h2 className="text-4xl font-black">My <span className="text-red-500">Projects</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-gradient-to-br ${p.color} bg-[#111] border border-white/5 ${p.borderColor} rounded-2xl p-7 group cursor-pointer transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center">
                  <p.icon size={22} className="text-gray-300" />
                </div>
                <ArrowUpRight size={16} className="text-gray-600 group-hover:text-red-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 bg-white/5 rounded-full text-gray-400 font-medium">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}