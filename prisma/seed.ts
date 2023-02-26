import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seed() {
  const email = 'rachel@remix.run';

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });
  await prisma.video.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash('racheliscool', 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: 'My first note',
      body: 'Hello, world!',
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: 'My second note',
      body: 'Hello, world!',
      userId: user.id,
    },
  });

  const shoppableConfig = {
    startState: 'open',
    autoClose: 2,
    bannerMsg: ' ',
    transformation: {
      quality: 'auto:eco',
      fetch_format: 'auto',
      crop: 'pad',
      aspect_ratio: '1',
    },
  };

  await prisma.video.createMany({
    data: [
      {
        publicId: 'videos/plumero_kkcmm3',
        category: 'featured',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: 1,
                productName: 'Plumero',
                startTime: 0,
                endTime: 11,
                publicId: 'images/plumero_1_xfggqc',
                hotspots: [
                  {
                    time: '00:08',
                    x: '43%',
                    y: '55%',
                    tooltipPosition: 'left',
                    clickUrl: '/products/1',
                  },
                ],
                onHover: {
                  action: 'overlay',
                  args: 'Plumero',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: '/products/1',
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/rascador_esquinero_to6sew',
        category: 'featured',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: 2,
                productName: 'Rascador esquina',
                startTime: 0,
                endTime: 8,
                publicId: 'images/rascador_esquinero_1_zryxsh',
                onHover: {
                  action: 'overlay',
                  args: 'Rascador esquina',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: '/products/2',
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/peluche_qkzj8t',
        category: 'featured',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: 3,
                productName: 'Peluche patito',
                startTime: 0,
                endTime: 6,
                publicId: 'images/peluche_1_uvt240',
                onHover: {
                  action: 'overlay',
                  args: 'Peluche patito',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: '/products/3',
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/pez_lxzexl',
        category: 'best-sellers',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: 4,
                productName: 'Pez eléctrico',
                startTime: 0,
                endTime: 30,
                publicId: 'images/pez_1_t5ssq6',
                onHover: {
                  action: 'overlay',
                  args: 'Pez eléctrico',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: '/products/4',
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/interactivo_dpqriz',
        category: 'best-sellers',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: 5,
                productName: 'Juguete interactivo',
                startTime: 0,
                endTime: 10,
                publicId: 'images/interactivo_1_gafeph',
                onHover: {
                  action: 'overlay',
                  args: 'Juguete interactivo',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: '/products/5',
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/rascador_poste_yn6pal',
        category: 'best-sellers',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: 6,
                productName: 'Caña con ratón',
                startTime: 0,
                endTime: 8,
                publicId: 'images/raton_2_punctf',
                onHover: {
                  action: 'overlay',
                  args: 'Caña con ratón',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: '/products/6',
                  },
                },
              },
              {
                productId: 7,
                productName: 'Rascador poste',
                startTime: 8,
                endTime: 16,
                publicId: 'images/rascador_poste_1_tegnqv',
                onHover: {
                  action: 'overlay',
                  args: 'Rascador poste',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: '/products/7',
                  },
                },
              },
            ],
          },
        },
      },
    ],
  });

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
