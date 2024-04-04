'use client';

import { experienceData } from '@/lib/constants/experience-data';
import { Badge, Text, Timeline } from '@mantine/core';
import { IconActivityHeartbeat, IconCheck } from '@tabler/icons-react';

function ExperienceTimeline() {
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
