'use client';

import { Testimonial } from '@/lib/types';
import { Blockquote, Image, Paper, Text } from '@mantine/core';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

/**
 * This file defines the Carousel component used in the 'About' page to display testimonials.
 */

// Carousel is a React component that renders a carousel of testimonials. It doesn't take any props.
function Carousel() {
  const testimonials = [
    {
      name: 'Lambert Dela Cruz',
      role: 'Cloud Engineer',
      quote:
        "I've worked with Kurt in a big project in our university. Kurt is a hardworking (and) passionate individual who drove our product engineering into success. he contributed significantly to both the front-end and back-end components of our project, showcasing his versatility and deep understanding of Full Stack Development.",
      image: '/',
      date: 'February 19, 2024',
    },
  ];

  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      className='w-full h-auto -z-50 my-4'
    >
      {testimonials.map((testimonial: Testimonial, index: number) => {
        return (
          <SwiperSlide key={index}>
            <Paper
              shadow='xs'
              radius='md'
              withBorder
              p='xl'
              className='bg-zinc-950'
            >
              <div className='flex gap-4'>
                <Image
                  alt='me'
                  className='w-10 h-10 rounded-full mt-1'
                  src={testimonial.image}
                />
                <div>
                  <Text className='text-white'>{testimonial.name}</Text>
                  <Text className='text-zinc-500 text-sm'>
                    {testimonial.role}
                  </Text>
                  <Text className='text-zinc-500 text-xs'>
                    @ {testimonial.date}
                  </Text>
                </div>
              </div>
              <Blockquote color='white' iconSize={30} mt='xl'>
                <Text className='text-white'>{testimonial.quote}</Text>
              </Blockquote>
            </Paper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousel;
