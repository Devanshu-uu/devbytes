import React from 'react';
import { motion } from 'framer-motion';
import { SocialLinks } from '@/components/ui/social-links';

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/Devanshu-uu',
    iconUrl: 'https://cdn.simpleicons.org/github/888888',
    hoverIconUrl: 'https://cdn.simpleicons.org/github/ffffff',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/channel/UC24ZXuLKFu0ZMXOsSNL_qTQ',
    iconUrl: 'https://cdn.simpleicons.org/youtube/FF0000',
    hoverIconUrl: 'https://cdn.simpleicons.org/youtube/ffffff',
  },
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
        <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
          Get In Touch
        </p>

        <h2 className="text-5xl font-black text-white mb-6">
          Contact
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          I’m open to web development, frontend, and creative tech opportunities.
          Want to collaborate or talk about a project? Let’s connect.
        </p>

        <a
          href="mailto:devanshumohriya@gmail.com"
          className="text-white font-semibold text-sm underline underline-offset-4 hover:text-red-400 transition-colors"
        >
          devanshumohriya@gmail.com
        </a>

        <div className="mt-10">
          <SocialLinks socials={socials} />
        </div>
      </motion.div>
    </section>
  );
}