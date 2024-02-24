import FooterNav from '@/components/footer-nav';
import Navigation from '@/components/navigation';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Dev',
  description: 'Portfolio',
};

export default function MeLayout({ children }: { children: ReactNode }) {
  return (
    <main className='bg-zinc-950'>
      <Navigation />
      {children}
      <FooterNav />
    </main>
  );
}
