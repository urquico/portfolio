import { Text } from '@mantine/core';

function NameDisplay() {
  return (
    <div className='w-[40rem] mt-12 flex flex-col max-md:w-full px-12 text-white'>
      <Text className='font-extrabold text-[3rem]'>Kurt</Text>
      <Text className='font-extrabold text-[3rem]'>Jacob</Text>
      <Text className='font-extrabold text-[3rem]'>Urquico</Text>
    </div>
  );
}

export default NameDisplay;
