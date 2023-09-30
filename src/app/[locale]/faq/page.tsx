import { useTranslations } from 'next-intl';
import FaqAccordian, { FaqAccordianItems } from '@/components/FaqAccordian';

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
      header: t('faq-timeline-question'),
      body: t.rich('faq-timeline-answer', {
        ul: (chunks) => <ul>{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>,
      }),
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
      header: t('faq-virtual-option-question'),
      body: t('faq-virtual-option-answer'),
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
            className="font-bold hover:text-palette-7-darker text-palette-7-lighter"
          >
            {chunks}
          </a>
        ),
      }),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center flex-grow h-full text-center">
      <FaqAccordian items={items} heading={t('frequently-asked-questions')} />
    </div>
  );
}
