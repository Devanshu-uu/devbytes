import React from 'react';
import Navbar from '../components/portfolio/Navbar';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Education from '../components/portfolio/Education';
import Certificates from '../components/portfolio/Certificates';
import Projects from '../components/portfolio/Projects';
import Socials from '../components/portfolio/Socials';
import Footer from '../components/portfolio/Footer';

export default function Home() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certificates />
      <Projects />
      <Socials />
      <Footer />
    </div>
  );
}
