import { Link } from '@remix-run/react';
import currencyFormatter from '~/lib/currencyFormatter';
import type { ProductWithImages } from '~/routes/catalog';

interface ProductProps {
  product: ProductWithImages[number];
}

export default function Product({ product }: ProductProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      title={product.name}
      className="flex flex-col rounded-lg bg-white shadow-lg"
    >
      <img
        className="max-w-32 mx-auto aspect-square max-h-40 object-cover"
        src={product.images[0].url}
        alt={product.name}
      />
      <div className="flex h-full flex-col p-4">
        <h3 className="flex-1 text-lg font-semibold text-gray-700">
          {product.name}
        </h3>
        <p className="text-gray-600">{currencyFormatter(product.price)}</p>
      </div>
    </Link>
  );
}
