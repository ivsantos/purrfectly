import type { Adoptable as AdoptableType, Image } from '@prisma/client';

import Adoptable from './Adoptable';

interface AdoptableListProps {
  adoptables: (AdoptableType & {
    images: Image[];
  })[];
}

export default function AdoptableList({ adoptables }: AdoptableListProps) {
  return (
    <div className="mx-auto mb-10 grid max-w-5xl grid-cols-card gap-12">
      {adoptables.map((adoptable) => (
        <Adoptable key={adoptable.id} adoptable={adoptable} />
      ))}
    </div>
  );
}
