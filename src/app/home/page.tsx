import Navigation from '@/components/navigation';
import Stack from '@/components/stack';
import { stackData } from '@/lib/constants/stack-data';
import { BackgroundImage, Image, Overlay, Text } from '@mantine/core';
import React from 'react';

function Home() {
  return (
    <div className='flex flex-col place-items-center'>
      <BackgroundImage
        className='h-[70vh] w-screen rounded-[3rem] bg-top blur-3xl bg-fixed'
        src='/kid-a.png'
      >
        <Overlay
          gradient='linear-gradient(145deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%)'
          opacity={0.85}
          className='h-[70vh] w-screen rounded-[3rem] blur-3xl bg-fixed z-40'
        />
      </BackgroundImage>

      {/* Avatar */}
      <div className='flex justify-center'>
        {/* DP */}
        <Image
          alt='me'
          className='rounded-full border-8 border-solid border-zinc-950 -mt-20 z-50'
          h={170}
          w={170}
          src='/kurt-dp.jpeg'
        />

        {/* Name Info */}
        <div className='ml-4 mt-4'>
          <Text className='text-zinc-300 font-bold text-4xl'>
            Kurt Jacob E. Urquico
          </Text>
          <Text className='text-zinc-500'>Web Developer</Text>
        </div>
      </div>
      {/* Stack */}
      {/* <div className='w-[40vw] grid grid-cols-4 gap-4 mx-20 my-10 justify-items-center'>
        {stackData.map((stack) => {
          return (
            <Stack src={stack.src} label={stack.label} key={stack.label} />
          );
        })}
      </div> */}
    </div>
  );
}

export default Home;
