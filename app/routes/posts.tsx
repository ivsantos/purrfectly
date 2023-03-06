import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import type { LinksFunction } from '@remix-run/node';
import { Link, Outlet } from '@remix-run/react';
import mdx from '~/styles/mdx.css';
import styles from 'highlight.js/styles/night-owl.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'stylesheet',
      href: mdx,
    },
  ];
};

export default function Posts() {
  return (
    <>
      <p className="flex h-24 items-center text-sm font-medium text-primary">
        <Link to="/tips" className="mt-8 ml-8 flex">
          <ChevronLeftIcon className="mr-2 h-5 w-5" />
          <span>Volver a consejos y cuidados</span>
        </Link>
      </p>
      <div className="mx-auto max-w-lg pb-10">
        <Outlet />
      </div>
    </>
  );
}
