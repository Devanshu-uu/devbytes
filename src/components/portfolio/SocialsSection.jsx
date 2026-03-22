import React from 'react';
import { motion } from 'framer-motion';

const socials = [
  { name: 'Instagram', icon: '📸', color: 'hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]', href: '#', sub: '@devanshu' },
  { name: 'GitHub', icon: '💻', color: 'hover:border-gray-400/50 hover:shadow-[0_0_20px_rgba(156,163,175,0.15)]', href: '#', sub: 'Projects & Code' },
  { name: 'LinkedIn', icon: '💼', color: 'hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]', href: '#', sub: 'Professional' },
  { name: 'Discord', icon: '🎮', color: 'hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]', href: '#', sub: 'Join Server' },
  { name: 'Twitter (X)', icon: '🐦', color: 'hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]', href: '#', sub: '@devanshu' },
  { name: 'Snapchat', icon: '👻', color: 'hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)]', href: '#', sub: 'Snap me' },
  { name: 'Telegram', icon: '✈️', color: 'hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]', href: '#', sub: 'Message me' },
  { name: 'YouTube', icon: '▶️', color: 'hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]', href: `https://youtube.com/channel/UC24ZXuLKFu0ZMXOsSNL_qTQ`, sub: 'DEVBYTES' },
  { name: 'Reddit', icon: '🤖', color: 'hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]', href: '#', sub: 'u/devanshu' },
  { name: 'Facebook', icon: '📘', color: 'hover:border-blue-600/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]', href: '#', sub: 'Follow me' },
];

export default function SocialsSection() {
  return (
    <section id="socials" className="py-24 px-6 bg-[#07070a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Find Me Online</p>
          <h2 className="text-4xl font-black">Connect <span className="text-red-500">With Me</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`bg-[#111] border border-white/5 ${s.color} rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
            >
              <span className="text-3xl mb-3">{s.icon}</span>
              <h3 className="text-white font-semibold text-sm mb-1">{s.name}</h3>
              <p className="text-gray-600 text-xs">{s.sub}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}