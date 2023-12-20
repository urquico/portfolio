import Carousel from '@/app/me/about/Carousel';
import { Text } from '@mantine/core';
import { IconArrowWaveRightDown } from '@tabler/icons-react';
import React from 'react';

function Testimonials() {
  return (
    <div className='w-[36rem] px-12 py-4 max-md:w-full flex flex-col gap-4 mt-4'>
      <Text className='text-3xl text-white font-bold'>
        🌟 Testimonials
        <IconArrowWaveRightDown size={20} className='inline-block ml-2' />
      </Text>
      <Carousel />
    </div>
  );
}

export default Testimonials;
