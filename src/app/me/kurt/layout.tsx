import type { Metadata } from 'next';
import React from 'react';

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
      <head></head>
      <body>{children}</body>
    </html>
  );
}
