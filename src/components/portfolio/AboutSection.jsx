import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Youtube, Brain } from 'lucide-react';

const MEE_IMG = 'const HERO_IMG = 'https://media.base44.com/images/public/69bdc87402b020b7249e66f1/c7bc466e1_hero.png';';
const MEE1_IMG = 'https://media.base44.com/images/public/69bdc87402b020b7249e66f1/c7bc466e1_hero.png';

const cards = [
{ icon: Code2, label: 'Web Development', desc: 'Building modern responsive UIs with HTML, CSS & JavaScript' },
{ icon: Database, label: 'Data Science', desc: 'Analyzing real-world datasets using Python ecosystem' },
{ icon: Brain, label: 'AI & ML', desc: 'Exploring machine learning models and AI technologies' },
{ icon: Youtube, label: 'Content Creator', desc: 'Sharing knowledge and projects on YouTube' }];


export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14">
          
          <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Who Am I</p>
          <h2 className="text-4xl font-black">About <span className="text-red-500">Me</span></h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-14">
          {/* Photos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 flex-shrink-0">
            
            <img src={MEE_IMG} alt="Devanshu" className="opacity-100 rounded-2xl w-36 h-44 object-cover border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]" />
            <img src={MEE1_IMG} alt="Devanshu" className="mt-6 opacity-100 rounded-2xl w-36 h-44 object-cover border border-white/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm <span className="text-white font-semibold">Devanshu</span>, currently pursuing BSc Life Science at Delhi University.
              Alongside my studies, I'm deeply passionate about Web Development, Data Science, and Artificial Intelligence.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I build projects using Python and the modern web stack, exploring data-driven technologies while sharing my journey on YouTube.
              I love turning ideas into reality through code and creating content that helps others learn.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) =>
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-red-500/30 hover:-translate-y-1 transition-all duration-300 group">
            
              <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <c.icon size={20} className="text-red-400" />
              </div>
              <h3 className="font-bold text-white mb-2 text-sm">{c.label}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}