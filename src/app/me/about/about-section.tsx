import { Text } from '@mantine/core';
import { IconArrowWaveRightDown } from '@tabler/icons-react';
import React from 'react';
import { textVide } from 'text-vide';

function AboutSection() {
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
  );
}

export default AboutSection;
