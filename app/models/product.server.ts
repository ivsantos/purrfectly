import type { Product } from '@prisma/client';
import { prisma } from '~/db.server';

export type { Product } from '@prisma/client';

export function getProducts() {
  return prisma.product.findMany({
    include: {
      images: true,
    },
  });
}

export function getProduct({ id }: { id: Product['id'] }) {
  return prisma.product.findUnique({
    where: { id },
    include: {
      images: true,
    },
  });
}
