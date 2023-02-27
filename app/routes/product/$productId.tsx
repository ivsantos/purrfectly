import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import type { LoaderArgs } from '@remix-run/node';
import { Link } from '@remix-run/react';
import ImageGallery from '~/components/ImageGallery';
import Rating from '~/components/Rating';
import currencyFormatter from '~/lib/currencyFormatter';
import { getProduct } from '~/models/product.server';
import { redirect, typedjson, useTypedLoaderData } from 'remix-typedjson';

export async function loader({ params }: LoaderArgs) {
  const productId = params.productId || '';
  const product = await getProduct({ id: productId });

  if (!product) {
    return redirect('/404');
  }

  return typedjson({ product });
}

export default function ProductDetailsPage() {
  const { product } = useTypedLoaderData<typeof loader>();
  const { name, description, images, price, rating, category } = product;

  return (
    <div className="bg-white">
      <Link to="/catalog" className="mt-8 ml-8 inline-block">
        <p className="flex items-center text-sm font-medium text-primary">
          <ChevronLeftIcon className="mr-2 h-5 w-5" />
          <span>Volver al catálogo</span>
        </p>
      </Link>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-4xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-28">
          <ImageGallery images={images} name={name} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {name}
            </h1>
            <div className="mt-3">
              <h2 className="sr-only">Información del producto</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {currencyFormatter(price)}
              </p>
            </div>
            <Rating rating={rating} />
            <p className="inline-block rounded-lg bg-quinary p-2 text-white">
              {category}
            </p>
            <div className="mt-6">
              <h3 className="sr-only">Descripción</h3>
              <p className="space-y-6 text-base text-gray-700">{description}</p>
            </div>
            <form className="mt-6">
              <div className="sm:flex-col1 mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primary py-3 px-8 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Añadir al carrito
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
