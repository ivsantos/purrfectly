import { Form, Link } from '@remix-run/react';
import { useOptionalUser } from '~/utils';

import Cart from './Cart';
import Search from './Search';

export default function NavActions() {
  const user = useOptionalUser();

  return (
    <div className="flex flex-1 items-center justify-end space-x-6">
      {user ? (
        <>
          <Link
            to="/notes"
            className="text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Mis notas
          </Link>
          <span className="h-6 w-px bg-gray-400" aria-hidden="true" />
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="text-sm font-medium text-gray-700 hover:text-gray-800"
            >
              Cerrar sesión
            </button>
          </Form>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Inicia sesión
          </Link>
          <span className="h-6 w-px bg-gray-400" aria-hidden="true" />
          <Link
            to="/join"
            className="text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Regístrate
          </Link>
        </>
      )}
      <Search />
      <Cart />
    </div>
  );
}
