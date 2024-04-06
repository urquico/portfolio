import { Text } from '@mantine/core';

interface NameDisplayProps {
  text: string[];
}

function NameDisplay({ text }: NameDisplayProps) {
  return (
    <div className='w-[40rem] mt-12 flex flex-col max-md:w-full px-12 text-white'>
      {text.map((name, index) => (
        <Text key={index} className='font-extrabold text-[3rem]'>
          {name}
        </Text>
      ))}
    </div>
  );
}

export default NameDisplay;
