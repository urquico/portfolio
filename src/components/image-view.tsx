import { ScrollArea } from '@mantine/core';
import Image from 'next/image';

function ImageView({ images }: { images: string[] }) {
  return (
    <ScrollArea
      w={'auto'}
      h={250}
      className='mt-4 rounded-md pt-6'
      scrollbars='x'
    >
      <div className='flex gap-2'>
        {images.map((image) => {
          return (
            <Image
              key={image}
              src={image}
              alt=''
              width={450}
              height={250}
              onClick={
                // clicking the image will open it on the other tab
                () => {
                  window.open(image, '_blank');
                }
              }
              className='cursor-pointer rounded-lg'
              quality={50}
            />
          );
        })}
      </div>
    </ScrollArea>
  );
}

export default ImageView;
