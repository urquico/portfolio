import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About | Kurt',
  description: 'Portfolio',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
