import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';

export default function Search() {
  return (
    <div className="flex lg:ml-6">
      <Link to="#" className="p-2 text-gray-700 hover:text-gray-800">
        <span className="sr-only">Buscar</span>
        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
      </Link>
    </div>
  );
}
