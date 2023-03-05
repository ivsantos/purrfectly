import { type LoaderArgs, redirect } from '@remix-run/node';
import { Link } from '@remix-run/react';
import ConfirmedPayment from '~/components/ConfirmedPayment';
import EmphasizeText from '~/components/EmphasizeText';
import { retrievePaymentIntent } from '~/lib/paymentIntent';
import { typedjson } from 'remix-typedjson';

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const paymentIntentId = url.searchParams.get('payment_intent');
  if (!paymentIntentId) {
    return redirect('/');
  }
  const paymentIntent = await retrievePaymentIntent(paymentIntentId);
  if (paymentIntent.status !== 'succeeded') {
    return redirect('/');
  }
  return typedjson({ success: true });
}

export default function Success() {
  return (
    <div className="mx-auto mb-8 grid max-w-3xl place-items-center text-center">
      <ConfirmedPayment />
      <h1 className="relative mb-4 text-2xl font-bold">
        ¡Genial!
        <EmphasizeText />
      </h1>
      <div className="flex flex-col gap-4">
        <p>
          Tu pedido se ha realizado correctamente. En breve recibirás un correo
          electrónico con los detalles de tu pedido.
        </p>
        <p>
          Si tienes alguna duda, puedes{' '}
          <Link to="/contact" className="text-primary">
            contactar con nosotros.
          </Link>
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <Link to="/" className="text-primary">
            Volver a la página principal
          </Link>
          <span className="h-6 w-px bg-gray-400" aria-hidden="true"></span>
          <Link to="/catalog" className="text-primary">
            Ver todos los productos
          </Link>
        </div>
      </div>
    </div>
  );
}
