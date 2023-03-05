import { Link } from '@remix-run/react';

interface ItemOverlayProps {
  shoppable: ShoppableProductList;
}

export default function ItemOverlay({ shoppable }: ItemOverlayProps) {
  const { products } = shoppable;
  const shopProducts = products.filter((product) => !product.isAdoptable);
  const adoptables = products.filter((product) => product.isAdoptable);

  return (
    <>
      <p className="pt-1 text-center">Productos</p>
      {shopProducts.map((product) => (
        <Link
          key={product.publicId}
          to={product.onClick.args.url}
          className="cld-spbl-item custom base-color-bg accent-color-text active"
        >
          <span className="cld-spbl-overlay text-color-semi-bg base-color-text">
            <span className="cld-spbl-overlay-text base-color-text">
              {product.productName}
            </span>
          </span>
          <img
            className="cld-spbl-img"
            alt={product.productName}
            src={`https://res.cloudinary.com/${window.ENV.CLOUDINARY_CLOUD_NAME}/image/upload/w_60,ar_1:1,c_fill/v1677347478/${product.publicId}`}
          />
        </Link>
      ))}
      {adoptables.length > 0 && (
        <p className="border-t-2 border-primary pt-1 text-center">Adoptables</p>
      )}
      {adoptables.length > 0 &&
        adoptables.map((adoptable) => (
          <Link
            key={adoptable.publicId}
            to={adoptable.onClick.args.url}
            className="cld-spbl-item custom base-color-bg accent-color-text active"
          >
            <span className="cld-spbl-overlay text-color-semi-bg base-color-text">
              <span className="cld-spbl-overlay-text base-color-text">
                {adoptable.productName}
              </span>
            </span>
            <img
              className="cld-spbl-img"
              alt={adoptable.productName}
              src={`https://res.cloudinary.com/${window.ENV.CLOUDINARY_CLOUD_NAME}/image/upload/w_60,ar_1:1,c_fill/v1677347478/${adoptable.publicId}`}
            />
          </Link>
        ))}
    </>
  );
}
