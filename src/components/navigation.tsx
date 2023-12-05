'use client';

import { links } from '@/lib/constants/links-data';
import { cn } from '@/lib/utils';
import { Text } from '@mantine/core';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import React from 'react';

function Navigation() {
  const pathname = usePathname();

  return (
    <div className='fixed text-white top-10 right-10 z-50 flex flex-col'>
      {links.map((link) => {
        return (
          <Text
            component='a'
            href={link.path}
            className={cn(
              'motion-safe:animate-pulse transition ease-in-out text-base text-right text-zinc-500 hover:text-white hover:text-3xl hover:font-bold',
              pathname.includes(link.path) &&
                'font-bold text-3xl hover:underline text-red-600 hover:text-3xl hover:text-white',
            )}
            key={link.label}
          >
            {pathname.includes(link.path) && (
              <IconArrowNarrowRight size={20} className='inline-block mr-2' />
            )}
            {link.label}
          </Text>
        );
      })}
    </div>
  );
}

export default Navigation;
