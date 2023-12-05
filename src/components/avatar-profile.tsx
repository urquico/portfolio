import { Image, Text } from '@mantine/core';
import React from 'react';

function AvatarProfile() {
  return (
    <div className='flex justify-center max-md:flex-col max-md:place-items-center'>
      {/* DP */}
      <Image
        alt='me'
        className='rounded-full border-8 border-solid border-zinc-950 -mt-20 z-50'
        h={170}
        w={170}
        src='/kurt-dp.jpeg'
      />

      {/* Name Info */}
      <div className='ml-4 mt-4 max-md:text-center'>
        <Text className='text-zinc-300 font-bold text-4xl'>
          Kurt Jacob E. Urquico
        </Text>
        <Text className='text-zinc-500'>Web Developer</Text>
      </div>
    </div>
  );
}

export default AvatarProfile;
