import { prisma } from '~/db.server';

export function getVideos() {
  return prisma.video.findMany();
}
