import { NavLink } from "@remix-run/react";
import { Tab } from "@headlessui/react";

const navigation = {
  pages: [
    {
      name: "Catálogo",
      href: "#",
    },
    {
      name: "En adopción",
      href: "#",
    },
    {
      name: "Consejos",
      href: "#",
    },
  ],
};

export default function NavTabs() {
  return (
    <Tab.Group as="div" className="flex h-full items-center">
      <div className="h-full border-b border-gray-200">
        <Tab.List className="flex h-full space-x-8 px-4">
          {navigation.pages.map((category) => (
            <NavLink to={category.href} key={category.name}>
              <Tab
                className={({ selected }) =>
                  `${
                    selected
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-900"
                  } h-full flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-sm`
                }
              >
                {category.name}
              </Tab>
            </NavLink>
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
}
