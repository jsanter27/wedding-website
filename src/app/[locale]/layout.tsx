import '../globals.css';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import React from 'react';

export const metadata = {
  title: "Olga & Justin's Wedding",
  description:
    'Central hub for information regarding the wedding of Olga Avram and Justin Santer',
};

export default async function LocaleLayout({
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

  return (
    <html className="h-full" lang={locale}>
      <body className="h-full bg-center bg-no-repeat bg-cover bg-tall md:bg-wide">
        <div className="container h-full">{children}</div>
      </body>
    </html>
  );
}
