import AvatarProfile from '@/components/avatar-profile';
import Banner from '@/components/banner';
import ButtonLinks from '@/components/button-links';
import React from 'react';

function Home() {
  return (
    <main className='flex flex-col place-items-center'>
      {/* Banner */}
      <Banner />

      {/* Avatar */}
      <AvatarProfile />

      {/* Socials */}
      <ButtonLinks />
    </main>
  );
}

export default Home;
