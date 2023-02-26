import { prisma } from '~/db.server';

export type { Video } from '@prisma/client';

export function getVideos() {
  return prisma.video.findMany();
}
