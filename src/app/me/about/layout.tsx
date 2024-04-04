import TabsDefault from '@/components/tabs-default';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import NameDisplay from './name-display';

export const metadata: Metadata = {
  title: 'About | Kurt',
  description: 'Portfolio',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  const tabList = [
    {
      value: 'general-info',
      label: 'General Info',
      icon: '👨‍💻',
    },
    {
      value: 'work-experience',
      label: 'Experience',
      icon: '🏢',
    },
  ];

  return (
    <main className='flex flex-col items-center'>
      <NameDisplay />
      <TabsDefault tabList={tabList} parentPath='/me/about/' className='mt-8'>
        {children}
      </TabsDefault>
    </main>
  );
}
