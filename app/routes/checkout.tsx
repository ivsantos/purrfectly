import { Outlet } from '@remix-run/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createPaymentIntent } from '~/lib/paymentIntent';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';

const stripePromise = loadStripe(
  'pk_test_51MiG1YIkUYQ8K7mNLTjobb95rOJV2rn1BZoDc0i3KUWbCgYaxDpMeMcc1AbNDY6WqED8g9lO1qo714Xp6qCP6mb400l2rZg5YO',
);

export async function loader() {
  const paymentIntent = await createPaymentIntent();
  return typedjson({ paymentIntent });
}

export default function Checkout() {
  const { paymentIntent } = useTypedLoaderData<typeof loader>();

  // Passing the client secret obtained from the server
  const options = { clientSecret: paymentIntent.client_secret || '' };

  return (
    <div className="mx-auto my-8 w-[768px]">
      <Elements stripe={stripePromise} options={options}>
        <Outlet />
      </Elements>
    </div>
  );
}
