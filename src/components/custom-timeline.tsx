'use client';

import { ExperienceData } from '@/lib/constants/experience-data';
import { ProjectData } from '@/lib/constants/project-data';
import { Anchor, Avatar, Badge, Text, Timeline, Tooltip } from '@mantine/core';
import {
  IconActivityHeartbeat,
  IconBrandGithub,
  IconCheck,
  IconError404,
  IconLink,
} from '@tabler/icons-react';

import CustomButton from './custom-button';

interface TimelineType {
  experienceData?: ExperienceData[];
  projectData?: ProjectData[];
}

function CustomTimeline({ experienceData, projectData }: TimelineType) {
  if (experienceData) {
    return (
      <Timeline
        active={4}
        bulletSize={24}
        lineWidth={4}
        color='dark'
        className='w-[40rem] px-12 py-4 max-md:w-full flex flex-col gap-4 mt-4'
      >
        {experienceData?.map((experience, index) => (
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

  return (
    <Timeline
      active={4}
      bulletSize={24}
      lineWidth={4}
      color='dark'
      className='w-[40rem] px-12 py-4 max-md:w-full flex flex-col gap-4 mt-4'
    >
      {projectData?.map((experience, index) => (
        <Timeline.Item
          key={index}
          bullet={
            experience.isInProgress ? (
              <IconActivityHeartbeat size={12} />
            ) : (
              <IconCheck size={12} />
            )
          }
          title={
            <>
              {experience.previewLink ? (
                <Anchor
                  href={experience.previewLink}
                  target='_blank'
                  className='text-white text-lg font-bold hover:underline cursor-pointer'
                >
                  {experience.title} <IconLink size='1rem' />
                </Anchor>
              ) : (
                <Text className='text-white text-lg font-bold'>
                  {experience.title}
                </Text>
              )}
            </>
          }
        >
          <Text className='text-white' fz='xs' fw='bold'>
            {experience.role}
          </Text>

          <Text c='dimmed' size='sm' fw='bold'>
            {experience.date}
          </Text>
          <Text size='xs' mt={4} className='text-zinc-200 mb-4' c='dimmed'>
            {experience.client}
          </Text>
          <div className='flex flex-col gap-2'>
            {experience.description.map((desc, i) => (
              <Text key={i} c='dimmed' size='sm' className='text-justify'>
                {desc}
              </Text>
            ))}

            <Tooltip.Group openDelay={300} closeDelay={100}>
              <Avatar.Group spacing='xs'>
                {experience.stacks.map((stack, i) => (
                  <Tooltip label={stack.label} withArrow key={i}>
                    <Avatar src={stack.src} radius='xl' size='md'>
                      <IconError404 size='1.5rem' />
                    </Avatar>
                  </Tooltip>
                ))}
              </Avatar.Group>
            </Tooltip.Group>

            {experience.associatedExperience.length > 0 && (
              <Text className='text-white' fz='xs' fw='bold' c='dimmed'>
                Associated with {experience.associatedExperience}
              </Text>
            )}
          </div>

          {experience.githubLink && (
            <CustomButton
              icon={<IconBrandGithub size={14} />}
              path={experience.githubLink}
              label='View Repository'
              className='mt-4'
              size='xs'
            />
          )}
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

export default CustomTimeline;
