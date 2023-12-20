'use client';

import { Blockquote, Image, Paper, Text } from '@mantine/core';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Testimonial type represents a testimonial with a name, role, quote, and image.
type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};


// Carousel is a React component that renders a carousel of testimonials. It doesn't take any props.
function Carousel() {
  const testimonials = [
    {
      name: 'Kurt Jacob Urquico',
      role: 'Web Developer',
      quote:
        'Life is like an npm install – you never know what you are going to get.',
      image: '/kurt-dp.jpeg',
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
      //   onSlideChange={() => console.log('slide change')}
      //   onSwiper={(swiper) => console.log(swiper)}
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
