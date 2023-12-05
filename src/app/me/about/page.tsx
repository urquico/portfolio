import Maintenance from '@/components/maintenance';
import { aboutMaintenance } from '@/lib/constants/maintenance-message';
import React from 'react';

function page() {
  return (
    <main>
      <Maintenance
        emoji={aboutMaintenance.emoji}
        title={aboutMaintenance.title}
        subtitle={aboutMaintenance.subtitle}
        description={aboutMaintenance.description}
      />
    </main>
  );
}

export default page;
