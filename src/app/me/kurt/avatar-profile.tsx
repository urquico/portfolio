'use client';

import { Image, Text, Tooltip } from '@mantine/core';
import { TypeAnimation } from 'react-type-animation';

function AvatarProfile() {
  return (
    <div className='flex justify-center max-md:flex-col max-md:place-items-center'>
      {/* DP */}
      <Tooltip
        label={
          <TypeAnimation
            sequence={[
              "$ Hi there! I'm Kurt,",
              1000,
              '$ a passionate Web Developer',
              1000,
              '$ currently pursuing a degree in Computer Science',
              1000,
              "$ and I love solving Rubik's Cubes in my free time",
              1000,
              '$ I also enjoy creating music as a hobby',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        }
        withArrow
        arrowSize={8}
        transitionProps={{ transition: 'slide-up', duration: 300 }}
        closeDelay={500}
      >
        <Image
          alt='me'
          className='rounded-full border-8 border-solid border-zinc-950 -mt-20 z-50'
          h={170}
          w={170}
          src='/kurt-dp.jpeg'
        />
      </Tooltip>

      {/* Name Info */}
      <div className='ml-4 mt-4 max-md:text-center'>
        <Text className='text-zinc-300 font-bold text-4xl'>
          Kurt Jacob Urquico
        </Text>
        <Text className='text-zinc-500'>Web Developer</Text>
      </div>
    </div>
  );
}

export default AvatarProfile;
