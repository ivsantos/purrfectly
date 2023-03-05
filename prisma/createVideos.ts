import type { Adoptable, PrismaClient, Product } from '@prisma/client';

export async function createVideos(
  prisma: PrismaClient,
  products: Product[],
  adoptables: Adoptable[],
) {
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
                productId: products[0].id,
                productName: 'Plumero',
                startTime: 0,
                endTime: 11,
                publicId: 'images/plumero_2_rwnc7d',
                onHover: {
                  action: 'overlay',
                  args: 'Plumero',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/product/${products[0].id}`,
                  },
                },
              },
              {
                isAdoptable: true,
                productId: adoptables[0].id,
                productName: 'Melocotón',
                startTime: 0,
                endTime: 11,
                publicId: 'images/adoptable/orange-kitten-1_au3qkg',
                onHover: {
                  action: 'overlay',
                  args: 'Melocotón',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/adopt/${adoptables[0].id}`,
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
                productId: products[1].id,
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
                    url: `/product/${products[1].id}`,
                  },
                },
              },
              {
                isAdoptable: true,
                productId: adoptables[1].id,
                productName: 'Logan',
                startTime: 0,
                endTime: 8,
                publicId: 'images/adoptable/siamese-1_o51vn5',
                onHover: {
                  action: 'overlay',
                  args: 'Logan',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/adopt/${adoptables[1].id}`,
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
                productId: products[2].id,
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
                    url: `/product/${products[2].id}`,
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
                productId: products[3].id,
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
                    url: `/product/${products[3].id}`,
                  },
                },
              },
              {
                isAdoptable: true,
                productId: adoptables[2].id,
                productName: 'Cookie',
                startTime: 0,
                endTime: 30,
                publicId: 'images/adoptable/carey-1_n5cprf',
                onHover: {
                  action: 'overlay',
                  args: 'Cookie',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/adopt/${adoptables[2].id}`,
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
                productId: products[4].id,
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
                    url: `/product/${products[4].id}`,
                  },
                },
              },
              {
                isAdoptable: true,
                productId: adoptables[3].id,
                productName: 'Oliver',
                startTime: 0,
                endTime: 10,
                publicId: 'images/adoptable/scottish-1_qshxpp',
                onHover: {
                  action: 'overlay',
                  args: 'Oliver',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/adopt/${adoptables[3].id}`,
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
                productId: products[5].id,
                productName: 'Caña con ratón',
                startTime: 0,
                endTime: 8,
                publicId: 'images/raton-1_fxi3vh',
                onHover: {
                  action: 'overlay',
                  args: 'Caña con ratón',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/product/${products[5].id}`,
                  },
                },
              },
              {
                productId: products[6].id,
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
                    url: `/product/${products[6].id}`,
                  },
                },
              },
              {
                isAdoptable: true,
                productId: adoptables[4].id,
                productName: 'Chanchito',
                startTime: 0,
                endTime: 16,
                publicId: 'images/adoptable/gray-kitten-1_yhgsny',
                onHover: {
                  action: 'overlay',
                  args: 'Chanchito',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/adopt/${adoptables[4].id}`,
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/lanzador_fh3pxj',
        category: 'new-arrivals',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: products[7].id,
                productName: 'Lanzador de pelota',
                startTime: 0,
                endTime: 21,
                publicId: 'images/lanzador-1_x2cokl',
                onHover: {
                  action: 'overlay',
                  args: 'Lanzador de pelota',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/product/${products[7].id}`,
                  },
                },
              },
              {
                isAdoptable: true,
                productId: adoptables[5].id,
                productName: 'Ruby',
                startTime: 0,
                endTime: 21,
                publicId: 'images/adoptable/collie-1_xoosad',
                onHover: {
                  action: 'overlay',
                  args: 'Ruby',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/adopt/${adoptables[5].id}`,
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/peluche-perro_ozfttx',
        category: 'new-arrivals',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: products[8].id,
                productName: 'Peluche ardilla',
                startTime: 0,
                endTime: 5,
                publicId: 'images/peluche-perro-1_lirv6e',
                onHover: {
                  action: 'overlay',
                  args: 'Peluche ardilla',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/product/${products[8].id}`,
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/cuerda-perro_fgqg6j',
        category: 'new-arrivals',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: products[9].id,
                productName: 'Cuerda perro',
                startTime: 0,
                endTime: 12,
                publicId: 'images/cuerda-1_kdalzr',
                onHover: {
                  action: 'overlay',
                  args: 'Cuerda perro',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/product/${products[9].id}`,
                  },
                },
              },
              {
                isAdoptable: true,
                productId: adoptables[6].id,
                productName: 'Píxel',
                startTime: 0,
                endTime: 12,
                publicId: 'images/adoptable/labrador-1_e5umou',
                onHover: {
                  action: 'overlay',
                  args: 'Píxel',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/adopt/${adoptables[6].id}`,
                  },
                },
              },
            ],
          },
        },
      },
    ],
  });
}
