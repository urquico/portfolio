import TabsDefault from '@/components/tabs-default';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import NameDisplay from '../about/name-display';

export const metadata: Metadata = {
  title: 'About | Kurt',
  description: 'Projects',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  const tabList = [
    {
      value: 'main',
      label: 'Main Projects',
      icon: '🚀',
    },
    {
      value: 'side',
      label: 'Side Projects',
      icon: '🛠️',
    },
  ];

  return (
    <main className='flex flex-col items-center'>
      <NameDisplay text={['Works,', 'Projects,', '& Portfolio']} />
      <TabsDefault
        tabList={tabList}
        parentPath='/me/projects/'
        className='mt-8'
      >
        {children}
      </TabsDefault>
    </main>
  );
}
