import PageCard from '@/components/PageCard';
import { Typography } from '@material-tailwind/react';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  const bridalParty = [
    {
      name: t('svitlanaName'),
      role: t('matronOfHonor'),
      bio: t('svitlanaBio'),
      image: 'svitlana.jpg',
    },
    {
      name: t('michaelName'),
      role: t('bestMan'),
      bio: t('michaelBio'),
      image: 'placeholder.jpg',
    },
    {
      name: t('roxyName'),
      role: t('bridesmaid'),
      bio: t('roxyBio'),
      image: 'placeholder.jpg',
    },
    {
      name: t('ginoName'),
      role: t('groomsman'),
      bio: t('ginoBio'),
      image: 'gino.jpg',
    },
    {
      name: t('evelynName'),
      role: t('bridesmaid'),
      bio: t('evelynBio'),
      image: 'placeholder.jpg',
    },
    {
      name: t('joshName'),
      role: t('groomsman'),
      bio: t('joshBio'),
      image: 'josh.jpg',
    },
    {
      name: t('catherineName'),
      role: t('bridesmaid'),
      bio: t('catherineBio'),
      image: 'placeholder.jpg',
    },
    {
      name: t('zakharName'),
      role: t('groomsman'),
      bio: t('zakharBio'),
      image: 'zakhar.jpg',
    },
    {
      name: t('saraName'),
      role: t('bridesmaid'),
      bio: t('saraBio'),
      image: 'placeholder.jpg',
    },
    {
      name: t('mattName'),
      role: t('groomsman'),
      bio: t('mattBio'),
      image: 'matt.jpg',
    },
    {
      name: t('jennaName'),
      role: t('bridesmaid'),
      bio: t('jennaBio'),
      image: 'placeholder.jpg',
    },
    {
      name: t('andrewName'),
      role: t('groomsman'),
      bio: t('andrewBio'),
      image: 'andrew.jpg',
    },
    {
      name: t('marianaName'),
      role: t('bridesmaid'),
      bio: t('marianaBio'),
      image: 'mariana.jpg',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center flex-grow h-full text-center">
      <PageCard>
        <BrideAndGroomBio header={t('ourStory')} story={t('story')} />
        <Typography variant="h2" className="mb-3">
          {t('ourStory')}
        </Typography>
        {bridalParty.map((person, i) => (
          <BridalPartyBio
            key={i}
            image={person.image}
            name={person.name}
            role={person.role}
            bio={person.bio}
          />
        ))}
      </PageCard>
    </div>
  );
}
