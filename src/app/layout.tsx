import Providers from '@/components/providers';
import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import React from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'Urquico',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className='bg-zinc-950 overflow-x-hidden'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
