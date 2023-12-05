import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Kurt | Dev',
  description: 'Portfolio',
};

export default function KurtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
