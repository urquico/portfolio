'use client';

import { cn } from '@/lib/utils';
import { Tabs, Text } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface TabsProps {
  tabList: {
    value: string;
    label: string;
    icon: React.ReactNode;
  }[];
  verticalAlign?: boolean;
  className?: string;
  parentPath: string;
  children: React.ReactNode;
}

function TabsDefault({
  tabList,
  verticalAlign,
  className,
  parentPath,
  children,
}: TabsProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('');
  const pathname = usePathname();

  if (parentPath === undefined || parentPath === null) {
    throw new Error('TabsCustom requires a parentPath prop');
  }

  if (tabList === undefined || tabList === null) {
    throw new Error('TabsCustom requires a tabList prop');
  }

  // ? set active tab based on the current pathname
  useEffect(() => {
    tabList.map((tab) => {
      if (pathname.includes(tab.value)) setActiveTab(tab.value);
    });
  }, [pathname, tabList]);

  return (
    <Tabs
      value={activeTab}
      onChange={(value) => router.push(`${parentPath}/${value}`)}
      variant='outline'
      orientation={verticalAlign ? 'vertical' : 'horizontal'}
      activateTabWithKeyboard={true}
      keepMounted={false}
      className={cn(className, 'w-[40rem] max-md:w-full')}
    >
      <Tabs.List className='mx-8'>
        {tabList.map((tab) => (
          <Tabs.Tab
            value={tab.value}
            key={tab.value}
            leftSection={tab.icon}
            className={cn('text-white')}
          >
            <Text className='font-semibold text-sm'>{tab.label}</Text>
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {children}
    </Tabs>
  );
}

export default TabsDefault;
