import PageCard from '@/components/PageCard';
import {
  Typography,
  List,
  ListItem,
} from '@/components/ClientMaterialTailwind';
import { useTranslations } from 'next-intl';
import { FaMapPin, FaPhone, FaGlobe } from 'react-icons/fa';

export default function Travel() {
  const t = useTranslations('Travel');

  return (
    <div className="flex flex-col items-center justify-center flex-grow h-full text-center">
      <PageCard>
        <Typography variant="h2" className="mb-3">
          {t('pageHeader')}
        </Typography>
        <Typography variant="paragraph" className="mb-5">
          {t('pageDescription')}
        </Typography>
        <Typography variant="h3" className="mb-5">
          {t('venueHeader')}
        </Typography>
        <div className="flex flex-col mb-5 md:flex-row">
          <div className="flex flex-col items-center flex-grow mb-5 text-center basis-0">
            <FaMapPin size={35} className="mb-3" />
            {t.rich('venueAddress', {
              line: (chunk) => <Typography>{chunk}</Typography>,
            })}
          </div>
          <div className="flex flex-col items-center flex-grow mb-5 text-center basis-0">
            <FaPhone size={35} className="mb-3" />
            <a
              className="hover:brightness-75 text-palette-5-darker"
              href="tel:+18452470700"
            >
              (845) 247-0700
            </a>
          </div>
          <div className="flex flex-col items-center flex-grow mb-5 text-center basis-0">
            <FaGlobe size={35} className="mb-3" />
            <a
              className="hover:brightness-75 text-palette-5-darker"
              href="https://www.diamondmillshotel.com/"
              target="_blank"
            >
              https://www.diamondmillshotel.com/
            </a>
          </div>
        </div>
        <Typography variant="h3" className="mb-3">
          {t('accommodationsHeader')}
        </Typography>
        <Typography variant="paragraph" className="mb-5">
          {t('accommodationsDescription')}
        </Typography>
        <Typography variant="h3" className="mb-3">
          {t('parkingHeader')}
        </Typography>
        <Typography variant="paragraph" className="mb-5">
          {t('parkingDescription')}
        </Typography>
        <Typography variant="h3" className="mb-3">
          {t('attractionsHeader')}
        </Typography>
        <Typography variant="paragraph" className="mb-3">
          {t('attractionsDescription')}
        </Typography>
        <List className="mb-5 text-palette-5-darker">
          <a
            className="hover:brightness-75"
            href="https://www.saugertieslighthouse.com/visiting/"
            target="_blank"
          >
            {t('saugertiesLighthouse')}
          </a>
          <a
            className="hover:brightness-75"
            href="https://opus40.org/visit/"
            target="_blank"
          >
            {t('opus40')}
          </a>
          <a
            className="hover:brightness-75"
            href="https://www.hudsonrivercruises.com/"
            target="_blank"
          >
            {t('hudsonRiverCruises')}
          </a>
          <a
            className="hover:brightness-75"
            href="https://www.facebook.com/p/Saugerties-Antiques-Center-100069572046598/"
            target="_blank"
          >
            {t('saugertiesAntiqueCenter')}
          </a>
          <a
            className="hover:brightness-75"
            href="https://www.visitthecatskills.com/mountains/"
            target="_blank"
          >
            {t('catskillMountains')}
          </a>
        </List>
      </PageCard>
    </div>
  );
}
