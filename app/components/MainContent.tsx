import { Link } from '@remix-run/react';

import HighlightText from './HighlightText';

export default function MainContent() {
  return (
    <section className="mx-auto max-w-4xl rounded-2xl bg-secondary">
      <h2 className="relative isolate p-10 text-center text-3xl font-bold">
        <HighlightText /> Qué hacemos
      </h2>
      <div className="mx-8 grid grid-cols-what-we-do gap-4 pb-10">
        <Link
          to="#"
          className="flex flex-col gap-4 rounded-2xl bg-white text-center transition-colors duration-200 hover:bg-gradient-to-b hover:from-red-200 hover:to-red-600 hover:text-white"
        >
          <p>Imagen</p>
          <h3 className="font-bold">Nuestro catálogo</h3>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint
            nostrum ab.
          </p>
        </Link>
        <Link
          to="#"
          className="flex flex-col gap-4 rounded-2xl bg-white text-center transition-colors duration-200 hover:bg-gradient-to-b hover:from-blue-700 hover:via-blue-800 hover:to-gray-900 hover:text-white"
        >
          <p>Imagen</p>
          <h3 className="font-bold">Peludos en adopción</h3>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint
            nostrum ab.
          </p>
        </Link>
        <Link
          to="#"
          className="flex flex-col gap-4 rounded-2xl bg-white text-center transition-colors duration-200 hover:bg-gradient-to-b hover:from-purple-200 hover:via-purple-400 hover:to-purple-800 hover:text-white"
        >
          <p>Imagen</p>
          <h3 className="font-bold">Consejos y cuidados</h3>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint
            nostrum ab.
          </p>
        </Link>
      </div>
    </section>
  );
}
