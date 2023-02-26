import Groceries from '~/components/Groceries';
import VideoCarousel from '~/components/VideoCarousel';
import { getVideos } from '~/models/video.server';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';

export async function loader() {
  const videos = await getVideos();
  const featuredVideos = videos.filter(
    (video) => video.category === 'featured',
  );
  const bestSellers = videos.filter(
    (video) => video.category === 'best-sellers',
  );
  return typedjson({ featuredVideos, bestSellers });
}

export default function Catalog() {
  const { featuredVideos, bestSellers } = useTypedLoaderData<typeof loader>();

  return (
    <>
      <div className="h-96">
        <div className="relative mx-auto h-full max-w-7xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="font mb-4 text-4xl font-bold tracking-tight text-gray-900">
              Nuestro catálogo
            </h1>
            <p>Descubre lo que tu mascota necesita</p>
          </div>
          <Groceries />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <VideoCarousel videos={featuredVideos} title="Destacados" />
        <VideoCarousel videos={bestSellers} title="Más vendidos" />
      </div>
    </>
  );
}
