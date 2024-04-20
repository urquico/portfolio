import { cn } from '@/lib/utils';
import { Button } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

interface CustomButtonProps {
  icon: React.ReactNode;
  path: string;
  label: string;
  className?: string;
  size?: string;
}

function CustomButton({
  icon,
  path,
  label,
  className,
  size,
}: CustomButtonProps) {
  return (
    <Button
      leftSection={icon}
      component={Link}
      size={size}
      href={path}
      target='_blank'
      variant='default'
      className={cn(
        'bg-zinc-950 text-white rounded-full hover:bg-white hover:text-zinc-950 transition ease-in-out duration-300',
        className,
      )}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
