import { Link } from '@remix-run/react';

export default function Logo() {
  return (
    <div className="ml-4 lg:ml-0">
      <Link to=".">
        <span>Purrfectly</span>
      </Link>
    </div>
  );
}
