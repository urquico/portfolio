import { Text } from '@mantine/core';
import { IconArrowWaveRightDown } from '@tabler/icons-react';
import { textVide } from 'text-vide';

function AboutSection() {
  const p1 = `A versatile Fullstack Software Engineer passionate about web technologies, design, and automation. Recognized as a multi-disciplinary engineer with expertise in Java Spring Boot, .NET, NestJS, and Laravel for backend, and React.js, Next.js, and Nuxt.js for frontend. Skilled with MySQL, NoSQL, and PostgreSQL, delivering scalable and efficient solutions. An active AI user, leveraging modern tools to boost productivity and problem-solving, while continuously growing towards DevOps engineering.`;

  const bionicP1 = textVide(p1, {
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
    </div>
  );
}

export default AboutSection;
