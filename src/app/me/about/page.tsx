import Carousel from '@/components/Carousel';
import { Text } from '@mantine/core';
import {
  IconArrowWaveRightDown,
  IconCornerDownRight,
} from '@tabler/icons-react';
import React from 'react';
import { textVide } from 'text-vide';

// import Maintenance from '@/components/maintenance';
// import { aboutMaintenance } from '@/lib/constants/maintenance-message';

function page() {
  const p1 = `Hi, I&apos;m Kurt, a passionate web developer with a focus on 
          crafting user-friendly digital experiences. My journey began as a computer
          science student, where I developed a fascination with web technologies and
          honed my skills in design principles and automation innovations.`;

  const p2 = `As a student programmer, I&apos;ve created technologies using the
          knowledge acquired over the past few years. I aspire to become a
          Full-Stack Developer for social good, leveraging my skills to create
          innovative solutions.`;

  const bionicP1 = textVide(p1, {
    sep: ['<strong>', '</strong>'],
  });

  const bionicP2 = textVide(p2, {
    sep: ['<strong>', '</strong>'],
  });

  return (
    <main className='flex flex-col items-center'>
      {/* <Maintenance
        emoji={aboutMaintenance.emoji}
        title={aboutMaintenance.title}
        subtitle={aboutMaintenance.subtitle}
        description={aboutMaintenance.description}
      /> */}

      {/* Avatar */}
      <div className='w-[36rem] mt-12 flex flex-col max-md:w-full px-12 text-white'>
        {/* <Image
          alt='me'
          className='w-80 max-md:w-72 aspect-square transform rotate-45'
          src='/kurt-dp.jpeg'
        />

        <Text className='text-zinc-300 font-extrabold text-center text-2xl'>
          Kurt Jacob Urquico
        </Text> */}
        <Text className='font-extrabold text-[3rem]'>Kurt</Text>
        <Text className='font-extrabold text-[3rem]'>Jacob</Text>
        <Text className='font-extrabold text-[3rem]'>Urquico</Text>
      </div>

      {/* About Me */}
      <div className='w-[36rem] px-12 py-4 max-md:w-full flex flex-col gap-4 mt-4'>
        <Text className='text-3xl text-white font-bold'>
          👋 About Me
          <IconArrowWaveRightDown size={20} className='inline-block ml-2' />
        </Text>
        <Text className='text-zinc-500 text-sm indent-4 text-justify'>
          <div dangerouslySetInnerHTML={{ __html: bionicP1 }} />
        </Text>
        <Text className='text-zinc-500 text-sm indent-4 text-justify'>
          <div dangerouslySetInnerHTML={{ __html: bionicP2 }} />
        </Text>
      </div>

      {/* Skills & Focus */}
      <div className='w-[36rem] px-12 py-4 max-md:w-full flex flex-col gap-4 mt-4'>
        <Text className='text-3xl text-white font-bold'>
          🚀 Skills & Focus
          <IconArrowWaveRightDown size={20} className='inline-block ml-2' />
        </Text>

        <Text className='text-white font-semibold'>Frontend Development</Text>
        <Text className='text-zinc-500 indent-6'>
          <IconCornerDownRight size={20} className='inline-block mr-2' />{' '}
          Crafting responsive and visually appealing user interfaces.
        </Text>
        <Text className='text-zinc-500 indent-6'>
          <IconCornerDownRight size={20} className='inline-block mr-2' />{' '}
          Building interactive and dynamic web applications.
        </Text>

        <Text className='text-white font-semibold'>Backend Development</Text>
        <Text className='text-zinc-500 indent-6'>
          <IconCornerDownRight size={20} className='inline-block mr-2' />{' '}
          Creating REST APIs.
        </Text>
        <Text className='text-zinc-500 indent-6'>
          <IconCornerDownRight size={20} className='inline-block mr-2' />{' '}
          Proficient in working with databases.
        </Text>

        <Text className='text-white font-semibold'>Professional Practices</Text>
        <Text className='text-zinc-500 indent-6'>
          <IconCornerDownRight size={20} className='inline-block mr-2' />{' '}
          Managing code collaboratively and efficiently.
        </Text>
        <Text className='text-zinc-500 indent-6'>
          <IconCornerDownRight size={20} className='inline-block mr-2' />{' '}
          Actively engaging in code reviews, fostering knowledge-sharing within
          the development team.
        </Text>

        <Text className='text-white font-semibold'>Problem-Solving</Text>
        <Text className='text-zinc-500 indent-6'>
          <IconCornerDownRight size={20} className='inline-block mr-2' />{' '}
          Passionate problem solver with a unique twist — (Rubik&apos;s Cube).
        </Text>

        <Text className='text-white font-semibold'>Full-Stack Development</Text>
        <Text className='text-zinc-500 indent-6'>
          <IconCornerDownRight size={20} className='inline-block mr-2' />{' '}
          Embarking on the Full-Stack journey, I integrate frontend and backend
          technologies to create cohesive and efficient applications.
        </Text>
      </div>

      {/* Checkout */}
      <div className='w-[36rem] px-12 py-4 max-md:w-full flex flex-col gap-4 mt-4'>
        <Text className='text-zinc-500 text-sm'>
          Check out my{' '}
          <a href='/me/projects' className='text-zinc-500 hover:text-white'>
            projects
          </a>{' '}
          or reach me on{' '}
          <a
            href='https://www.linkedin.com/in/kurturquico/'
            target='_blank'
            className='text-zinc-500 hover:text-white'
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a
            href='https://github.com/urquico'
            target='_blank'
            className='text-zinc-500 hover:text-white'
          >
            GitHub
          </a>
          .
        </Text>
      </div>

      {/* Testimonials */}
      <div className='w-[36rem] px-12 py-4 max-md:w-full flex flex-col gap-4 mt-4'>
        <Text className='text-3xl text-white font-bold'>
          🌟 Testimonials
          <IconArrowWaveRightDown size={20} className='inline-block ml-2' />
        </Text>
        <Carousel />
      </div>
    </main>
  );
}

export default page;
