import { prisma } from '~/db.server';

import { getProduct } from './product.server';

export type { Cart, CartItem, Product } from '@prisma/client';

export async function getShoppingCart(userId: string) {
  console.log({ prisma });
  console.log({ userId });
  return prisma.cart.findFirst({
    where: { id: userId },
    include: {
      cartItems: {
        include: {
          product: {
            include: {
              images: true,
            },
          },
        },
      },
    },
  });
}

export async function getCartItemsCount(userId: string) {
  const cart = await getShoppingCart(userId);
  if (!cart) {
    return 0;
  }
  return cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);
}

export async function getTotals(userId: string) {
  const cart = await getShoppingCart(userId);
  if (!cart) {
    return 0;
  }
  const total = cart.cartItems.reduce(
    (acc, item) => acc + Number(item.totalPrice),
    0,
  );
  return Number(total.toFixed(2));
}

export async function addShoppingCart(userId: string) {
  return prisma.cart.create({
    data: {
      id: userId,
    },
  });
}

export async function addToCart(
  userId: string,
  productId: string,
  quantity: number = 1,
) {
  let [cart, product] = await Promise.all([
    getShoppingCart(userId),
    getProduct({ id: productId }),
  ]);
  if (!product) {
    throw new Response('Product not found', { status: 404 });
  }
  if (!cart) {
    const newCart = await addShoppingCart(userId);
    cart = { ...newCart, cartItems: [] };
  }
  // If the product is already in the cart, just update the quantity
  const cartItem = cart.cartItems.find((item) => item.productId === productId);
  if (cartItem) {
    const newQuantity = cartItem.quantity + quantity;
    const newTotalPrice = Number(product.price) * newQuantity;
    return prisma.cartItem.update({
      data: { quantity: newQuantity, totalPrice: newTotalPrice },
      where: { id: cartItem.id },
    });
  }
  // Otherwise, add the product to the cart
  return prisma.cartItem.create({
    data: {
      cart: { connect: { id: cart.id } },
      product: { connect: { id: product.id } },
      quantity,
      price: product.price,
      totalPrice: Number(product.price) * quantity,
    },
  });
}

export async function removeFromCart(userId: string, productId: string) {
  const cart = await getShoppingCart(userId);

  const cartItem = cart?.cartItems.find((item) => item.productId === productId);
  if (cartItem && cartItem.quantity > 1) {
    const newQuantity = cartItem.quantity - 1;
    const newTotalPrice = Number(cartItem.price) * newQuantity;
    return prisma.cartItem.update({
      data: { quantity: newQuantity, totalPrice: newTotalPrice },
      where: { id: cartItem.id },
    });
  } else if (cartItem) {
    return prisma.cartItem.delete({
      where: { id: cartItem.id },
    });
  }
}
