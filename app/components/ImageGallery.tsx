import { Tab } from '@headlessui/react';
import type { Image } from '@prisma/client';

interface ImageGalleryProps {
  images: Image[];
  name: string;
}

export default function ImageGallery({ images, name }: ImageGalleryProps) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <img
              src={image.url}
              alt=""
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
      <div className="mx-auto mb-6 w-full max-w-2xl lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <Tab
              key={image.id}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{name}</span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <img
                      src={image.url}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    className={`${
                      selected ? 'ring-quinary' : 'ring-transparent'
                    } pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2`}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
}
