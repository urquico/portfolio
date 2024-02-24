'use client';

import Loading from '@/app/me/loading';
import { MantineProvider } from '@mantine/core';
import { ReactNode, useEffect, useState } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  // for UI hydration bug
  useEffect(() => {
    setIsDomLoaded(true);
  }, []);

  return (
    <>
      {isDomLoaded ? (
        <MantineProvider>{children}</MantineProvider>
      ) : (
        <Loading />
      )}
    </>
  );
}
