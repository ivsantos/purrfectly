import { Form, Link } from '@remix-run/react';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import currencyFormatter from '~/lib/currencyFormatter';
import { useCart } from '~/utils';

export default function CheckoutForm() {
  const { cart, cartTotals } = useCart();
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe or elements not loaded');
      return;
    }

    await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
    });
  };

  return (
    <>
      <h1 className="mb-4 flex justify-center text-3xl font-bold">
        Finaliza tu compra
      </h1>
      <ul className="mb-8 rounded-md border-2 border-gray-200 p-4">
        <p className="mb-4 text-lg font-bold">Artículos en tu cesta</p>
        {cart?.cartItems.map((item) => (
          <li key={item.id} className="flex pb-4">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={item.product.images[0].url}
                alt={item.product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  <Link to={`/product/${item.product.id}`}>
                    {item.product.name}
                  </Link>
                </h3>
              </div>
              <p>{currencyFormatter(item.product.price)}</p>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Cantidad: {item.quantity}</p>
              </div>
            </div>
          </li>
        ))}
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>{currencyFormatter(cartTotals!)}</p>
        </div>
      </ul>
      <div className="mb-4 flex gap-2">
        <p className="rounded-md bg-primary text-center text-white">
          Entorno de prueba de pagos
        </p>
        <p className="rounded-md bg-primary text-center text-white">
          Tarjeta de prueba: 4242424242424242
        </p>
        <p className="rounded-md bg-primary text-center text-white">
          CVV: Cualquier número de 3 dígitos
        </p>
      </div>
      <Form method="post" onSubmit={handleChange}>
        <PaymentElement />
        <button
          type="submit"
          className="mt-6 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primary py-3 px-8 text-base font-medium text-white hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        >
          Pagar ahora
        </button>
      </Form>
    </>
  );
}
