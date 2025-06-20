'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Hey', href: '/' },
  { name: 'Contact', href: '/contact' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx({
              'bg-purple-600': link.href === pathname,
            })}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
