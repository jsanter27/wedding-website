import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Typography } from '@/components/ClientMaterialTailwind';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="flex flex-col items-center justify-center flex-grow h-full text-center transition-opacity duration-700 ease-in opacity-100">
      <Typography variant="h4" className="mb-4 animate-bounce">
        {t('welcomeMessage')}
      </Typography>
      <Typography variant="h1" className="mb-6">
        {t('names')}
      </Typography>
      <Typography variant="h4" className="mb-8">
        {`${t('weddingDate')} | ${t('weddingLocation')}`}
      </Typography>
      <Link href="/rsvp" className="hidden">
        <button className="px-4 shadow-sm rounded-2xl bg-gradient-to-br from-palette-7-lighter to-palette-7-darker hover:brightness-75">
          <Typography variant="h3">{t('rsvp')}</Typography>
        </button>
      </Link>
    </div>
  );
}
