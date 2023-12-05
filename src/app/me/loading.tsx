import { IconLoader2 } from '@tabler/icons-react';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <IconLoader2 color='gray' className='w-10 h-10 animate-spin' />
    </main>
  );
}
