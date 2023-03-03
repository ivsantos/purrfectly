import type { Image, Product } from '@prisma/client';
import type { ActionFunction } from '@remix-run/node';
import EmphasizeText from '~/components/EmphasizeText';
import Groceries from '~/components/Groceries';
import Productlist from '~/components/Productlist';
import VideoCarousel from '~/components/VideoCarousel';
import { addToCart } from '~/models/cart.server';
import { getProducts } from '~/models/product.server';
import { getVideos } from '~/models/video.server';
import { getUserId } from '~/session.server';
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

  const newArrivals = videos.filter(
    (video) => video.category === 'new-arrivals',
  );

  return typedjson({ featuredVideos, bestSellers, newArrivals, products });
}

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request);
  const formData = await request.formData();
  const action = formData.get('action');

  if (action === 'addToCart' && userId) {
    const productId = formData.get('productId');
    await addToCart(userId, String(productId));
  } else {
    throw new Response('Bad Request', { status: 400 });
  }

  return typedjson({ success: true });
};

export default function Catalog() {
  const { featuredVideos, bestSellers, newArrivals, products } =
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
              a partir de la{' '}
              <span className="relative font-bold">
                <EmphasizeText /> experiencia de otras
              </span>
            </p>
          </div>
          <Groceries />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <VideoCarousel videos={featuredVideos} title="Destacados" />
        <VideoCarousel videos={bestSellers} title="Más vendidos" />
        <VideoCarousel videos={newArrivals} title="Recién llegados" />
        <Productlist products={products} />
      </div>
    </>
  );
}
