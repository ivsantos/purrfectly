import { prisma } from '~/db.server';

export function getAdoptables() {
  return prisma.adoptable.findMany({
    include: {
      images: true,
    },
  });
}
