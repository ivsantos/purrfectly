import { Link } from '@remix-run/react';

interface VideoOverlayProps {
  products: ShoppableProduct[];
}

export default function VideoOverlay({ products }: VideoOverlayProps) {
  return (
    <div
      className="vjs-modal-dialog"
      tabIndex={-1}
      aria-describedby="first-demo_component_2140_description"
      aria-hidden="false"
      aria-label="Modal Window"
      role="dialog"
    >
      <div className="vjs-modal-dialog-content" role="document">
        <div className="cld-spbl-post-play">
          <div className="cld-spbl-panel base-color-bg">
            {products.map((product) => (
              <Link
                key={product.productId}
                className="cld-spbl-item base-color-bg accent-color-text"
                to={product.onClick.args.url}
              >
                <span aria-hidden="true" className="vjs-icon-placeholder" />
                <span className="vjs-control-text" aria-live="polite" />
                <span
                  className="cld-spbl-overlay text-color-semi-bg base-color-text"
                  title={`Ir al producto ${product.productName}`}
                />
                <img
                  alt={product.productName}
                  className="cld-spbl-img cld-vp-responsive"
                  src={`https://res.cloudinary.com/${window.ENV.CLOUDINARY_CLOUD_NAME}/image/upload/w_120,ar_1:1,c_fill/v1677347478/${product.publicId}.webp`}
                  width={600}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
