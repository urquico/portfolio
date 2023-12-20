'use client';

/**
 * FooterNav component.
 * This component is used to create footer navigation for the application,
 * utilizing the links data from the links-data.tsx file in the
 * lib/constants directory. It leverages the usePathname hook from
 * the next/navigation package to retrieve the current pathname
 * and highlight the active link in the footer navigation.
 */
import { links } from '@/lib/constants/links-data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

// FooterNav function component definition
function FooterNav() {
  // Use usePathname hook to get the current pathname
  const pathname = usePathname();

  // Return a div element containing the footer navigation
  return (
    <div className='w-full justify-center hidden max-md:flex max-md:mt-24 '>
      <div className='hidden fixed bottom-8 bg-zinc-800 p-4 max-md:flex rounded-full gap-4 z-50'>
        // Map links data to create a list of anchor elements for the footer navigation
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
      // Footer navigation is hidden on large screens and becomes fixed at the bottom on small screens
      </div>
    </div>
  );
}

export default FooterNav;
