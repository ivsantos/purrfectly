import AdoptableList from '~/components/AdoptableList';
import FamilyAdopt from '~/components/FamilyAdopt';
import { getAdoptables } from '~/models/adoptable.server';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';

export async function loader() {
  const adoptables = await getAdoptables();

  return typedjson({ adoptables });
}

export default function Adoptable() {
  const { adoptables } = useTypedLoaderData<typeof loader>();

  return (
    <>
      <div className="h-96">
        <div className="relative mx-auto h-full max-w-7xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="font mb-4 text-4xl font-bold tracking-tight text-gray-900">
              En adopción
            </h1>
            <p>Dale un hogar y cambia su vida. Recuerda: no compres, adopta.</p>
          </div>
          <FamilyAdopt />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <AdoptableList adoptables={adoptables} />
      </div>
    </>
  );
}
