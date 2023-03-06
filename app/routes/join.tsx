import type { ActionArgs, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, Link, useActionData, useSearchParams } from '@remix-run/react';
import { createUser, getUserByEmail } from '~/models/user.server';
import { checkIfGuest, createUserSession, getUserId } from '~/session.server';
import { safeRedirect, validateEmail } from '~/utils';
import * as React from 'react';

export const meta: MetaFunction = () => {
  return {
    title: 'Regístrate | Purrfectly',
  };
};

export async function loader({ request }: LoaderArgs) {
  const response = await Promise.allSettled([
    getUserId(request),
    checkIfGuest(request),
  ]);
  const userId = response[0].status === 'fulfilled' ? response[0].value : null;
  const isGuest = response[1].status === 'fulfilled' ? response[1].value : null;
  if (userId && !isGuest) return redirect('/');
  return json({});
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const redirectTo = safeRedirect(formData.get('redirectTo'), '/');

  if (!validateEmail(email)) {
    return json(
      { errors: { email: 'El e-mail no es válido', password: null } },
      { status: 400 },
    );
  }

  if (typeof password !== 'string' || password.length === 0) {
    return json(
      { errors: { email: null, password: 'La contraseña es obligatoria' } },
      { status: 400 },
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { email: null, password: 'La contraseña es demasiado corta' } },
      { status: 400 },
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          email: 'Ya exiaste un usuario con este e-mail',
          password: null,
        },
      },
      { status: 400 },
    );
  }

  const user = await createUser(email, password);

  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo,
  });
}

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') ?? undefined;
  const actionData = useActionData<typeof action>();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="mt-10 flex min-h-[calc(100vh-110px)] flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8">
        <Form method="post" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <div className="mt-1">
              <input
                ref={emailRef}
                id="email"
                required
                autoFocus={true}
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="email-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.email && (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.email}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <div className="mt-1">
              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.password && (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.password}
                </div>
              )}
            </div>
          </div>

          <input type="hidden" name="redirectTo" value={redirectTo} />
          <button
            type="submit"
            className="w-full rounded bg-primary  py-2 px-4 text-white"
          >
            Crear cuenta
          </button>
          <div className="flex items-center justify-center">
            <div className="text-center text-sm text-gray-500">
              Ya estás registrado?{' '}
              <Link
                className="text-octonary underline"
                to={{
                  pathname: '/login',
                  search: searchParams.toString(),
                }}
              >
                Inicia sesión
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
