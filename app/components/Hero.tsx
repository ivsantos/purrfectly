import { Link } from '@remix-run/react';

import CatWool from './CatWool';
import CircledText from './CircledText';

export default function Hero() {
  return (
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            La diversión de tu mascota a
            <span className="relative">
              {' '}
              <CircledText />
              un clic
            </span>{' '}
            de distancia
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            No compres a ciegas. Sus juguetes, <strong>en vídeo.</strong>
          </p>
        </div>
        <div>
          <div className="mt-10">
            <Link
              to="#"
              className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
            >
              Descubrir
            </Link>
          </div>
        </div>
        <CatWool />
      </div>
    </div>
  );
}
