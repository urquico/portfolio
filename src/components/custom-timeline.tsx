'use client';

import { TimelineType } from '@/lib/interfaces';
import { Anchor, Avatar, Badge, Text, Timeline, Tooltip } from '@mantine/core';
import {
  IconActivityHeartbeat,
  IconBrandGithub,
  IconCheck,
  IconError404,
  IconLink,
} from '@tabler/icons-react';

import CustomButton from './custom-button';
import ImageView from './image-view';

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
      {projectData?.map((project, index) => (
        <Timeline.Item
          key={index}
          bullet={
            project.isInProgress ? (
              <IconActivityHeartbeat size={12} />
            ) : (
              <IconCheck size={12} />
            )
          }
          title={
            <>
              {project.previewLink ? (
                <Anchor
                  href={project.previewLink}
                  target='_blank'
                  className='text-white text-lg font-bold hover:underline cursor-pointer'
                >
                  {project.title} <IconLink size='1rem' />
                </Anchor>
              ) : (
                <Text className='text-white text-lg font-bold'>
                  {project.title}
                </Text>
              )}
            </>
          }
        >
          <Text className='text-white' fz='xs' fw='bold'>
            {project.role}
          </Text>

          <Text c='dimmed' size='sm' fw='bold'>
            {project.date}
          </Text>
          <Text size='xs' mt={4} className='text-zinc-200 mb-4' c='dimmed'>
            {project.client}
          </Text>
          <div className='flex flex-col gap-2'>
            {project.description.map((desc, i) => (
              <Text key={i} c='dimmed' size='sm' className='text-justify'>
                {desc}
              </Text>
            ))}

            <Tooltip.Group openDelay={300} closeDelay={100}>
              <Avatar.Group spacing='xs'>
                {project.stacks.map((stack, i) => (
                  <Tooltip label={stack.label} withArrow key={i}>
                    <Avatar src={stack.src} radius='xl' size='md'>
                      <IconError404 size='1.5rem' />
                    </Avatar>
                  </Tooltip>
                ))}
              </Avatar.Group>
            </Tooltip.Group>

            {project.associatedExperience.length > 0 && (
              <Text className='text-white' fz='xs' fw='bold' c='dimmed'>
                Associated with {project.associatedExperience}
              </Text>
            )}
          </div>

          {project.images && <ImageView images={project.images} />}

          {project.githubLink && (
            <CustomButton
              icon={<IconBrandGithub size={14} />}
              path={project.githubLink}
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
