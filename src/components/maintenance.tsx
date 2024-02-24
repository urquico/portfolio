import { Button, Paper, Text } from '@mantine/core';
import { IconArrowBackUp } from '@tabler/icons-react';
import Link from 'next/link';

interface MaintenanceProps {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
}

function Maintenance({
  emoji,
  title,
  subtitle,
  description,
}: MaintenanceProps) {
  return (
    <div className='w-full h-screen flex flex-col place-content-center items-center'>
      <Paper
        shadow='xs'
        radius='md'
        withBorder
        p='xl'
        className='flex flex-col place-content-center items-center bg-zinc-950 max-w-96 max-md:border-0'
      >
        <Text className='text-[5rem] hover:animate-spin'>{emoji}</Text>
        <Text className='text-3xl text-white font-bold animate-pulse text-center'>
          {title}
        </Text>
        <Text className='font-medium text-zinc-500 text-center'>
          {subtitle}
        </Text>
        <Text className='text-zinc-600 my-4 text-center'>{description}</Text>

        <Button
          component={Link}
          href='/'
          leftSection={<IconArrowBackUp />}
          className='mt-4 hover:bg-zinc-950 hover:text-white'
          variant='default'
        >
          Go Back
        </Button>
      </Paper>
    </div>
  );
}

export default Maintenance;
