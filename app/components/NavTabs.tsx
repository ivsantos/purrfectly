import { NavLink } from '@remix-run/react';

const navigation = {
  pages: [
    {
      name: 'Inicio',
      href: '/',
    },
    {
      name: 'Catálogo',
      href: '/catalog',
    },
    {
      name: 'En adopción',
      href: '/adoptable',
    },
    {
      name: 'Consejos',
      href: '/tips',
    },
  ],
};

export default function NavTabs() {
  return (
    <div className="h-full items-center">
      <ul className="flex h-full space-x-8 px-4">
        {navigation.pages.map((category) => (
          <li key={category.name}>
            <NavLink
              to={category.href}
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-900'
                } flex h-full items-center whitespace-nowrap border-b-2 py-4 px-1 text-sm`
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
