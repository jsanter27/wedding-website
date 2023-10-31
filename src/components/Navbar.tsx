'use client';
import { useEffect, useState } from 'react';
import {
  Navbar as MaterialNavbar,
  MobileNav,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import Link from 'next/link';

export type NavItems = Array<{ text: string; link: string }>;

export default function Navbar({ items }: { items: NavItems }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 600 && setOpen(false)
    );
  }, []);

  const navItems = (
    <ul className="flex flex-col gap-2 pt-2 pb-4 lg:pb-0 lg:pt-0 lg:flex-row lg:items-center lg:gap-6">
      {items.map((item, idx) => (
        <Link
          key={`nav-item-${idx}`}
          href={item.link}
          className="hover:text-palette-1-darker"
          onClick={() => setOpen(false)}
        >
          <Typography as="li" variant="lead" className="flex items-center">
            {item.text}
          </Typography>
        </Link>
      ))}
    </ul>
  );

  return (
    <MaterialNavbar className="fixed z-10 w-full px-2 py-0 border-none rounded-none max-w-none min-h-11 bg-gradient-to-br from-palette-6-lighter to-palette-6-darker lg:px-4">
      <div className="flex items-center justify-between h-full">
        <Link href="/">
          <Typography as="div" variant="h3" className="mr-4 cursor-pointer">
            O&amp;J
          </Typography>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden mr-4 lg:block">{navItems}</div>
          <IconButton
            variant="text"
            className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={open}>{navItems}</MobileNav>
    </MaterialNavbar>
  );
}
