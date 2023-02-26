import type { LoaderArgs } from '@remix-run/node';
import { getProduct } from '~/models/product.server';
import { redirect, typedjson, useTypedLoaderData } from 'remix-typedjson';

export async function loader({ params }: LoaderArgs) {
  const productId = params.productId || '';
  const product = await getProduct({ id: productId });

  if (!product) {
    return redirect('/404');
  }

  return typedjson({ product });
}

export default function ProductDetailsPage() {
  const { product } = useTypedLoaderData<typeof loader>();

  console.log(product);

  // TODO: Get tailwind UI component
  return <div>{}</div>;
}
