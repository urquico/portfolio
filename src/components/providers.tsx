'use client';

import { MantineProvider } from '@mantine/core';
import React from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <MantineProvider>{children}</MantineProvider>;
}
