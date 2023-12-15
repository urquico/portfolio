'use client';

import { Blockquote, Image, Paper, Text } from '@mantine/core';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Carousel() {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      spaceBetween={10}
      slidesPerView={1}
      //   onSlideChange={() => console.log('slide change')}
      //   onSwiper={(swiper) => console.log(swiper)}
      className='w-full h-auto -z-50 my-4'
    >
      <SwiperSlide>
        <Paper
          shadow='xs'
          radius='md'
          withBorder
          p='xl'
          className='bg-zinc-950 mySwiper'
        >
          <div className='flex gap-4'>
            <Image
              alt='me'
              className='w-10 h-10 rounded-full mt-1'
              src='/kurt-dp.jpeg'
            />
            <div>
              <Text className='text-white'>Kurt Jacob E. Urquico</Text>
              <Text className='text-zinc-500 text-sm'>Web Developer</Text>
            </div>
          </div>
          <Blockquote color='white' iconSize={30} mt='xl'>
            <Text className='text-white'>
              Life is like an npm install – you never know what you are going to
              get.
            </Text>
          </Blockquote>
        </Paper>
      </SwiperSlide>

      <SwiperSlide>
        <Paper
          shadow='xs'
          radius='md'
          withBorder
          p='xl'
          className='bg-zinc-950 mySwiper'
        >
          <div className='flex gap-4'>
            <Image
              alt='me'
              className='w-10 h-10 rounded-full mt-1'
              src='/kurt-dp.jpeg'
            />
            <div>
              <Text className='text-white'>Kurt Jacob E. Urquico</Text>
              <Text className='text-zinc-500 text-sm'>Web Developer</Text>
            </div>
          </div>
          <Blockquote color='white' iconSize={30} mt='xl'>
            <Text className='text-white'>
              Life is like an npm install – you never know what you are going to
              get.
            </Text>
          </Blockquote>
        </Paper>
      </SwiperSlide>

      <SwiperSlide>
        <Paper
          shadow='xs'
          radius='md'
          withBorder
          p='xl'
          className='bg-zinc-950 mySwiper'
        >
          <div className='flex gap-4'>
            <Image
              alt='me'
              className='w-10 h-10 rounded-full mt-1'
              src='/kurt-dp.jpeg'
            />
            <div>
              <Text className='text-white'>Kurt Jacob E. Urquico</Text>
              <Text className='text-zinc-500 text-sm'>Web Developer</Text>
            </div>
          </div>
          <Blockquote color='white' iconSize={30} mt='xl'>
            <Text className='text-white'>
              Life is like an npm install – you never know what you are going to
              get.
            </Text>
          </Blockquote>
        </Paper>
      </SwiperSlide>

      <SwiperSlide>
        <Paper
          shadow='xs'
          radius='md'
          withBorder
          p='xl'
          className='bg-zinc-950 mySwiper'
        >
          <div className='flex gap-4'>
            <Image
              alt='me'
              className='w-10 h-10 rounded-full mt-1'
              src='/kurt-dp.jpeg'
            />
            <div>
              <Text className='text-white'>Kurt Jacob E. Urquico</Text>
              <Text className='text-zinc-500 text-sm'>Web Developer</Text>
            </div>
          </div>
          <Blockquote color='white' iconSize={30} mt='xl'>
            <Text className='text-white'>
              Life is like an npm install – you never know what you are going to
              get.
            </Text>
          </Blockquote>
        </Paper>
      </SwiperSlide>

      <SwiperSlide>
        <Paper
          shadow='xs'
          radius='md'
          withBorder
          p='xl'
          className='bg-zinc-950 mySwiper'
        >
          <div className='flex gap-4'>
            <Image
              alt='me'
              className='w-10 h-10 rounded-full mt-1'
              src='/kurt-dp.jpeg'
            />
            <div>
              <Text className='text-white'>Kurt Jacob E. Urquico</Text>
              <Text className='text-zinc-500 text-sm'>Web Developer</Text>
            </div>
          </div>
          <Blockquote color='white' iconSize={30} mt='xl'>
            <Text className='text-white'>
              Life is like an npm install – you never know what you are going to
              get.
            </Text>
          </Blockquote>
        </Paper>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
