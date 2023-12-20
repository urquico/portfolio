/**
 * FooterNav component used to render navigation links in the footer.
 * It relies on links data from 'links-data.tsx' and 'usePathname' hook from 'next/navigation'
 * to determine and highlight the active link based on the current pathname.
 */
'use client';

import { links } from '@/lib/constants/links-data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

function FooterNav() {
  // Get the current pathname using the usePathname hook
  const pathname = usePathname();

    // Return a div containing the navigation links with conditional class names
  return (
    <div className='w-full justify-center hidden max-md:flex max-md:mt-24 '>
      <div className='hidden fixed bottom-8 bg-zinc-800 p-4 max-md:flex rounded-full gap-4 z-50'>
                // Map over the links data to render each navigation link
        {links.map((link, index) => {
          return (
            <a
              key={index}
                            // Apply conditional class names using the cn function based on the current pathname
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
