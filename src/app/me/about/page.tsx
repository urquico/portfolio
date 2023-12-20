
import React from 'react';

import AboutSection from './about-section';
import NameDisplay from './name-display';
import SkillFocus from './skill-focus';
import Testimonials from './testimonials';

// import Maintenance from '@/components/maintenance';
// import { aboutMaintenance } from '@/lib/constants/maintenance-message';

function page() {
  return (
    <main className='flex flex-col items-center'>
      {/* <Maintenance
        emoji={aboutMaintenance.emoji}
        title={aboutMaintenance.title}
        subtitle={aboutMaintenance.subtitle}
        description={aboutMaintenance.description}
      /> */}

      {/* Name */}
      <NameDisplay />

      {/* About Me */}
      <AboutSection />

      {/* Skills & Focus */}
      <SkillFocus />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
}

export default page;
