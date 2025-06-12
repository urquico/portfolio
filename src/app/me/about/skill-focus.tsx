import { Image, Text } from '@mantine/core';
import {
  IconArrowWaveRightDown,
  IconCornerDownRight,
} from '@tabler/icons-react';

function SkillFocus() {
  return (
    <div className='w-[40rem] px-12 py-4 max-md:w-full flex flex-col gap-4 mt-4'>
      <Text className='text-3xl text-white font-bold'>
        🚀 Skills & Focus
        <IconArrowWaveRightDown size={20} className='inline-block ml-2' />
      </Text>
      <Text className='text-white font-semibold'>Frontend Development</Text>
      <Text className='text-zinc-500 indent-6'>
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
      <Text className='text-white font-semibold'>Database Administration</Text>
      <Text className='text-zinc-500 indent-6'>
        <IconCornerDownRight size={20} className='inline-block mr-2' /> Actively
        contributing to database administration tasks, including performance tuning, backup and recovery, and security management.
      </Text>
      <Text className='text-zinc-500 indent-6'>
        <IconCornerDownRight size={20} className='inline-block mr-2' /> Developing
        robust solutions using T-SQL. Experienced in optimizing queries, managing indexes, and ensuring data integrity across production environments.
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
      <div className='flex'>
        <Text className='text-zinc-500 indent-6'>
          <IconCornerDownRight size={20} className='inline-block mr-2' />{' '}
          Passionate problem solver with a unique twist —
        </Text>
        <Image
          alt='me'
          className='rounded-full border-8 border-solid border-zinc-950'
          h={40}
          w={40}
          src='/cube.png'
        />
      </div>
      <Text className='text-zinc-500 indent-6'>
        <IconCornerDownRight size={20} className='inline-block mr-2' /> Creative
        thinker who enjoys tackling complex challenges.
      </Text>
      <Text className='text-white font-semibold'>Server Configuration & Management</Text>
      <Text className='text-zinc-500 indent-6'>
        <IconCornerDownRight size={20} className='inline-block mr-2' /> Experienced in configuring and deploying web applications using Nginx and IIS for optimal performance and security.
      </Text>
      <Text className='text-zinc-500 indent-6'>
        <IconCornerDownRight size={20} className='inline-block mr-2' /> Skilled in managing reverse proxy setups, load balancing, SSL certificate integration, and troubleshooting server-related issues on both Linux and Windows environments.
      </Text>

      {/* Links */}
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
          </a>
          {', '}
          <a
            href='https://github.com/urquico'
            target='_blank'
            className='text-zinc-500 hover:text-white'
          >
            GitHub
          </a>
          {', or '}
          <a
            href='mailto:urquico.dev@gmail.com'
            target='_blank'
            className='text-zinc-500 hover:text-white'
          >
            Email
          </a>
          .
        </Text>
      </div>
    </div>
  );
}

export default SkillFocus;
