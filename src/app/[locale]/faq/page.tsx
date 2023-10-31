import { useTranslations } from 'next-intl';
import FaqAccordian, { FaqAccordianItems } from '@/components/FaqAccordian';
import PageCard from '@/components/PageCard';

export default function Faq() {
  const t = useTranslations('FAQ');

  const items: FaqAccordianItems = [
    {
      header: t('faq-arrival-time-question'),
      body: t('faq-arrival-time-answer'),
    },
    {
      header: t('faq-dress-code-question'),
      body: t('faq-dress-code-answer'),
    },
    {
      header: t('faq-indoors-outdoors-question'),
      body: t('faq-indoors-outdoors-answer'),
    },
    {
      header: t('faq-parking-question'),
      body: t('faq-parking-answer'),
    },
    {
      header: t('faq-meal-question'),
      body: t('faq-meal-answer'),
    },
    {
      header: t('faq-dietary-restrictions-question'),
      body: t('faq-dietary-restrictions-answer'),
    },
    {
      header: t('faq-bar-question'),
      body: t('faq-bar-answer'),
    },
    {
      header: t('faq-room-block-question'),
      body: t('faq-room-block-answer'),
    },
    {
      header: t('faq-rsvp-method-question'),
      body: t('faq-rsvp-method-answer'),
    },
    {
      header: t('faq-rsvp-deadline-question'),
      body: t('faq-rsvp-deadline-answer'),
    },
    {
      header: t('faq-updates-question'),
      body: t('faq-updates-answer'),
    },
    {
      header: t('faq-contact-info-question'),
      body: t.rich('faq-contact-info-answer', {
        a: (chunks) => (
          <a
            href="mailto: oandjwedding2024@gmail.com"
            className="hover:brightness-75 text-palette-7-darker"
          >
            {chunks}
          </a>
        ),
      }),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center flex-grow h-full text-center">
      <PageCard>
        <FaqAccordian items={items} heading={t('frequently-asked-questions')} />
      </PageCard>
    </div>
  );
}
