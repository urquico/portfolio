import Maintenance from '@/components/maintenance';
import { contactMaintenance } from '@/lib/constants/maintenance-message';
import React from 'react';

function page() {
  return (
    <main>
      <Maintenance
        emoji={contactMaintenance.emoji}
        title={contactMaintenance.title}
        subtitle={contactMaintenance.subtitle}
        description={contactMaintenance.description}
      />
    </main>
  );
}

export default page;
