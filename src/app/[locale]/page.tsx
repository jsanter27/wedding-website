import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="flex flex-col items-center justify-center flex-grow h-full text-center">
      <h6 className="mb-4 animate-bounce">{t('welcomeMessage')}</h6>
      <h1 className="mb-6">{t('names')}</h1>
      <h6 className="mb-8">
        {t('weddingDate')} | {t('weddingLocation')}
      </h6>
      <Link href="/rsvp">
        <button className="px-4 text-3xl shadow-sm rounded-2xl bg-gradient-to-br from-palette-6-lighter to-palette-6-darker hover:brightness-75">
          {t('rsvp')}
        </button>
      </Link>
    </div>
  );
}
