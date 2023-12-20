import { Text } from '@mantine/core';
import {
  IconArrowWaveRightDown,
  IconCornerDownRight,
} from '@tabler/icons-react';
import React from 'react';

function SkillFocus() {
  // Centralized container class for consistency
  const containerClass = 'w-[36rem] px-12 py-4 max-md:w-full flex flex-col gap-4 mt-4';
  return (
    <div className='skill-focus-container'>
      // The Text component from Mantine is used to render typographic elements.
// Here, it is used to display the 'Skills & Focus' section heading with styling.
<Text className='text-3xl text-white font-bold'>
        🚀 Skills & Focus
        <IconArrowWaveRightDown size={20} className='inline-block ml-2' />
      </Text>
      <Text className='text-white font-semibold'>Frontend Development</Text>
      <Text className='text-zinc-500 indent-6'>
        // The IconCornerDownRight from Tabler Icons React represents a pointer.
// It indicates the start of each skill description for visual emphasis.
<IconCornerDownRight size={20} className='inline-block mr-2' /> Crafting
        responsive and visually appealing user interfaces.
      </Text>
      <Text className='text-zinc-500 indent-6'>
        <IconCornerDownRight size={20} className='inline-block mr-2' /> Building
        interactive and dynamic web applications.
      </Text>
      <Text className='text-white font-semibold'>Backend Development</Text>
      <Text className='text-zinc-500 indent-6'>
        <IconCornerDownRight size={20} className='inline-block mr-2' /> Creating
        REST APIs.
      </Text>
      <Text className='text-zinc-500 indent-6'>
        <IconCornerDownRight size={20} className='inline-block mr-2' />{' '}
        Proficient in working with databases.
      </Text>
      <Text className='text-white font-semibold'>Professional Practices</Text>
      <Text className='text-zinc-500 indent-6'>
        <IconCornerDownRight size={20} className='inline-block mr-2' /> Managing
        code collaboratively and efficiently.
      </Text>
      <Text className='text-zinc-500 indent-6'>
        <IconCornerDownRight size={20} className='inline-block mr-2' /> Actively
        engaging in code reviews, fostering knowledge-sharing within the
        development team.
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

      {/* Links */}
      <div>
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
    </div>
  );
}

export default SkillFocus;
