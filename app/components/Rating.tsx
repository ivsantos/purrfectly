import { StarIcon } from '@heroicons/react/20/solid';

interface RatingProps {
  rating: number;
}

export default function Rating({ rating }: RatingProps) {
  return (
    <div className="my-3">
      <h3 className="sr-only">Reseñas</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((num, idx) => (
            <StarIcon
              key={`${rating}-${idx}`}
              className={`${
                rating > num ? 'text-highlight' : 'text-gray-300'
              } h-5 w-5 flex-shrink-0`}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{rating} de 5 estrellas</p>
      </div>
    </div>
  );
}
