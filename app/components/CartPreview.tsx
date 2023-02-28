import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTypedLoaderData } from 'remix-typedjson';

import Cart from './Cart';

type LoaderData = {
  cartItemsCount: number;
};

export default function CartPreview() {
  const { cartItemsCount } = useTypedLoaderData<LoaderData>();
  const [open, setOpen] = useState(false);
  const count = useRef(cartItemsCount);

  const handleToggleCart = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  useEffect(() => {
    if (cartItemsCount !== count.current) {
      count.current = cartItemsCount;
      handleToggleCart();
    }
  }, [cartItemsCount, handleToggleCart]);

  return (
    <>
      <div className="ml-4 flow-root lg:ml-6">
        <button
          onClick={handleToggleCart}
          className="group -m-2 flex items-center p-2"
        >
          <ShoppingBagIcon
            className="h-6 w-6 flex-shrink-0 text-gray-700 group-hover:text-gray-800"
            aria-hidden="true"
          />
          <span className="ml-1 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            {cartItemsCount}
          </span>
          <span className="sr-only">artículos en la bolsa, ver bolsa</span>
        </button>
      </div>
      <Cart open={open} toggle={handleToggleCart} />
    </>
  );
}
