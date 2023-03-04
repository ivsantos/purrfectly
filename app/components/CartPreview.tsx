import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import type {
  CartItem,
  Cart as CartType,
  Image,
  Product,
} from '@prisma/client';
import cartActions from '~/lib/cartActions';
import { useCallback, useEffect, useState } from 'react';
import { useTypedLoaderData } from 'remix-typedjson';

import Cart from './Cart';

export interface RootLoader {
  cartItemsCount: number;
  cartTotals: number;
  cart:
    | (CartType & {
        cartItems: (CartItem & {
          product: Product & {
            images: Image[];
          };
        })[];
      })
    | null;
}

export default function CartPreview() {
  const { cartItemsCount, cart, cartTotals } = useTypedLoaderData<RootLoader>();
  const [open, setOpen] = useState(false);

  const handleToggleCart = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  useEffect(() => {
    window.addEventListener(cartActions.addToCart, handleToggleCart);

    return () => {
      window.removeEventListener(cartActions.addToCart, handleToggleCart);
    };
  }, [handleToggleCart]);

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
      <Cart
        cart={cart}
        cartTotals={cartTotals}
        open={open}
        toggle={handleToggleCart}
      />
    </>
  );
}
