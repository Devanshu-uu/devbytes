import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a0a]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-5xl font-black text-white mb-6">Contact</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          I'm currently looking to join a cross-functional team that values improving people's
          lives through accessible design, or have a project in mind? Let's connect.
        </p>
        <a
          href="mailto:devanshu@gmail.com"
          className="text-white font-semibold text-sm underline underline-offset-4 hover:text-red-400 transition-colors"
        >
          devanshumohriya@gmail.com
        </a>

        <div className="flex items-center justify-center gap-5 mt-8">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}