'use client';

import { cn } from '@/lib/utils';
import { Tabs, Text } from '@mantine/core';
import React from 'react';

interface TabsProps {
  tabList: {
    value: string;
    label: string;
    icon: React.ReactNode;
    content: React.ReactNode;
  }[];
  verticalAlign?: boolean;
  className?: string;
}

function TabsDefault({ tabList, verticalAlign, className }: TabsProps) {
  if (tabList === undefined || tabList === null) {
    throw new Error('TabsDefault requires a tabList prop');
  }

  return (
    <Tabs
      variant='outline'
      orientation={verticalAlign ? 'vertical' : 'horizontal'}
      activateTabWithKeyboard={true}
      keepMounted={false}
      defaultValue={tabList[0].value}
      className={cn(className, 'w-[40rem]')}
    >
      <Tabs.List justify='flex-center' className='mx-8'>
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

      {tabList.map((tab) => (
        <Tabs.Panel value={tab.value} key={tab.value}>
          {tab.content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}

export default TabsDefault;
