import type { Adoptable as AdoptableType, Image } from '@prisma/client';
import { Link } from '@remix-run/react';

interface AdoptableProps {
  adoptable: AdoptableType & { images: Image[] };
}

const gradientStatus = {
  // Green gradient for available adoptables
  Disponible: 'from-green-600 via-green-400 to-green-500',
  // Yellow gradient for adopted adoptables
  Adoptado: 'from-yellow-600 via-yellow-400 to-yellow-500',
  // Red gradient for reserved adoptables
  Reservado: 'from-red-600 via-red-400 to-red-500',
} satisfies Record<StatusKeys, string>;

const borderStatus = {
  Disponible: 'border-green-500',
  Adoptado: 'border-yellow-500',
  Reservado: 'border-red-500',
} satisfies Record<StatusKeys, string>;

export default function Adoptable({ adoptable }: AdoptableProps) {
  const { id, name, status, images } = adoptable;

  return (
    <Link
      to={`/adopt/${id}`}
      title={name}
      className="flex flex-col rounded-lg bg-white shadow-lg"
    >
      <div className="relative rounded-md bg-white shadow-xl">
        <div
          className={`ribbon absolute -top-2 -left-2 h-40 w-40 overflow-hidden before:absolute before:top-0 before:right-0 before:-z-[1] before:border-4 after:absolute after:left-0 after:bottom-0 after:-z-[1] ${
            borderStatus[status as StatusKeys]
          } after:border-4`}
        >
          <div
            className={`absolute -left-14 top-[43px] w-60 -rotate-45 bg-gradient-to-br ${
              gradientStatus[status as StatusKeys]
            } py-2.5 text-center font-bold text-white shadow-md`}
          >
            {status}
          </div>
        </div>
        <div className="flex min-h-full items-center justify-center p-2">
          <div className="flex w-full flex-col">
            <img
              className="max-w-32 m-4 aspect-square max-h-40 rounded-lg object-cover"
              src={images[0].url}
              alt={name}
            />
            <div className="flex h-full flex-col p-2 text-center">
              <h3 className="flex-1 text-lg font-semibold text-gray-700">
                {name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
