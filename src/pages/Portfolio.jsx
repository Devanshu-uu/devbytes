import React from 'react';
import Navbar from '../components/portfolio/Navbar';

import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import EducationSection from '../components/portfolio/EducationSection';
import CertificatesSection from '../components/portfolio/CertificatesSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import YouTubeSection from '../components/portfolio/YouTubeSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <CertificatesSection />
      <ProjectsSection />
      <YouTubeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
