import AvatarProfile from '@/components/avatar-profile';
import Maintenance from '@/components/maintenance';
import { aboutMaintenance } from '@/lib/constants/maintenance-message';
import React from 'react';

function page() {
  return (
    <main>
      {/* <Maintenance
        emoji={aboutMaintenance.emoji}
        title={aboutMaintenance.title}
        subtitle={aboutMaintenance.subtitle}
        description={aboutMaintenance.description}
      /> */}

      {/* Avatar */}
      <div className='mt-40'>
        <AvatarProfile />
      </div>
    </main>
  );
}

export default page;
