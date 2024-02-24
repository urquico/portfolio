/**
 * This file defines the root layout of the application, including the HTML structure and global providers.
 */
import Providers from '@/components/providers';
import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import './globals.css';

// Metadata for the root layout, including the title and description.
export const metadata: Metadata = {
  title: 'Kurt | Dev',
  description: 'Portfolio',
};

// RootLayout is a React component that renders the root layout of the application.
// It takes 'children' as a prop and wraps them with the global providers.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className='bg-zinc-950'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
