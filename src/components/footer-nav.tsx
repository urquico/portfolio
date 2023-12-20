/**
 * This file defines the FooterNav component used in the application's footer to 
 * navigate between different sections of the portfolio.
 *
 * The FooterNav function renders navigation links based on the 'links' constant
 * and highlights the current path using the 'usePathname' hook from Next.js.
 */
'use client';

import { links } from '@/lib/constants/links-data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

/**
 * FooterNav is a functional component that renders the navigation menu in the footer.
 * It uses the 'links' constant to display the available links and the 'usePathname' hook to determine
 * the current active link.
 *
 * @returns The rendered footer navigation menu as JSX.
 */
function FooterNav() {
    // 'pathname' holds the current path of the application, used to identify the active link.
  const pathname = usePathname();

  return (
    <div className='w-full justify-center hidden max-md:flex max-md:mt-24 '>
      // This block generates a list of navigation links for the footer.
      <div className='hidden fixed bottom-8 bg-zinc-800 p-4 max-md:flex rounded-full gap-4 z-50'>
        {links.map((link, index) => {
          return (
            // Apply appropriate className to highlight the active link and provide visual feedback.
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
