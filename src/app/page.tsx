import About from '@/components/About';
import HeroBanner from '@/components/heroSectoin/HeroBanner';
import Projects from '@/components/Projects';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <About></About>
      <Projects />
    </>
  );
};

export default HomePage;
