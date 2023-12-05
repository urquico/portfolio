'use client';

import { links } from '@/lib/constants/links-data';
import { cn } from '@/lib/utils';
import { Text } from '@mantine/core';
import { usePathname } from 'next/navigation';
import React from 'react';

function Navigation() {
  const pathname = usePathname();

  return (
    <div className='fixed text-white top-10 right-10 z-50'>
      {links.map((link) => {
        console.log(pathname.includes('/home'));

        return (
          <Text
            className={cn(
              'text-right',
              pathname.includes(link.label) && 'font-bold text-3xl',
            )}
            key={link.label}
          >
            {link.label}
          </Text>
        );
      })}
    </div>
  );
}

export default Navigation;
