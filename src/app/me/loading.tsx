import { MantineProvider, Text } from '@mantine/core';
import { IconLoader2 } from '@tabler/icons-react';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className='w-full h-screen flex flex-col place-content-center items-center animate-pulse'>
      <IconLoader2 color='gray' className='w-10 h-10 animate-spin mb-4' />
      <MantineProvider>
        <Text className='text-white text-base font-bold animate-bounce'>
          Loading
        </Text>
      </MantineProvider>
    </main>
  );
}
