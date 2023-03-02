import type { Adoptable } from '@prisma/client';
import { prisma } from '~/db.server';

export function getAdoptables() {
  return prisma.adoptable.findMany({
    include: {
      images: true,
    },
  });
}

export function getAdoptable({ id }: { id: Adoptable['id'] }) {
  return prisma.adoptable.findUnique({
    where: { id },
    include: {
      images: true,
    },
  });
}
