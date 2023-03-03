import { Form, Link, NavLink } from '@remix-run/react';
import { useOptionalUser } from '~/utils';

import CartPreview from './CartPreview';
import Search from './Search';

export default function NavActions() {
  const user = useOptionalUser();

  return (
    <div className="flex h-full flex-1 items-center justify-end space-x-6">
      {user ? (
        <>
          <Link
            to="/purchases"
            className="text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Mis compras
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
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex h-full items-center border-b-2 text-sm ${
                isActive
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-900'
              }`
            }
          >
            Inicia sesión
          </NavLink>
          <span className="h-6 w-px bg-gray-400" aria-hidden="true" />
          <NavLink
            to="/join"
            className={({ isActive }) =>
              `flex h-full items-center border-b-2 text-sm ${
                isActive
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-900'
              }`
            }
          >
            Regístrate
          </NavLink>
        </>
      )}
      <Search />
      <CartPreview />
    </div>
  );
}
