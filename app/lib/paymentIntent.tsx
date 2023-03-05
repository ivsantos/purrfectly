import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
  typescript: true,
});

export async function createPaymentIntent() {
  const params: Stripe.PaymentIntentCreateParams = {
    amount: 2000,
    currency: 'eur',
    automatic_payment_methods: {
      enabled: true,
    },
  };
  return await stripe.paymentIntents.create(params);
}

export async function retrievePaymentIntent(id: string) {
  return await stripe.paymentIntents.retrieve(id);
}
