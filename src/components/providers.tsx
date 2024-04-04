'use client';

import Loading from '@/app/me/loading';
import {
  ActionIcon,
  Affix,
  Button,
  MantineProvider,
  Transition,
  rem,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';
import { ReactNode, useEffect, useState } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();

  // for UI hydration bug
  useEffect(() => {
    setIsDomLoaded(true);
  }, []);

  return (
    <>
      {isDomLoaded ? (
        <MantineProvider>
          {children}
          <Affix position={{ bottom: 20, right: 20 }} className='max-md:hidden'>
            <Transition transition='slide-up' mounted={scroll.y > 0}>
              {(transitionStyles) => (
                <ActionIcon
                  style={transitionStyles}
                  onClick={() => scrollTo({ y: 0 })}
                >
                  <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
                </ActionIcon>
              )}
            </Transition>
          </Affix>
        </MantineProvider>
      ) : (
        <Loading />
      )}
    </>
  );
}
