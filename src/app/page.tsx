import About from '@/components/About';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import HeroBanner from '@/components/heroSectoin/HeroBanner';
import Projects from '@/components/Projects';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <About></About>
      <Projects />
      <Education></Education>
      <Contact />
    </>
  );
};

export default HomePage;
