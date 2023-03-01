import { Link } from '@remix-run/react';

import Card from './Card';

export default function WhatWeDo() {
  return (
    <Card title="Qué hacemos">
      <div className="mx-8 grid grid-cols-card gap-4 pb-10">
        <Link
          to="/catalog"
          className="flex flex-col gap-4 rounded-2xl bg-white text-center transition-colors duration-200 hover:bg-gradient-to-b hover:from-red-200 hover:to-red-600 hover:text-white"
        >
          <img
            src="https://res.cloudinary.com/dfp8qzzku/image/upload/v1677692569/images/shopping-basket-logo_nepv2p.png"
            alt="Una cesta de la compra"
            loading="lazy"
            className="mx-auto mt-4 w-2/5"
          />
          <h3 className="font-bold">Nuestro catálogo</h3>
          <p className="p-4">
            Descubre nuestro catálogo de productos para mascotas: desde comida
            hasta juguetes, tenemos todo lo que necesitas para mantener feliz a
            tu compañero peludo. ¡Haz clic aquí para empezar a explorar!
          </p>
        </Link>
        <Link
          to="/adopt"
          className="flex flex-col gap-4 rounded-2xl bg-white text-center transition-colors duration-200 hover:bg-gradient-to-b hover:from-blue-700 hover:via-blue-800 hover:to-gray-900 hover:text-white"
        >
          <img
            src="https://res.cloudinary.com/dfp8qzzku/image/upload/v1677691991/images/adoptable-logo_hs2vfq.png"
            alt="Una patita de un animal"
            loading="lazy"
            className="mx-auto mt-4 w-2/5"
          />
          <h3 className="font-bold">Peludos en adopción</h3>
          <p className="p-4">
            ¿Buscas darle un hogar amoroso a una mascota necesitada? ¡Mira
            nuestra sección de mascotas adoptables! Tenemos una variedad de
            perros y gatos que están buscando su hogar para siempre.
          </p>
        </Link>
        <Link
          to="/tips"
          className="flex flex-col gap-4 rounded-2xl bg-white text-center transition-colors duration-200 hover:bg-gradient-to-b hover:from-purple-200 hover:via-purple-400 hover:to-purple-800 hover:text-white"
        >
          <img
            src="https://res.cloudinary.com/dfp8qzzku/image/upload/v1677692839/images/tips-care-logo_zoysnb.png"
            alt="Un humano y un gato abrazados"
            loading="lazy"
            className="mx-auto mt-4 w-2/5"
          />
          <h3 className="font-bold">Consejos y cuidados</h3>
          <p className="p-4">
            ¿Quieres asegurarte de que tu mascota esté sana y feliz? Echa un
            vistazo a nuestra sección de consejos y cuidados de mascotas, donde
            encontrarás información útil sobre nutrición, ejercicios, cuidado
            dental y más.
          </p>
        </Link>
      </div>
    </Card>
  );
}
