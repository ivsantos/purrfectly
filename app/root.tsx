import type {
  ActionFunction,
  LinksFunction,
  LoaderArgs,
  MetaFunction,
} from '@remix-run/node';
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
import { typedjson } from 'remix-typedjson';

import Footer from './components/Footer';
import Header from './components/Header';
import { removeFromCart } from './models/cart.server';
import {
  createUserSession,
  getUser,
  getUserId,
  requireUserId,
} from './session.server';
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
  const userId = await requireUserId(request);
  if (!userId) {
    return createUserSession({
      request,
      userId: 'guest',
      remember: false,
      redirectTo: request.url,
    });
  }
  // const cart = await getShoppingCart(userId);
  let cartItemsCount: number = 0;
  // cartItemsCount = await getCartItemsCount(userId);
  // const cartTotals = await getTotals(userId);
  return json({
    user: await getUser(request),
    // cart,
    cartItemsCount,
    // cartTotals,
    ENV: {
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    },
  });
}

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request);
  const formData = await request.formData();
  const action = formData.get('action');

  if (action === 'delete' && userId) {
    const productId = formData.get('productId');
    await removeFromCart(userId, String(productId));
  } else {
    throw new Response('Bad Request', { status: 400 });
  }

  // Go back where we came from
  const referer = request.headers.get('Referer');
  if (referer) {
    return typedjson({ redirect: referer }, { status: 303 });
  }
  return typedjson({ success: true });
};

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();
  const [onBrowser, setOnBrowser] = useState(false);

  useEffect(() => {
    setOnBrowser(true);
  }, []);

  return (
    <html lang="es" className="h-full bg-background">
      <head>
        <Meta />
        <Links />
        {onBrowser && (
          <link
            rel="stylesheet"
            href="https://unpkg.com/cloudinary-video-player@1.9.5/dist/cld-video-player.min.css"
          />
        )}
      </head>
      <body className="grid min-h-screen grid-rows-content">
        <Header />
        <Outlet />
        <Footer />
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
