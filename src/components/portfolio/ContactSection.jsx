import React from 'react';
import { motion } from 'framer-motion';
import { SocialLinks } from '@/components/ui/social-links';

const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    iconUrl: 'https://cdn.simpleicons.org/instagram/E1306C',
    hoverIconUrl: 'https://cdn.simpleicons.org/instagram/ffffff',
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    iconUrl: 'https://cdn.simpleicons.org/github/888888',
    hoverIconUrl: 'https://cdn.simpleicons.org/github/ffffff',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    iconUrl: 'https://cdn.simpleicons.org/linkedin/0A66C2',
    hoverIconUrl: 'https://cdn.simpleicons.org/linkedin/ffffff',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/channel/UC24ZXuLKFu0ZMXOsSNL_qTQ',
    iconUrl: 'https://cdn.simpleicons.org/youtube/FF0000',
    hoverIconUrl: 'https://cdn.simpleicons.org/youtube/ffffff',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    iconUrl: 'https://cdn.simpleicons.org/x/888888',
    hoverIconUrl: 'https://cdn.simpleicons.org/x/ffffff',
  },
  {
    name: 'Telegram',
    href: 'https://t.me',
    iconUrl: 'https://cdn.simpleicons.org/telegram/26A5E4',
    hoverIconUrl: 'https://cdn.simpleicons.org/telegram/ffffff',
  },
  {
    name: 'Discord',
    href: 'https://discord.com',
    iconUrl: 'https://cdn.simpleicons.org/discord/5865F2',
    hoverIconUrl: 'https://cdn.simpleicons.org/discord/ffffff',
  },
  {
    name: 'Snapchat',
    href: 'https://snapchat.com',
    iconUrl: 'https://cdn.simpleicons.org/snapchat/FFFC00',
    hoverIconUrl: 'https://cdn.simpleicons.org/snapchat/ffffff',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    iconUrl: 'https://cdn.simpleicons.org/facebook/1877F2',
    hoverIconUrl: 'https://cdn.simpleicons.org/facebook/ffffff',
  },
  {
    name: 'Reddit',
    href: 'https://reddit.com',
    iconUrl: 'https://cdn.simpleicons.org/reddit/FF4500',
    hoverIconUrl: 'https://cdn.simpleicons.org/reddit/ffffff',
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
          I'm currently looking to join a cross-functional team that values improving people's
          lives through accessible design, or have a project in mind? Let's connect.
        </p>

        <a
          href="mailto:devanshu@gmail.com"
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