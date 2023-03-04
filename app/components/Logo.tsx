import { Link } from '@remix-run/react';

import HeaderLogo from './HeaderLogo';

export default function Logo() {
  return (
    <div className="ml-4 lg:ml-0">
      <Link to=".">
        <HeaderLogo />
      </Link>
    </div>
  );
}
