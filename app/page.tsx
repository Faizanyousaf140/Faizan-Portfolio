import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Certifications from '../components/Certifications';

export default function Page() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
