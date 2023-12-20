// RootLayout is the top-level React component that provides the overall HTML structure
// and includes essential providers for theming, routing, data management, etc.
// It wraps the application's content, enabling consistent styles and behaviors across pages.

import Providers from '@/components/providers';
import { ColorSchemeScript } from '@mantine/core';
import type { Metadata } from 'next';
import React from 'react';

// Global CSS imports are unnecessary here and should be included in _app.tsx

// Metadata associated with the RootLayout, typically used for head elements like title and meta tags in Next.js pages.
export const metadata: Metadata = {
  title: 'Kurt | Dev',
  description: 'Portfolio',
};

// The RootLayout component acts as a container for all other page components.
// It accepts 'children' props and ensures that they are provided with the necessary context by wrapping them in <Providers />.
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
      <body className='bg-zinc-950'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
