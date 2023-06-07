'use client';
import { PropsWithChildren } from 'react';
import { Card } from '@material-tailwind/react';

export default function PageCard({ children }: PropsWithChildren) {
  return (
    <Card className="h-[85%] w-[95%] px-10 py-5 text-left bg-gradient-to-br from-palette-1-lighter to-palette-1-darker text-palette-7 overflow-auto">
      {children}
    </Card>
  );
}
