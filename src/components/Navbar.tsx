import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Bars from '@heroicons/react/24/outline/Bars3Icon';
import Link from 'next/link';

type NavItemProp = { text: string; link: string };

function NavLogo() {
  return (
    <Link href="/">
      <Image
        width="0"
        height="0"
        className="w-auto pointer-events-none h-9"
        src="logo.png"
        alt="O&J"
      />
    </Link>
  );
}

function MenuButton() {
  return <Bars strokeWidth={2.5} className="w-auto h-6 ml-auto md:hidden" />;
}

function NavItem({ text, link }: NavItemProp) {
  return (
    <Link
      className="text-base md:text-lg w-fit hover:brightness-50"
      href={link}
    >
      {text}
    </Link>
  );
}

function NavMenu() {
  const t = useTranslations('Navbar');

  const items: Array<NavItemProp> = [
    {
      text: t('faq'),
      link: '/faq',
    },
    {
      text: t('additionalEvents'),
      link: '/events',
    },
    {
      text: t('travel'),
      link: '/travel',
    },
  ];
  return (
    <nav className="flex flex-row gap-[inherit]">
      {items.map(({ text, link }, idx) => (
        <NavItem key={idx} text={text} link={link} />
      ))}
    </nav>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 flex flex-col w-full overflow-hidden shadow-sm bg-gradient-to-br from-palette-2-lighter to-palette-2-darker text-palette-7">
      <div className="flex flex-row items-center w-full h-10 gap-4 pl-4 pr-4 text-palette-7">
        <NavLogo />
        <NavMenu />
      </div>
    </header>
  );
}
