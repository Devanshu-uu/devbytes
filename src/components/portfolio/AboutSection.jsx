import React from 'react';
import { motion } from 'framer-motion';

const ABOUT_IMAGE = '/img/about.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-gray-500">
            Who Am I
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-6xl text-white mb-16"
        >
          About Me
        </motion.h2>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={ABOUT_IMAGE}
                alt="Devanshu"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Decorative corners */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-red-500/30" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-white/10" />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-12"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">
              Hi, I&apos;m Devanshu 👋
            </h3>

            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                I&apos;m currently pursuing BSc Life Science at Delhi University. Alongside my studies,
                I&apos;m deeply passionate about Web Development, Data Science, and Artificial Intelligence.
              </p>
              <p>
                I build projects using Python and the modern web stack, exploring data-driven
                technologies while sharing my journey on YouTube. I love turning ideas into reality
                through code and creating content that helps others learn.
              </p>
              <p>
                Whether it&apos;s crafting clean UIs, diving into datasets, or experimenting with ML
                models — I&apos;m always building, always learning.
              </p>
            </div>

            {/* Metadata strip */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Location', value: 'Delhi, IN' },
                  { label: 'Focus', value: 'Data & AI' },
                  { label: 'Status', value: 'Open to Work' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-mono text-[10px] tracking-wider uppercase text-gray-500 mb-1">
                      {item.label}
                    </p>
                    <p className="font-mono text-sm text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
