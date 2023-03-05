import type { PrismaClient } from '@prisma/client';

export async function createAdoptables(prisma: PrismaClient) {
  const adoptables = [];

  adoptables.push(
    await prisma.adoptable.create({
      data: {
        name: 'Melocotón',
        sex: 'm',
        description:
          'Melocotón es un gatito naranja de 4 meses de edad. Es un gatito juguetón y curioso que le encanta explorar su entorno. Melocotón también adora recibir cariño y jugar con sus peluches. Está buscando un hogar amoroso donde pueda crecer y desarrollarse rodeado de mucho amor y atención.',
        category: 'Gato',
        status: 'Disponible',
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677710472/images/adoptable/orange-kitten-1_au3qkg.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677710472/images/adoptable/orange-kitten-2_bgh7e1.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677710472/images/adoptable/orange-kitten-3_au2mnz.jpg',
            },
          ],
        },
      },
    }),
  );

  adoptables.push(
    await prisma.adoptable.create({
      data: {
        name: 'Logan',
        sex: 'm',
        description:
          'Logan es un gato mezcla de siamés de 4 meses y medio de edad con un pelaje de color crema. Es un gato muy cariñoso y juguetón que adora la atención de todos, tanto humanos como otros amigos gatos. Si buscas un gato mezcla de siamés cariñoso y divertido, ¡Logan es el compañero de vida perfecto para ti!',
        category: 'Gato',
        status: 'Reservado',
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677777146/images/adoptable/siamese-1_o51vn5.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677777146/images/adoptable/siamese-2_p0nucc.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677777146/images/adoptable/siamese-3_z8gwrq.jpg',
            },
          ],
        },
      },
    }),
  );

  adoptables.push(
    await prisma.adoptable.create({
      data: {
        name: 'Cookie',
        sex: 'f',
        description:
          'Cookie es una gata de 4 años de edad con un pelaje suave y sedoso tri-color. Es una gata muy dulce y tranquila que adora pasar tiempo en los brazos de los humanos. Cookie también disfruta de las siestas en el sol y jugar con juguetes de cuerda. ¿Quieres darle a Cookie un hogar para siempre? ¡Adóptala hoy mismo!',
        category: 'Gato',
        status: 'Disponible',
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677710472/images/adoptable/carey-1_n5cprf.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677710472/images/adoptable/carey-2_oa683b.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677710472/images/adoptable/carey-3_v48vmn.jpg',
            },
          ],
        },
      },
    }),
  );

  adoptables.push(
    await prisma.adoptable.create({
      data: {
        name: 'Oliver',
        sex: 'm',
        description:
          'Oliver es un gato Scottish Fold de 2 años de edad con un pelaje suave y brillante de color gris oscuro. Es un gato muy inteligente y curioso que siempre está buscando algo nuevo para explorar. Siempre está preparado para jugar con juguetes que desafíen su mente.',
        category: 'Gato',
        status: 'Adoptado',
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677710473/images/adoptable/scottish-1_qshxpp.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677710473/images/adoptable/scottish-2_tyyfiz.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677710473/images/adoptable/scottish-3_n5b20y.jpg',
            },
          ],
        },
      },
    }),
  );

  adoptables.push(
    await prisma.adoptable.create({
      data: {
        name: 'Chanchito',
        sex: 'm',
        description:
          'Chanchito es un gatito 2 meses y medio de edad muy cariñoso y un poco travieso. Se acurrucará en tus piernas y ronroneará hasta que lo acaricies.',
        category: 'Gato',
        status: 'Disponible',
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677710473/images/adoptable/gray-kitten-1_yhgsny.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677710473/images/adoptable/gray-kitten-2_ecdwpc.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677710473/images/adoptable/gray-kitten-3_kadpkh.jpg',
            },
          ],
        },
      },
    }),
  );

  adoptables.push(
    await prisma.adoptable.create({
      data: {
        name: 'Ruby',
        sex: 'f',
        description:
          'Ruby es una Border Collie de 1 año, muy enérgica. Ideal para una familia activa que disfrute de paseos y juegos al aire libre. Te pedirá que le lances la pelota una y otra vez. Es muy inteligente, y por supuesto, muy cariñosa.',
        category: 'Perro',
        status: 'Disponible',
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870725/images/adoptable/collie-1_xoosad.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870725/images/adoptable/collie-2_pfcyst.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870725/images/adoptable/collie-3_msehkn.jpg',
            },
          ],
        },
      },
    }),
  );

  adoptables.push(
    await prisma.adoptable.create({
      data: {
        name: 'Píxel',
        sex: 'f',
        description:
          'Píxel es una compañera ideal para actividades al aire libre, como caminatas, carreras e incluso natación. Además, es muy cariñosa y le encanta pasar tiempo con su familia humana, y siempre está dispuesta a hacer nuevos amigos, pues se lleva bien con todos los perros y gatos que conoce.',
        category: 'Perro',
        status: 'Disponible',
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870719/images/adoptable/labrador-1_e5umou.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870719/images/adoptable/labrador-2_nmpky8.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870719/images/adoptable/labrador-3_brsh2a.jpg',
            },
          ],
        },
      },
    }),
  );

  return adoptables;
}
