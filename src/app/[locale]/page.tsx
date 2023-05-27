import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="flex flex-col flex-grow h-full items-center justify-center">
      <h6 className="mb-4">{t('welcomeMessage')}</h6>
      <h1 className="mb-6">{t('names')}</h1>
      <h6>
        {t('weddingDate')} | {t('weddingLocation')}
      </h6>
    </div>
  );
}
