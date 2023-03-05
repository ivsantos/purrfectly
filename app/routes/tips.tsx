/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MetaFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import CatJar from '~/components/CatJar';
import EmphasizeText from '~/components/EmphasizeText';
import * as post1 from '~/routes/posts/post1.mdx';
import * as post2 from '~/routes/posts/post2.mdx';
import * as post3 from '~/routes/posts/post3.mdx';
import { typedjson } from 'remix-typedjson';

export const meta: MetaFunction = () => {
  return {
    title: 'Consejos y cuidados | Purrfectly',
  };
};

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes.meta,
  };
}

export async function loader() {
  return typedjson([
    postFromModule(post1),
    postFromModule(post2),
    postFromModule(post3),
  ]);
}

export default function Tips() {
  const posts = useLoaderData<typeof loader>();

  return (
    <>
      <div className="mb-10 h-96">
        <div className="relative mx-auto h-full max-w-6xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="font mb-4 text-4xl font-bold tracking-tight text-gray-900">
              Consejos y cuidados
            </h1>
            <p className="max-w-sm">
              Consulta en este blog los consejos de los expertos para el cuidado
              de tu mascota: aprende cómo mantenerla{' '}
              <span className="relative font-bold">
                <EmphasizeText /> saludable y feliz
              </span>
            </p>
          </div>
          <CatJar />
        </div>
      </div>
      <div className="mb-10 flex justify-center">
        <ul className="grid w-5/6 grid-cols-card gap-8">
          {posts.map((post: any) => (
            <Link
              key={`posts/${post.slug}`}
              to={`/posts/${post.slug}`}
              className="rounded-md border-2 border-gray-300 shadow-md transition-transform duration-300 hover:scale-105 hover:border-gray-600 hover:bg-gray-100"
            >
              <li className="h-24 p-4 text-center line-clamp-3">
                {post.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
