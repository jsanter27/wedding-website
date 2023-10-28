'use client';
import { Typography } from '@/components/ClientMaterialTailwind';
import Image from 'next/image';

export type BridalPartyBioParams = {
  name: string;
  role: string;
  bio: string;
  image: string;
  bgColor: string;
  textColor: string;
};

export default function BridalPartyBio({
  name,
  role,
  bio,
  image,
  bgColor,
  textColor,
}: BridalPartyBioParams) {
  return (
    <div className={`${textColor} flex flex-col items-center mb-10`}>
      <div
        className={`${bgColor} flex justify-center items-center h-[280px] w-[280px] rounded-full`}
      >
        <Image
          className="rounded-full"
          alt={name}
          src={`/${image}`}
          width="260"
          height="260"
        />
      </div>
      <Typography className="mt-2 font-bold text-center bg-transparent">
        {name}
        <br />
        {role}
      </Typography>
      <Typography className="bg-transparent">{bio}</Typography>
    </div>
  );
}
