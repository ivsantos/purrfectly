import type { Image, Product } from '@prisma/client';
import Groceries from '~/components/Groceries';
import Productlist from '~/components/Productlist';
import VideoCarousel from '~/components/VideoCarousel';
import { getProducts } from '~/models/product.server';
import { getVideos } from '~/models/video.server';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';

export type ProductWithImages = (Product & {
  images: Image[];
})[];

export async function loader() {
  const response = await Promise.allSettled([getVideos(), getProducts()]);
  const videos = response[0].status === 'fulfilled' ? response[0].value : [];
  const products = response[1].status === 'fulfilled' ? response[1].value : [];

  const featuredVideos = videos.filter(
    (video) => video.category === 'featured',
  );
  const bestSellers = videos.filter(
    (video) => video.category === 'best-sellers',
  );

  return typedjson({ featuredVideos, bestSellers, products });
}

export default function Catalog() {
  const { featuredVideos, bestSellers, products } =
    useTypedLoaderData<typeof loader>();

  return (
    <>
      <div className="h-96">
        <div className="relative mx-auto h-full max-w-7xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="font mb-4 text-4xl font-bold tracking-tight text-gray-900">
              Nuestro catálogo
            </h1>
            <p>Descubre lo que tu mascota necesita</p>
            <p>
              a partir de la <strong>experiencia</strong> de otras
            </p>
          </div>
          <Groceries />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <VideoCarousel videos={featuredVideos} title="Destacados" />
        <VideoCarousel videos={bestSellers} title="Más vendidos" />
        <Productlist products={products} />
      </div>
    </>
  );
}
