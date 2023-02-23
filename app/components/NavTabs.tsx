import { Tab } from '@headlessui/react';

const navigation = {
  pages: [
    {
      name: 'Inicio',
      href: '#',
    },
    {
      name: 'Catálogo',
      href: '#',
    },
    {
      name: 'En adopción',
      href: '#',
    },
    {
      name: 'Consejos',
      href: '#',
    },
  ],
};

export default function NavTabs() {
  return (
    <Tab.Group as="div" className="flex h-full items-center">
      <div className="h-full border-b border-gray-200">
        <Tab.List className="flex h-full space-x-8 px-4">
          {navigation.pages.map((category) => (
            <Tab
              as="a"
              href={category.href}
              key={category.name}
              className={({ selected }) =>
                `${
                  selected
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-900'
                } flex h-full flex-1 items-center whitespace-nowrap border-b-2 py-4 px-1 text-sm`
              }
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
}
