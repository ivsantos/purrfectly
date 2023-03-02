import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';
import type { LoaderArgs } from '@remix-run/server-runtime';
import ImageGallery from '~/components/ImageGallery';
import { getAdoptable } from '~/models/adoptable.server';
import { redirect, typedjson, useTypedLoaderData } from 'remix-typedjson';

export async function loader({ params }: LoaderArgs) {
  const adoptId = params.adoptId || '';
  const adoptable = await getAdoptable({ id: adoptId });

  if (!adoptable) {
    return redirect('/404');
  }

  return typedjson({ adoptable });
}

interface Gender {
  Gato: GenderURL;
  Perro: GenderURL;
}
interface GenderURL {
  m: string;
  f: string;
}

const gender: Gender = {
  Gato: {
    m: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677778654/images/male-cat_drwx4v.png',
    f: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677778653/images/female-cat_keurwm.png',
  },
  Perro: {
    m: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677778653/images/male-dog_gzijgy.png',
    f: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677778653/images/female-dog_zfmbo6.png',
  },
};

const badgeStatus = {
  Disponible: 'bg-green-100 text-green-800',
  Adoptado: 'bg-yellow-100 text-yellow-800',
  Reservado: 'bg-red-100 text-red-800',
} satisfies Record<StatusKeys, string>;

export default function AdoptDetailsPage() {
  const { adoptable } = useTypedLoaderData<typeof loader>();
  const { name, description, images, category, sex, status } = adoptable;
  const genderType = sex === 'm' ? 'Macho' : 'Hembra';

  return (
    <>
      <Link to="/adoptable" className="mt-8 ml-8 inline-block">
        <p className="flex items-center text-sm font-medium text-primary">
          <ChevronLeftIcon className="mr-2 h-5 w-5" />
          <span>Volver a la lista de adoptables</span>
        </p>
      </Link>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-4xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-28">
          <ImageGallery images={images} name={name} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              ✨ {name} ✨
            </h1>
            <div className="mt-3">
              <h2 className="sr-only">Información sobre el adoptable</h2>
              <span
                className={`mb-4 inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium ${
                  badgeStatus[status as StatusKeys]
                }`}
              >
                {status}
              </span>
              <div className="flex items-center">
                <p className="inline-block rounded-lg bg-quinary p-2 text-white">
                  {category}
                </p>
                <div className="flex w-full items-center">
                  <img
                    className="inline-block w-[20%] rounded-lg p-2"
                    title={genderType}
                    alt="Sexo del adoptable"
                    src={
                      gender[category as keyof Gender][sex as keyof GenderURL]
                    }
                  />
                  <span className="text-sm">{genderType}</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Descripción</h3>
              <p className="space-y-6 text-base text-gray-700">{description}</p>
            </div>
            <Link
              to="/contact"
              className="mt-6 flex max-w-xs items-center justify-center rounded-md border border-transparent bg-primary py-3 px-8 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Obtener más información
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
