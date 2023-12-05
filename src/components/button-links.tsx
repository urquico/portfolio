import { socials } from '@/lib/constants/links-data';
import { cn } from '@/lib/utils';
import { Button } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

function ButtonLinks() {
  return (
    <div className='grid grid-cols-3 gap-4 justify-items-center mt-10 max-md:flex max-md:flex-col'>
      {socials.map((social) => {
        return (
          <Button
            key={social.label}
            leftSection={social.icon}
            component={Link}
            href={social.path}
            target='_blank'
            variant='default'
            className={cn(
              'hover:bg-zinc-950 hover:text-white transition ease-in-out duration-300 max-md:w-72',
              {},
            )}
          >
            {social.label}
          </Button>
        );
      })}
    </div>
  );
}

export default ButtonLinks;
