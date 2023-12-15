'use client';

import { links } from '@/lib/constants/links-data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

function FooterNav() {
  const pathname = usePathname();

  return (
    <div className='w-full justify-center hidden max-md:flex'>
      <div className='absolute bottom-8 bg-zinc-800 p-4 flex rounded-full gap-4 '>
        {/* <Text c='white'>Test</Text> */}
        {links.map((link, index) => {
          return (
            <a
              key={index}
              className={cn(
                'transition ease-in-out font-semibold text-zinc-500 no-underline',
                pathname.includes(link.path) &&
                  'underline text-white animate-pulse',
              )}
              href={link.path}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default FooterNav;
