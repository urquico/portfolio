'use client';

import { links } from '@/lib/constants/links-data';
import { cn } from '@/lib/utils';
import { Burger, Text } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import  { useEffect } from 'react';

function Navigation() {
  const pathname = usePathname();
  const [opened, { toggle, close: closeMenu, open: openMenu }] =
    useDisclosure();
  const isFullView = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (isFullView) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isFullView, closeMenu, openMenu]);

  return (
    <>
      {/* Mobile Navigation */}
      <div className='flex flex-col top-10 right-10 z-50 fixed place-items-end max-md:hidden'>
        <Burger
          size='sm'
          opened={opened}
          onClick={toggle}
          aria-label='Toggle navigation'
          color='white'
        />
        <div>
          {opened && (
            <div className='flex flex-col'>
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
                      <IconArrowNarrowRight
                        size={20}
                        className='inline-block mr-2'
                      />
                    )}
                    {link.label}
                  </Text>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navigation;
