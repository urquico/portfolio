import type { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Kurt | Dev',
  description: 'Home Page',
};

export default function KurtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
