import type { ProductWithImages } from '~/routes/catalog';

import Product from './Product';

interface ProductListProps {
  products: ProductWithImages;
}

export default function ProductList({ products }: ProductListProps) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto mb-10 grid max-w-5xl grid-cols-card gap-12">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
