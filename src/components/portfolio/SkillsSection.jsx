import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90, color: 'from-yellow-500 to-orange-500' },
  { name: 'C Programming', level: 85, color: 'from-blue-500 to-cyan-400' },
  { name: 'Web Development', level: 75, color: 'from-red-500 to-pink-500' },
  { name: 'Data Science', level: 70, color: 'from-green-500 to-emerald-400' },
  { name: 'Machine Learning', level: 60, color: 'from-purple-500 to-violet-400' },
];

const techStack = ['Python', 'HTML', 'CSS', 'JavaScript', 'Pandas', 'NumPy', 'Matplotlib', 'Git', 'VS Code', 'Jupyter'];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#07070a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">What I Know</p>
          <h2 className="text-4xl font-black">Technical <span className="text-red-500">Skills</span></h2>
        </motion.div>

        <div className="space-y-6 mb-14">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-200">{s.name}</span>
                <span className="text-xs text-red-400 font-bold">{s.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-500 text-xs font-bold tracking-widest uppercase mb-5">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((t) => (
              <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:border-red-500/40 hover:text-red-300 transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}