import { Form, Link } from '@remix-run/react';
import currencyFormatter from '~/lib/currencyFormatter';
import type { ProductWithImages } from '~/routes/catalog';

interface ProductProps {
  product: ProductWithImages[number];
}

export default function Product({ product }: ProductProps) {
  const handleAddToCart = () => {
    window.dispatchEvent(new CustomEvent('addToCart'));
  };

  return (
    <div className="flex flex-col bg-white shadow-lg">
      <Link
        to={`/product/${product.id}`}
        title={product.name}
        className="flex flex-col"
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
          <p className="mb-4 text-gray-600">
            {currencyFormatter(product.price)}
          </p>
        </div>
      </Link>
      <Form method="post" className="pb-4">
        <input type="hidden" name="productId" value={product.id} />
        <button
          onClick={handleAddToCart}
          type="submit"
          name="action"
          value="addToCart"
          className="mx-auto flex w-[85%] flex-1 items-center justify-center rounded-md border border-transparent bg-primary py-3 px-8 text-base font-medium text-white hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Añadir al carrito
        </button>
      </Form>
    </div>
  );
}
