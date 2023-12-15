'use client';

import { links } from '@/lib/constants/links-data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

function FooterNav() {
  const pathname = usePathname();

  return (
    <div className='w-full justify-center hidden max-md:flex max-md:mt-24 '>
      <div className='hidden fixed bottom-8 bg-zinc-800 p-4 max-md:flex rounded-full gap-4 z-50'>
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
