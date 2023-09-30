'use client';
import { ReactElement, ReactNodeArray, useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import PageCard from './PageCard';
import { Typography } from './ClientMaterialTailwind';

export type FaqAccordianItems = Array<{
  header: string;
  body: ReactElement | ReactNodeArray | string;
}>;

export default function FaqAccordian({
  items,
  heading,
}: {
  items: FaqAccordianItems;
  heading: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? null : value);
  };

  return (
    <PageCard>
      <Typography variant="h2" className="mb-3">
        {heading}
      </Typography>
      <div className="overflow-scroll">
        {items.map((item, idx) => (
          <Accordion
            key={`accordian-${idx}`}
            open={open === idx}
            className="mb-1 overflow-hidden"
          >
            <AccordionHeader onClick={() => handleOpen(idx)} className="pb-2">
              {item.header}
            </AccordionHeader>
            <hr className="h-px mb-2 border-0 bg-palette-6-darker" />
            <AccordionBody>
              <div className="font-thin text-palette-6-darker/90">
                {item.body}
              </div>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </PageCard>
  );
}
