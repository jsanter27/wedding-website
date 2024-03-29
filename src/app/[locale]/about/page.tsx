import PageCard from '@/components/PageCard';
import { Typography } from '@/components/ClientMaterialTailwind';
import BridalPartyBio from '@/components/BridalPartyBio';
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
      image: 'michael.jpg',
    },
    {
      name: t('roxyName'),
      role: t('bridesmaid'),
      bio: t('roxyBio'),
      image: 'roksolana.jpg',
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
      image: 'evelyn.jpg',
    },
    {
      name: t('joshName'),
      role: t('groomsman'),
      bio: t('joshBio'),
      image: 'josh.jpg',
    },
    {
      name: t('catherineName'),
      role: `${t('bridesmaid')}-${t('officiant')}`,
      bio: t('catherineBio'),
      image: 'catherine.jpg',
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
      image: 'sara.jpg',
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
      image: 'jenna.jpg',
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
        <div className="overflow-auto">
          <div className="mb-10">
            <Typography variant="h2" className="mb-3">
              {t('ourStory')}
            </Typography>
            {t.rich('story', {
              line: (chunks) => (
                <Typography className="mb-3 text-palette-5-darker">
                  {chunks}
                </Typography>
              ),
            })}
          </div>
          <div>
            <Typography variant="h3" className="mb-3">
              {t('bridalParty')}
            </Typography>
            <div className="flex flex-col items-center justify-center flex-grow h-full text-center">
              {bridalParty.map((person, i) => (
                <BridalPartyBio
                  key={i}
                  image={person.image}
                  name={person.name}
                  role={person.role}
                  bio={person.bio}
                  bgColor={i % 2 == 0 ? 'bg-palette-6' : 'bg-palette-4'}
                  textColor={
                    i % 2 == 0
                      ? 'text-palette-6-darker'
                      : 'text-palette-4-darker'
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </PageCard>
    </div>
  );
}
