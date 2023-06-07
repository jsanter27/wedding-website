import Navbar, { NavItems } from '@/components/Navbar';
import '../globals.css';
import { useLocale, useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import React from 'react';

export const metadata = {
  title: "Olga & Justin's Wedding",
  description:
    'Central hub for information regarding the wedding of Olga Avram and Justin Santer',
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  const t = useTranslations('Navbar');

  const items: NavItems = [
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
    <html className="h-full" lang={locale}>
      <body className="h-full bg-center bg-no-repeat bg-cover bg-tall md:bg-wide">
        <Navbar items={items} />
        <div className="container h-full">{children}</div>
      </body>
    </html>
  );
}
