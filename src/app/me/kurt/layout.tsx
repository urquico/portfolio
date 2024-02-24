import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Kurt | Dev',
  description: 'Home Page',
};

export default function KurtLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
