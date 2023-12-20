'use client';

/**
 * FooterNav Component
 * Renders a navigation bar at the bottom of the page.
 * Uses the usePathname hook from next/navigation to get the current pathname
 * and the links data from '@/lib/constants/links-data' to render the navigation links.
 */

import { links } from '@/lib/constants/links-data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

function FooterNav() {
  // Get the current pathname using usePathname hook
  const pathname = usePathname();

  // Return a div element containing the navigation bar
  return (
    <div className='w-full justify-center hidden max-md:flex max-md:mt-24 '>
      <div className='hidden fixed bottom-8 bg-zinc-800 p-4 max-md:flex rounded-full gap-4 z-50'>
        // Render the navigation links using the map function on the links data
        {links.map((link, index) => {
          return (
            <a
              key={index}
              // Conditionally apply CSS classes with the cn function based on the current pathname
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
