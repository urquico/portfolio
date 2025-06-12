import { Text } from '@mantine/core';
import { IconArrowWaveRightDown } from '@tabler/icons-react';
import { textVide } from 'text-vide';

function AboutSection() {
  const p1 = `A Fullstack Software Engineer and Database Administrator with a strong passion for web technologies, design principles, and automation innovations.`;

  const p2 = `Brings years of hands-on experience in software development, building and maintaining systems that reflect technical expertise and a commitment to efficient, scalable solutions. An active AI user, leveraging modern tools to enhance productivity, code quality, and problem-solving. Continuously striving to grow as an established developer and future DevOps engineer.`;

  const bionicP1 = textVide(p1, {
    sep: ['<strong>', '</strong>'],
  });

  const bionicP2 = textVide(p2, {
    sep: ['<strong>', '</strong>'],
  });

  return (
    <div className='w-[40rem] px-12 py-4 max-md:w-full flex flex-col gap-4 mt-4'>
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
