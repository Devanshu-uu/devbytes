import React from 'react';
import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Java', level: 60 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'React', level: 75 },
      { name: 'Node.js', level: 65 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 95 },
    ],
  },
  {
    title: 'Data & AI',
    skills: [
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 80 },
      { name: 'Matplotlib', level: 75 },
      { name: 'Scikit-learn', level: 60 },
      { name: 'Power BI', level: 70 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-mono text-sm text-white">{name}</span>
        <span className="font-mono text-[10px] text-gray-500">{level}%</span>
      </div>

      <div className="h-px bg-white/10 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 h-full bg-red-500"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-6 lg:px-12 bg-[#0d0d0f]">
      {/* Vertical accent line */}
      <div className="absolute top-0 left-[8.33%] w-px h-full bg-white/10 hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-gray-500">
            Technical Proficiency
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-6xl text-white mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div key={category.title}>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-mono text-xs tracking-[0.2em] uppercase text-red-400 mb-8 pb-3 border-b border-red-500/20"
              >
                {category.title}
              </motion.h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 0.1 + skillIdx * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
