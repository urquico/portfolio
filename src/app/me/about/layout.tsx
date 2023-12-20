import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About | Kurt',
  description: 'Portfolio',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
