import { Link } from '@remix-run/react';

export default function VideoProducts() {
  return (
    <div
      className="vjs-modal-dialog"
      tabIndex={-1}
      aria-describedby="first-demo_component_2140_description"
      aria-hidden="false"
      aria-label="Modal Window"
      role="dialog"
    >
      <p
        className="vjs-modal-dialog-description vjs-control-text"
        id="first-demo_component_2140_description"
      >
        This is a modal window.
      </p>
      <div className="vjs-modal-dialog-content" role="document">
        <div className="cld-spbl-post-play">
          <div className="cld-spbl-post-title bg-black text-white">
            Productos vistos
          </div>
          <div className="cld-spbl-panel base-color-bg">
            <Link
              className="cld-spbl-item base-color-bg accent-color-text"
              to="/catalog/product/1"
            >
              <span aria-hidden="true" className="vjs-icon-placeholder" />
              <span className="vjs-control-text" aria-live="polite" />
              <span
                className="cld-spbl-overlay text-color-semi-bg base-color-text"
                title="Ir al producto"
              >
                <span className="cld-spbl-overlay-text bg-black text-white">
                  Ir al producto
                </span>
              </span>
              <img
                alt="Sunglasses"
                className="cld-spbl-img cld-vp-responsive"
                src="https://res.cloudinary.com/demo/image/upload/ar_1,c_pad,f_auto,q_auto,w_600/v1/docs/shoppable_sunglasses"
                width={600}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
