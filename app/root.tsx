import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import { getUser } from './session.server';
import tailwindStylesheetUrl from './styles/tailwind.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Purrfectly',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
    ENV: {
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    },
  });
}

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();
  const [onBrowser, setOnBrowser] = useState(false);

  useEffect(() => {
    setOnBrowser(true);
  }, []);

  return (
    <html lang="en" className="h-full bg-background">
      <head>
        <Meta />
        <Links />
        {onBrowser && (
          <>
            <link
              rel="stylesheet"
              href="https://unpkg.com/cloudinary-video-player@1.9.5/dist/cld-video-player.min.css"
            />
          </>
        )}
      </head>
      <body className="h-full">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
