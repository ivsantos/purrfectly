import type { Adoptable as AdoptableType, Image } from '@prisma/client';
import { Link } from '@remix-run/react';

interface AdoptableProps {
  adoptable: AdoptableType & { images: Image[] };
}

export default function Adoptable({ adoptable }: AdoptableProps) {
  return (
    <Link
      to={`/adopt/${adoptable.id}`}
      title={adoptable.name}
      className="flex flex-col rounded-lg bg-white shadow-lg"
    >
      <div className="relative rounded-md bg-white shadow-xl">
        <div className="ribbon absolute -top-2 -left-2 h-40 w-40 overflow-hidden before:absolute before:top-0 before:right-0 before:-z-[1] before:border-4 before:border-blue-500 after:absolute after:left-0 after:bottom-0 after:-z-[1] after:border-4 after:border-blue-500">
          <div className="absolute -left-14 top-[43px] w-60 -rotate-45 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-500 py-2.5 text-center text-white shadow-md">
            {adoptable.status}
          </div>
        </div>
        <div className="flex min-h-full items-center justify-center p-2">
          <div className="flex w-full flex-col">
            <img
              className="max-w-32 m-4 aspect-square max-h-40 rounded-lg object-cover"
              src={adoptable.images[0].url}
              alt={adoptable.name}
            />
            <div className="flex h-full flex-col p-2 text-center">
              <h3 className="flex-1 text-lg font-semibold text-gray-700">
                {adoptable.name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
