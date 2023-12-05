import { Text } from '@mantine/core';
import React from 'react';

function Home() {
  return (
    <div className='w-screen h-screen flex justify-center place-items-center'>
      <Text component='a' href='/me/kurt' c='white' fz='xl'>
        Continue
      </Text>
    </div>
  );
}

export default Home;
