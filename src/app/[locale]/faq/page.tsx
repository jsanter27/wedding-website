import { useTranslations } from 'next-intl';
import FaqAccordian, { FaqAccordianItems } from '@/components/FaqAccordian';

export default function Faq() {
  const t = useTranslations('FAQ');

  const items: FaqAccordianItems = [
    {
      header: t('faq-location-question'),
      body: t('faq-location-answer'),
    },
    {
      header: t('faq-accomodations-question'),
      body: t('faq-accomodations-answer'),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center flex-grow h-full text-center">
      <FaqAccordian items={items} heading={t('frequently-asked-questions')} />
    </div>
  );
}
