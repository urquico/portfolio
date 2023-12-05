import Navigation from '@/components/navigation';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Dev',
  description: 'Portfolio',
};

export default function MeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='bg-zinc-950 overflow-x-hidden'>
      <Navigation />
      {children}
    </main>
  );
}
