'use client';

import { Badge, Text, Timeline } from '@mantine/core';
import { IconActivityHeartbeat, IconCheck } from '@tabler/icons-react';

function ExperienceTimeline() {
  const experienceData = [
    {
      title: 'Freelance Full-Stack Web Developer',
      date: '2022 - Now',
      location: 'Manila',
      description: ['Developed and deployed systems for clients.'],
      active: true,
      projects: ['OMMS-Next'],
    },
    {
      title:
        'Web Developer Intern at Gothong Southern Shipping Lines Inc. (GSSLI)',
      date: '2023 - 2023',
      location: 'Manila',
      description: [
        'A 240-hour practicum in Gothong Southern Shipping Lines Inc. - Manila, Philippines',
        'Developed and Deployed three functional systems, each contributing to enhanced operational efficiency and streamlined processes.',
        'Collaborated with cross-functional teams to ensure seamless integration and user-friendly interfaces.',
        'Utilized advanced technologies and best practices to create innovative solutions that addressed specific needs.',
      ],
      active: false,
      projects: ['MAPS', 'ORASAN', 'HealthVault'],
    },
    {
      title: 'IT Support Intern at DTI - CITEM Philippines',
      date: '2019 - 2019',
      location: 'Pasay, Metro Manila',
      description: [
        'An 80-hour work immersion in Department of Trade and Industries - CITEM Philippines',
        'Assisted and Provided solutions to multiple technology-related issues in a timely and effective manner, and worked to minimize downtime and disruptions for end-users',
      ],
      active: false,
      projects: [],
    },
  ];

  return (
    <Timeline
      active={4}
      bulletSize={24}
      lineWidth={4}
      color='dark'
      className='w-[40rem] px-12 py-4 max-md:w-full flex flex-col gap-4 mt-4'
    >
      {experienceData.map((experience, index) => (
        <Timeline.Item
          key={index}
          bullet={
            experience.active ? (
              <IconActivityHeartbeat size={12} />
            ) : (
              <IconCheck size={12} />
            )
          }
          title={
            <Text className='text-white text-lg font-bold'>
              {experience.title}
            </Text>
          }
        >
          <Text c='dimmed' size='sm' fw='bold'>
            {experience.date}
          </Text>
          <Text size='xs' mt={4} className='text-zinc-200 mb-4' c='dimmed'>
            {experience.location}
          </Text>
          <div className='flex flex-col gap-2'>
            {experience.description.map((desc, i) => (
              <Text key={i} c='dimmed' size='sm' className='text-justify'>
                {desc}
              </Text>
            ))}

            {experience.projects.length > 0 && (
              <Text className='text-white' fz='xs' fw='bold'>
                Associated Projects:
              </Text>
            )}
            <div className='flex gap-2'>
              {experience.projects.map((project, i) => (
                <Badge key={i} color='dark'>
                  {project}
                </Badge>
              ))}
            </div>
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

export default ExperienceTimeline;
