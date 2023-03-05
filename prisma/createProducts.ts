import type { PrismaClient } from '@prisma/client';

export async function createProducts(prisma: PrismaClient) {
  const products = [];

  products.push(
    await prisma.product.create({
      data: {
        name: 'Plumero de colores',
        description:
          'Este juguete para gatos cuenta con una variedad de plumas salvajes y divertidas que despiertan el instinto depredador de tu felino. Además, las plumas son reales y emiten un sonido de papel crepitante al ser tocadas, lo que lo hace aún más atractivo para tu mascota.',
        price: 1.99,
        category: 'Cañas y plumeros',
        rating: 4,
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347477/images/plumero_2_rwnc7d.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347477/images/plumero_1_xfggqc.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347477/images/plumero_3_klilf2.webp',
            },
          ],
        },
      },
    }),
  );

  products.push(
    await prisma.product.create({
      data: {
        name: 'Rascador esquina',
        description:
          'Este práctico rascador para gatos ha sido diseñado para adaptarse perfectamente a la esquina de cualquier habitación, permitiendo a tu mascota afilar sus uñas de manera segura y sin dañar tus muebles. Con una superficie de sisal resistente y duradera, este rascador ofrece a tu felino un lugar específico donde satisfacer su necesidad natural de rascar, mientras que su tamaño compacto lo hace ideal para hogares con espacio limitado. Además, su color neutro lo hace fácil de integrar en cualquier decoración.',
        price: 1.99,
        category: 'Rascadores',
        rating: 4,
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347478/images/rascador_esquinero_1_zryxsh.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347478/images/rascador_esquinero_2_uz4xyt.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347478/images/rascador_esquinero_3_ssodnn.webp',
            },
          ],
        },
      },
    }),
  );

  products.push(
    await prisma.product.create({
      data: {
        name: 'Peluche de patito',
        description:
          'Este adorable peluche de patito es perfecto para que tu mascota juegue y se divierta. Fabricado con materiales suaves y resistentes, es seguro para que lo muerdan, lo abracen o lo acurruquen, ofreciéndole horas de entretenimiento y diversión.',
        price: 1.99,
        category: 'Peluches',
        rating: 4,
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347477/images/peluche_1_uvt240.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347477/images/peluche_2_fzvxj4.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347477/images/peluche_3_v8cmb5.webp',
            },
          ],
        },
      },
    }),
  );

  products.push(
    await prisma.product.create({
      data: {
        name: 'Pez eléctrico',
        description:
          'Este juguete para gatos emite sonidos y luces que imitan a un pez eléctrico, despertando el instinto cazador de tu mascota. Con un diseño realista y una textura suave, es seguro para que tu gato lo muerda y lo agarre, lo que lo convierte en el juguete perfecto para satisfacer sus necesidades de juego y ejercicio.',
        price: 1.99,
        category: 'Juguetes para gatos',
        rating: 4,
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347477/images/pez_1_t5ssq6.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347477/images/pez_2_bcnerc.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347477/images/pez_3_ljxsza.webp',
            },
          ],
        },
      },
    }),
  );

  products.push(
    await prisma.product.create({
      data: {
        name: 'Juguete interactivo con pelota',
        description:
          'Este divertido juguete interactivo para gatos ofrece una experiencia de juego única y emocionante para tu mascota. Con diferentes niveles y elementos que estimulan su curiosidad y habilidades de caza, este juguete ayuda a mantener a tu gato activo y entretenido, lo que a su vez ayuda a prevenir el aburrimiento y la obesidad.',
        price: 1.99,
        category: 'Juguetes interactivos',
        rating: 4,
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347477/images/interactivo_1_gafeph.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347477/images/interactivo_2_av79la.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347477/images/interactivo_3_pcva07.webp',
            },
          ],
        },
      },
    }),
  );

  products.push(
    await prisma.product.create({
      data: {
        name: 'Caña con ratón',
        description:
          'Esta caña de juguete para gatos cuenta con un ratón de peluche colgado de una cuerda, lo que permite a tu mascota perseguir, saltar y cazar su presa imaginaria. Con una longitud y diseño perfectos para que tanto tú como tu gato puedan jugar juntos, es un juguete ideal para fortalecer el vínculo entre dueño y mascota.',
        price: 1.99,
        category: 'Cañas y plumeros',
        rating: 4,
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677885226/images/raton-1_fxi3vh.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677885226/images/raton-2_s6luud.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677885226/images/raton-3_zysvrx.jpg',
            },
          ],
        },
      },
    }),
  );

  products.push(
    await prisma.product.create({
      data: {
        name: 'Rascador en poste',
        description:
          'Este rascador de poste para gatos ofrece un lugar seguro y apropiado para que tu mascota afilar sus uñas y satisfacer su necesidad natural de rascar. Con una altura perfecta para que tu gato estire todo su cuerpo, este rascador ayuda a mantener sus garras saludables y evita que dañe tus muebles. Además, su superficie de sisal resistente y duradera lo hace perfecto para que tu gato lo use durante años.',
        price: 1.99,
        category: 'Rascadores',
        rating: 4,
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347478/images/rascador_poste_1_tegnqv.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347478/images/rascador_poste_2_g7dv41.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677347478/images/rascador_poste_3_dmylj5.webp',
            },
          ],
        },
      },
    }),
  );

  products.push(
    await prisma.product.create({
      data: {
        name: 'Lanzador de pelota',
        description:
          'Este lanzador manual es perfecto para aquellos días en que quieres pasar tiempo con tu perro y proporcionarle una sesión de ejercicio divertida. Simplemente coloca la pelota en el lanzador y lánzala con facilidad a una distancia adecuada para tu perro. Tu perro correrá emocionado detrás de la pelota y la recogerá para que puedas volver a lanzarla. El lanzador cuenta con un diseño ergonómico y es fácil de usar, lo que te permite disfrutar del tiempo de juego con tu perro sin cansarte. Además, el lanzador es duradero y está hecho de materiales de alta calidad.',
        price: 1.99,
        category: 'Juguetes para perros',
        rating: 4,
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870779/images/lanzador-1_x2cokl.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870779/images/lanzador-2_rf8wrk.jpg',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870779/images/lanzador-3_tdbbwj.jpg',
            },
          ],
        },
      },
    }),
  );

  products.push(
    await prisma.product.create({
      data: {
        name: 'Peluche ardilla',
        description:
          'El peluche tiene un diseño realista y está hecha con materiales suaves y cómodos, lo que lo hace perfecta para que tu perro lo abrace y lo muerda. Además, el peluche tiene un chirriador en su interior que añade un elemento de diversión y emoción para tu perro mientras juega. El peluche es de tamaño perfecto para perros pequeños y medianos y es fácil de limpiar.',
        price: 1.99,
        category: 'Peluches',
        rating: 4,
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870779/images/peluche-perro-1_lirv6e.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870779/images/peluche-perro-2_vui63n.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870779/images/peluche-perro-3_zvdsbi.webp',
            },
          ],
        },
      },
    }),
  );

  products.push(
    await prisma.product.create({
      data: {
        name: 'Cuerda perro',
        description:
          'La cuerda está hecha de materiales de alta calidad y es resistente a los mordiscos de tu perro, lo que garantiza su durabilidad. Además, la cuerda ayuda a limpiar los dientes y masajear las encías de tu perro mientras mastica, lo que lo convierte en un juguete divertido y beneficioso para su salud dental.',
        price: 1.99,
        category: 'Juguetes para perros',
        rating: 4,
        images: {
          create: [
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870779/images/cuerda-1_kdalzr.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870779/images/cuerda-2_xjjeel.webp',
            },
            {
              url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/w_360,ar_1:1,c_fill/v1677870779/images/cuerda-3_p4cl1o.webp',
            },
          ],
        },
      },
    }),
  );

  return products;
}
