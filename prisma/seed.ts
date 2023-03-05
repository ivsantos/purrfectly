import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { createAdoptables } from './createAdoptables';
import { createProducts } from './createProducts';
import { createVideos } from './createVideos';

const prisma = new PrismaClient();

async function seed() {
  const email = 'isantos@remix.run';

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });
  await prisma.video.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });
  await prisma.product.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });
  await prisma.image.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });
  await prisma.adoptable.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });
  await prisma.cart.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash('isantosremix', 10);

  await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  const adoptables = await createAdoptables(prisma);
  const products = await createProducts(prisma);
  await createVideos(prisma, products, adoptables);

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
