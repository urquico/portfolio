import { StackProps } from '@/lib/interfaces';
import { Image } from '@mantine/core';

function Stack({ src, label }: StackProps) {
  return (
    <div className='backdrop-blur bg-white/50 p-4'>
      <Image alt={label} h={100} w={100} src={src} />
    </div>
  );
}

export default Stack;
