/**
 * FooterNav Component
 *
 * This file contains the FooterNav component used in the application's footer.
 * It provides navigation links to various sections of the portfolio website.
 *
 */
'use client';

import { links } from '@/lib/constants/links-data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

// FooterNav function
// This component displays a footer navigation bar with links to different pages.
function FooterNav() {
   // Use the usePathname hook to get the current page's pathname
  const pathname = usePathname();

  return (
    <div className='w-full justify-center hidden max-md:flex max-md:mt-24 '>
      <div className='hidden fixed bottom-8 bg-zinc-800 p-4 max-md:flex rounded-full gap-4 z-50'>
                // Map over the 'links' array to render each navigation link
        {links.map((link, index) => {
          return (
            <a
              key={index}
              className={cn(
                'transition ease-in-out font-semibold text-zinc-500 no-underline',
                            // Apply conditional styling to highlight the active link
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
