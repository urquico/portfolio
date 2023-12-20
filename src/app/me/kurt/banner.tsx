import { BackgroundImage, Overlay, Text } from '@mantine/core';
import React from 'react';

import React from 'react';

function Banner() {
  return (
    <BackgroundImage
      className='h-[70vh] max-md:h-[25vh] w-screen rounded-[3rem] bg-top max-md:bg-[center_bottom_9rem] blur-3xl bg-fixed flex justify-end'
      src='/kid-a.png'
    >
      <Overlay
        gradient='linear-gradient(145deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%)'
        opacity={0.85}
        className='h-[70vh] max-md:h-[25vh] w-screen rounded-[3rem] blur-3xl bg-fixed z-30'
      />
      <Text
        component='a'
        href='https://www.reddit.com/r/radiohead/comments/14cnhhz/animated_kid_a_wallpaper_in_4k_zoomed_out_with_ai/'
        target='_blank'
        fz='sm'
        className='place-self-end mr-10 mb-4 z-40 text-neutral-400 hover:underline hover:text-neutral-200 max-md:hidden'
      >
        Kid A Album by Radiohead expanded by AI
      </Text>
    </BackgroundImage>
  );
}

export default Banner;
