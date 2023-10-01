'use client';
import { Typography } from '@/components/ClientMaterialTailwind';
import Image from 'next/image';

export type BridalPartyBioParams = {
  name: string;
  role: string;
  bio: string;
  image: string;
  color: 'palette-4' | 'palette-6';
};

export default function BridalPartyBio({
  name,
  role,
  bio,
  image,
  color,
}: BridalPartyBioParams) {
  return (
    <div className={`flex flex-col items-center mb-10 text-${color}-darker`}>
      <div
        className={`flex justify-center items-center bg-${color} h-[385px] w-[385px] rounded-full`}
      >
        <Image
          className="rounded-full"
          alt={name}
          src={`/${image}`}
          width="360"
          height="360"
        />
      </div>
      <Typography className="mt-2 font-bold text-center" variant="medium">
        {name}
        <br />
        {role}
      </Typography>
      <Typography>{bio}</Typography>
    </div>
  );
}
