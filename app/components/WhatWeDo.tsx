import { Link } from '@remix-run/react';

import Card from './Card';

export default function WhatWeDo() {
  return (
    <Card title="Qué hacemos">
      <div className="mx-8 grid grid-cols-what-we-do gap-4 pb-10">
        <Link
          to="/catalog"
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
          to="/adopt"
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
          to="/tips"
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
    </Card>
  );
}
